package com.korit.communityback.dto.auth;

import lombok.Data;

@Data
public class LoginReqDto {
    private String username;
    private String password;
}
