package com.korit.communityback.dto.tweet;

import com.korit.communityback.domain.tweet.Tweet;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class TweetReqDto {
    private Integer userId;
    private String content;
    private String imageUrl;

    // DTO → 엔티티 변환
    public Tweet toEntity() {
        return Tweet.builder()
                .userId(userId)
                .content(content)
                .imageUrl(imageUrl)
                .build();
    }
}
