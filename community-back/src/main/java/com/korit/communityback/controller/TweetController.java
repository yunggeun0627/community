package com.korit.communityback.controller;

import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.dto.tweet.TweetDto;
import com.korit.communityback.dto.tweet.TweetReqDto;
import com.korit.communityback.service.TweetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
        List<TweetDto> tweets = tweetService.getAllTweets();
//        System.out.println(tweets);
        return ResponseEntity.ok(ResponseDto.success(tweets));
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
    public ResponseEntity<ResponseDto<TweetDto>> postTweet(@RequestBody TweetReqDto dto) {
        TweetDto createdTweet = tweetService.createTweet(dto);
//        System.out.println(dto);
        return ResponseEntity.ok(ResponseDto.success(createdTweet));
    }
}