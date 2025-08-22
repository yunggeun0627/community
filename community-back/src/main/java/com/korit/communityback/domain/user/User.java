package com.korit.communityback.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.korit.communityback.domain.userRole.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer userId;
    private String username;
    @JsonIgnore
    private String password;
    private String fullName;
    private String email;
    private String profileImgPath;
    private String provider;
    private String providerId;

    private String roleNames;

    private List<UserRole> userRoles;
}
