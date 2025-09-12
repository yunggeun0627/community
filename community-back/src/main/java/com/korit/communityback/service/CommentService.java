package com.korit.communityback.service;

import com.korit.communityback.domain.comment.Comment;
import com.korit.communityback.domain.comment.CommentMapper;
import com.korit.communityback.domain.tweet.Tweet;
import com.korit.communityback.domain.tweet.TweetMapper;
import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import com.korit.communityback.dto.comment.CommentDto;
import com.korit.communityback.dto.comment.CommentReqDto;
import com.korit.communityback.dto.tweet.TweetDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentMapper commentMapper;
    private final TweetMapper tweetMapper;
    private final UserMapper userMapper;

    // 댓글 목록
    public List<CommentDto> getComments(Integer tweetId) {
        return commentMapper.findByTweetId(tweetId);
    }

    // 댓글 작성
    public CommentDto createComment(Integer tweetId, Integer userId, CommentReqDto dto) {
        // 존재하는 트윗인지 체크
        Tweet tweet = tweetMapper.findById(tweetId);
        if (tweet == null) throw new RuntimeException("Tweet not found");

        // 유저 확인
        User user = userMapper.findById(userId);
        if (user == null) throw new RuntimeException("User not found");

        Comment comment = new Comment();
        comment.setText(dto.getText());
        comment.setTweetId(tweetId);
        comment.setUserId(userId);
        comment.setCreatedAt(LocalDateTime.now());

        commentMapper.insertComment(comment);

        // 다시 DTO 만들어 반환
        CommentDto res = new CommentDto();
        res.setCommentId(comment.getCommentId()); // insert 시 PK 채워지게 설정 필요 (MyBatis useGeneratedKeys)
        res.setText(comment.getText());
        res.setUsername(user.getUsername());
        res.setCreatedAt(comment.getCreatedAt());

        return res;
    }

    // 댓글 삭제
    public void deleteComment(Integer tweetId, Integer commentId, Integer userId) {
        Comment comment = commentMapper.findById(commentId);
        if (comment == null) throw new RuntimeException("Comment not found");

        if (!comment.getTweetId().equals(tweetId)) {
            throw new RuntimeException("잘못된 요청");
        }

        if (!comment.getUserId().equals(userId)) {
            throw new RuntimeException("본인 댓글만 삭제 가능");
        }

        commentMapper.deleteComment(commentId);
    }
}
