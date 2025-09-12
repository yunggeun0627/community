package com.korit.communityback.dto.comment;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentDto {
    private Integer commentId;
    private String text;
    private String username;
    private LocalDateTime createdAt;
}
