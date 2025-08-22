package com.korit.communityback.service;

import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import com.korit.communityback.domain.userRole.UserRole;
import com.korit.communityback.domain.userRole.UserRoleMapper;
import com.korit.communityback.dto.reponse.PaginationRespDto;
import com.korit.communityback.dto.user.UserModifyReqDto;
import com.korit.communityback.dto.user.UserRegisterReqDto;
import com.korit.communityback.dto.user.UserSearchReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final UserRoleMapper userRoleMapper;
    private final BCryptPasswordEncoder passwordEncoder;
    private final  FileService fileService;

    public PaginationRespDto<User> searchUsers(UserSearchReqDto dto) {
        Integer totalElements = userMapper.getCountOfOptions(dto.toOption());
        Integer totalPages = (int) Math.ceil(totalElements.doubleValue() / dto.getSize().doubleValue());
        List<User> foundUsers = userMapper.findAllBySearchOption(dto.toOption());
        boolean isLast = dto.getPage().equals(totalPages);

        return PaginationRespDto.<User>builder()
                .contents(foundUsers)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .isLast(isLast)
                .page(dto.getPage())
                .size(dto.getSize())
                .build();
    }

    @Transactional(rollbackFor = Exception.class)
    public void register(UserRegisterReqDto dto) {
        if(userMapper.findByUsername(dto.getUsername()) != null) {
            throw new DuplicateKeyException("이미 존재하는 사용자 이름입니다.");
        }
        User userEntity = dto.toUser(passwordEncoder);
        if (dto.getFile() != null) {
            final String UPLOAD_PATH = "/profile";
            String profileImgPath =  UPLOAD_PATH + "/" + fileService.uploadFile(dto.getFile(), UPLOAD_PATH);
            userEntity.setProfileImgPath(profileImgPath);
        }
        userMapper.insert(userEntity);
        dto.getRoleIds().forEach(roleId -> userRoleMapper.insert(
                UserRole.builder()
                        .userId(userEntity.getUserId())
                        .roleId(roleId)
                        .build()));
    }

    @Transactional(rollbackFor = Exception.class)
    public void modify(UserModifyReqDto dto) {
        User userEntity = dto.toUser();

        if (dto.getFile() != null) {
            final String UPLOAD_PATH = "/profile";
            String profileImgPath =  UPLOAD_PATH + "/" + fileService.uploadFile(dto.getFile(), UPLOAD_PATH);
            userEntity.setProfileImgPath(profileImgPath);
            fileService.deleteFile(dto.getOldFilePath());
        }

        userMapper.update(userEntity);

        if (dto.getRoleIds() != null) {
            userRoleMapper.deleteByUserId(dto.getUserId());
            dto.getRoleIds().forEach(roleId -> userRoleMapper.insert(
                    UserRole.builder()
                            .userId(dto.getUserId())
                            .roleId(roleId)
                            .build()
            ));
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public void delete(List<Integer> userIds) {
        userMapper.deleteByIds(userIds);
        userRoleMapper.deleteByUserIds(userIds);
    }
}

