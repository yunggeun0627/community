package com.korit.communityback.controller;

import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/following")
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    // 내가 팔로잉 중인 유저 리스트
    @GetMapping
    public ResponseEntity<ResponseDto<?>> getFollowing() {
        return ResponseEntity.ok(ResponseDto.success(followService.getFollowing()));
    }

    // 팔로우
    @PostMapping("/{userId}")
    public ResponseEntity<ResponseDto<?>> follow(@PathVariable Integer userId) {
        followService.follow(userId);
        return ResponseEntity.ok(ResponseDto.success("팔로우 완료"));
    }

    // 언팔로우
    @DeleteMapping("/{userId}")
    public ResponseEntity<ResponseDto<?>> unfollow(@PathVariable Integer userId) {
        followService.unfollow(userId);
        return ResponseEntity.ok(ResponseDto.success("언팔로우 완료"));
    }

    // 추천 유저 리스트
    @GetMapping("/recommendations")
    public ResponseEntity<ResponseDto<?>> getRecommendations() {
        return ResponseEntity.ok(ResponseDto.success(followService.recommend()));
    }
}
