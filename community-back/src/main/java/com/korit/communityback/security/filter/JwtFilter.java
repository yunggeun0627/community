package com.korit.communityback.security.filter;

import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import com.korit.communityback.security.jwt.JwtUtil;
import com.korit.communityback.security.model.PrincipalUser;
import io.jsonwebtoken.Claims;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter implements Filter {

    private final JwtUtil jwtUtil;
    private final UserMapper userMapper;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;

        String path = request.getRequestURI();

        // ✅ /uploads/** 요청은 인증 없이 통과
        if (path.startsWith("/uploads/")) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        // ✅ OPTIONS 요청은 CORS preflight → 그냥 통과
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        // ✅ Authorization 헤더 추출
        String authorization = request.getHeader("Authorization");

        // ✅ JWT 인증 시도
        authenticate(authorization);

        filterChain.doFilter(servletRequest, servletResponse);
    }

    private void authenticate(String token) {
        // ✅ Bearer 토큰 파싱 & 유효성 검사
        String validatedToken = jwtUtil.validateBearerToken(token);
        if (validatedToken == null) {
            return; // 토큰 없거나 유효하지 않으면 인증 안 함
        }

        // ✅ Claims 추출
        Claims claims = jwtUtil.getClaims(validatedToken);
        if (claims == null) {
            return;
        }

        // ✅ SecurityContext에 Authentication 세팅
        setAuthentication(claims);
    }

    private void setAuthentication(Claims claims) {
        // JWT payload에서 userId 가져오기
        Integer userId = claims.get("userId", Integer.class);

        // DB에서 유저 조회
        User foundUser = userMapper.findById(userId);
        if (foundUser == null) {
            return;
        }

        // ✅ PrincipalUser는 UserDetails 구현체라고 가정
        PrincipalUser principal = PrincipalUser.builder()
                .user(foundUser)
                .build();

        // UsernamePasswordAuthenticationToken에 UserDetails 세팅
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                principal,
                null, // credentials
                principal.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}