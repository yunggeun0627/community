package com.korit.communityback.service;

import com.korit.communityback.domain.role.Role;
import com.korit.communityback.domain.role.RoleMapper;
import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import com.korit.communityback.domain.userRole.UserRole;
import com.korit.communityback.domain.userRole.UserRoleMapper;
import com.korit.communityback.dto.auth.JoinReqDto;
import com.korit.communityback.dto.auth.LoginReqDto;
import com.korit.communityback.dto.auth.TokenDto;
import com.korit.communityback.exception.auth.LoginException;
import com.korit.communityback.security.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final RoleMapper roleMapper;
    private final UserRoleMapper userRoleMapper;

    @Transactional(rollbackFor = Exception.class)
    public User join(JoinReqDto dto) throws BindException {
        // 유효성 검사(사용자이름 중복확인)
        User foundUser = userMapper.findByUsername(dto.getUsername());
        if (foundUser != null) {
            BindingResult bindingResult = new BeanPropertyBindingResult(foundUser, "");
            FieldError fieldError = new FieldError("username", "username", "이미 존재하는 사용자이름 입니다.");
            bindingResult.addError(fieldError);
            throw new BindException(bindingResult);
        }
        User joinUser = dto.toUser(passwordEncoder);
        userMapper.insert(joinUser);

        final String DEFAULT_USER_ROLE = "ROLE_USER";
        Role foundRole = roleMapper.findByRoleName(DEFAULT_USER_ROLE);

        UserRole userRole = UserRole.builder()
                .userId(joinUser.getUserId())
                .roleId(foundRole.getRoleId())
                .build();
        userRoleMapper.insert(userRole);

        userRole.setRole(foundRole);
        joinUser.setUserRoles(List.of(userRole));
        return joinUser;
    }

    public TokenDto login(LoginReqDto dto) {
        User foundUser = userMapper.findByUsername(dto.getUsername());
        if (foundUser == null) {
            throw new LoginException("로그인 오류", "사용자 정보를 다시 확인하세요.");
        }
        if (!passwordEncoder.matches(dto.getPassword(), foundUser.getPassword())) {
            throw new LoginException("로그인 오류", "사용자 정보를 다시 확인하세요.");
        }
        return TokenDto.builder()
                .accessToken(jwtUtil.generateAccessToken(foundUser))
                .build();
    }
}
