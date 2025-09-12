package com.korit.communityback.domain.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private Integer commentId;
    private String text;
    private String username;
    private Integer tweetId;
    private Integer userId;
    private LocalDateTime createdAt;
}
