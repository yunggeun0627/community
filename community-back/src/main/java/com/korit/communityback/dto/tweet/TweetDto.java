package com.korit.communityback.dto.tweet;

import com.korit.communityback.domain.tweet.Tweet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TweetDto {
    private Integer tweetId;
    private Integer userId;
    private String content;
    private String imageUrl;
    private LocalDateTime createdAt;

    public static TweetDto fromEntity(Tweet tweet) {
        return TweetDto.builder()
                .tweetId(tweet.getTweetId())
                .userId(tweet.getUserId())
                .content(tweet.getContent())
                .imageUrl(tweet.getImageUrl())
                .createdAt(LocalDateTime.now())
                .build();
    }
}
