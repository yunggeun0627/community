package com.korit.communityback.controller;

import com.korit.communityback.dto.auth.JoinReqDto;
import com.korit.communityback.dto.auth.LoginReqDto;
import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/auth/join")
    public ResponseEntity<?> join(@RequestBody @Valid JoinReqDto dto) throws BindException {
        return ResponseEntity.ok(ResponseDto.success(authService.join(dto)));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginReqDto dto) {
        return ResponseEntity.ok(ResponseDto.success(authService.login(dto)));
    }

    @GetMapping("/X/login")
    public void xLogin(HttpServletResponse response, HttpSession session) throws Exception {

    }

        @GetMapping("/x/callback")
        public ResponseEntity<?> xCallback (
                @RequestParam("oauth_token") String oauthToken,
                @RequestParam("oauth_verifier") String oauthVerifier,
                HttpSession session) throws Exception {

        return ResponseEntity.ok("소셜 로그인 완료");
    }
}

