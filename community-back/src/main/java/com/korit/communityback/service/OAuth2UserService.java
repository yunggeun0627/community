package com.korit.communityback.service;

import com.korit.communityback.domain.role.Role;
import com.korit.communityback.domain.role.RoleMapper;
import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import com.korit.communityback.domain.userRole.UserRole;
import com.korit.communityback.domain.userRole.UserRoleMapper;
import com.korit.communityback.security.model.PrincipalUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {

    private final UserMapper userMapper;
    private final UserRoleMapper userRoleMapper;
    private final RoleMapper roleMapper;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String email = null;
        String name = null;
        String providerId = null;

        OAuth2User oAuth2User = super.loadUser(userRequest);

        if("google".equals(registrationId)) {
            email = oAuth2User.getAttribute("email");
            name = oAuth2User.getAttribute("name");
            providerId = oAuth2User.getAttribute("sub");
        } else if ("X".equals(registrationId)) {

        }

        User user = userMapper.findByUsername(email);

        if (user == null) {
            user = User.builder()
                    .username(email)
                    .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                    .fullName(name)
                    .profileImgPath("/profile/default.jpg")
                    .provider(registrationId)
                    .providerId(providerId)
                    .build();

            userMapper.insert(user);

            Role role = roleMapper.findByRoleName("ROLE_USER");

            UserRole userRole = UserRole.builder()
                    .roleId(role.getRoleId())
                    .userId(user.getUserId())
                    .build();
            userRoleMapper.insert(userRole);
            userRole.setRole(role);
            user.setUserRoles(List.of(userRole));
        }
        return PrincipalUser.builder()
                .user(user)
                .attributes(oAuth2User.getAttributes())
                .build();
    }
}
