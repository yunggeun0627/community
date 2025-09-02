package com.korit.communityback.security.handler;

import com.korit.communityback.security.jwt.JwtUtil;
import com.korit.communityback.security.model.PrincipalUser;
import jakarta.servlet.FilterChain;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public abstract class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final JwtUtil jwtUtil;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
        String accessToken = jwtUtil.generateAccessToken(principalUser.getUser());
        response.sendRedirect("http://localhost:5173/auth/oauth2/login?accessToken" + accessToken);

    }
}
