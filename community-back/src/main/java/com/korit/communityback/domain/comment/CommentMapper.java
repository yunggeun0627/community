package com.korit.communityback.domain.comment;

import com.korit.communityback.dto.comment.CommentDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    // 특정 트윗 댓글 목록
    List<CommentDto> findByTweetId(Integer tweetId);

    // 댓글 등록
    void insertComment(Comment comment);

    // 댓글 1개 조회
    Comment findById(Integer commentId);

    // 댓글 삭제
    void deleteComment(Integer commentId);
}
