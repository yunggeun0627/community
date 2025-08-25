package com.korit.communityback.controller;

import com.korit.communityback.dto.reponse.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CommunityController {

    @PostMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok(ResponseDto.success(null));
    }
}
