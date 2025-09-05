package com.korit.communityback.controller;

import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.dto.tweet.TweetDto;
import com.korit.communityback.dto.tweet.TweetReqDto;
import com.korit.communityback.security.model.PrincipalUser;
import com.korit.communityback.service.TweetService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TweetController {

    private final TweetService tweetService;

    // 모든 트윗 조회
    @GetMapping("/tweets")
    public ResponseEntity<ResponseDto<List<TweetDto>>> getTweets() {
        return ResponseEntity.ok(ResponseDto.success(tweetService.getAllTweets()));
    }

    // 특정 유저 트윗 조회
    @GetMapping("/tweets/user/{userId}")
    public ResponseEntity<ResponseDto<List<TweetDto>>> getTweetsByUser(@PathVariable Integer userId) {
        List<TweetDto> tweets = tweetService.getTweetsByUser(userId);
//        System.out.println(tweets);
        return ResponseEntity.ok(ResponseDto.success(tweets));
    }

    // 새 트윗 작성
    @PostMapping("/tweets")
    public ResponseEntity<TweetDto> postTweet(@RequestBody TweetReqDto dto,
                                            @AuthenticationPrincipal PrincipalUser principal) {
        Integer userId = principal.getUser().getUserId();
        TweetDto saved = tweetService.createTweet(dto, userId);
        return ResponseEntity.ok(saved); // ✅ 그냥 DTO 내려줌
    }

    @DeleteMapping("/tweets/{id}")
    public ResponseEntity<?> deleteTweet(@PathVariable List<Integer> id) {
        try {
            tweetService.deleteTweet(id);
            return ResponseEntity.ok().body("삭제 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("삭제 실패");
        }
    }
}