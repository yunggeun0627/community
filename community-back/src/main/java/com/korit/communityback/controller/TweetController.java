package com.korit.communityback.controller;

import com.korit.communityback.dto.comment.CommentDto;

import com.korit.communityback.dto.comment.CommentReqDto;
import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.dto.tweet.TweetDto;
import com.korit.communityback.dto.tweet.TweetReqDto;
import com.korit.communityback.security.model.PrincipalUser;
import com.korit.communityback.service.CommentService;
import com.korit.communityback.service.TweetService;
import lombok.RequiredArgsConstructor;
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
    private final CommentService commentService;

    // 모든 트윗 조회
    @GetMapping("/tweets")
    public ResponseEntity<ResponseDto<List<TweetDto>>> getTweets() {
        return ResponseEntity.ok(ResponseDto.success(tweetService.getAllTweets()));
    }

    // 특정 유저 트윗 조회
    @GetMapping("/tweets/user/{userId}")
    public ResponseEntity<ResponseDto<List<TweetDto>>> getTweetsByUser(@PathVariable Integer userId) {
        List<TweetDto> tweets = tweetService.getTweetsByUser(userId);
        return ResponseEntity.ok(ResponseDto.success(tweets));
    }

    // 새 트윗 작성
    @PostMapping("/tweets")
    public ResponseEntity<TweetDto> postTweet(@RequestBody TweetReqDto dto,
                                                @AuthenticationPrincipal PrincipalUser principal) {
        Integer userId = principal.getUser().getUserId();
        TweetDto saved = tweetService.createTweet(dto, userId);
        return ResponseEntity.ok(saved);
    }

    // 트윗 삭제
    @DeleteMapping("/tweets/{id}")
    public ResponseEntity<?> deleteTweet(@PathVariable List<Integer> id) {
        try {
            tweetService.deleteTweet(id);
            return ResponseEntity.ok().body("삭제 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("삭제 실패");
        }
    }

    // ========================
    // 댓글 관련
    // ========================

    // 특정 트윗의 댓글 목록 조회
    @GetMapping("/tweets/{tweetId}/comments")
    public ResponseEntity<ResponseDto<List<CommentDto>>> getComments(@PathVariable Integer tweetId) {
        return ResponseEntity.ok(ResponseDto.success(commentService.getComments(tweetId)));
    }

    // 특정 트윗에 댓글 작성
    @PostMapping("/tweets/{tweetId}/comments")
    public ResponseEntity<CommentDto> postComment(@PathVariable Integer tweetId,
                                                    @RequestBody CommentReqDto dto,
                                                    @AuthenticationPrincipal PrincipalUser principal) {
        Integer userId = principal.getUser().getUserId();
        CommentDto saved = commentService.createComment(tweetId, userId, dto);
        return ResponseEntity.ok(saved);
    }

    // 댓글 삭제
    @DeleteMapping("/tweets/{tweetId}/comments/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable Integer tweetId,
                                            @PathVariable Integer commentId,
                                            @AuthenticationPrincipal PrincipalUser principal) {
        try {
            commentService.deleteComment(tweetId, commentId, principal.getUser().getUserId());
            return ResponseEntity.ok("댓글 삭제 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("댓글 삭제 실패");
        }
    }
}