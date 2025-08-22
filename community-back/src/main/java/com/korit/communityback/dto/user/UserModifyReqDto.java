package com.korit.communityback.dto.user;

import com.korit.communityback.domain.user.User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class UserModifyReqDto {
    private Integer userId;
    private String fullName;
    private String email;
    private List<Integer> roleIds;
    private String oldFilePath;
    private MultipartFile file;

    public User toUser() {
        return User.builder()
                .userId(userId)
                .fullName(fullName)
                .email(email)
                .build();
    }
}
