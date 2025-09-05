package com.korit.communityback.security.model;

import com.korit.communityback.domain.user.User;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Builder
@Data
public class PrincipalUser implements UserDetails, OAuth2User {
    private User user;
    private Map<String, Object> attributes;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getUserRoles()
                .stream()
                .map(userRole -> new SimpleGrantedAuthority(userRole.getRole().getRoleName()))
                .collect(Collectors.toSet());
    }

    @Override
    public String getPassword() {
        return user.getPassword() != null ? user.getPassword() : "";
    }

    @Override
    public String getUsername() {
        // username 컬럼이 있으면 그거 사용
        return user.getUsername();
        // 만약 username 없고 email이 유니크라면:
        // return user.getEmail();
    }

    @Override
    public String getName() {
        // OAuth2 로그인일 때 사용자 식별값 (일반 로그인과 다를 수 있음)
        return user.getUsername();
    }
}
