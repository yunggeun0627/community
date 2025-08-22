package com.korit.communityback.dto.user;

import com.korit.communityback.domain.user.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class UserRegisterReqDto {
    private String username;
    private String password;
    private String fullName;
    private String email;
    private List<Integer> roleIds;
    private MultipartFile file;

    public User toUser(BCryptPasswordEncoder passwordEncoder) {
        return User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .email(email)
                .profileImgPath("/profile/default.jpg")
                .build();
    }
}
