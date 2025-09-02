package com.korit.communityback.domain.tweet;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Tweet {
    private Integer tweetId;
    private Integer userId;
    private String content;
    private String imageUrl;
    private LocalDateTime createdAt;
}
