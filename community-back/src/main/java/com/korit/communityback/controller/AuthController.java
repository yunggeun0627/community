package com.korit.communityback.controller;

import com.korit.communityback.dto.auth.JoinReqDto;
import com.korit.communityback.dto.auth.LoginReqDto;
import com.korit.communityback.dto.reponse.ResponseDto;
import com.korit.communityback.service.AuthService;
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
}
