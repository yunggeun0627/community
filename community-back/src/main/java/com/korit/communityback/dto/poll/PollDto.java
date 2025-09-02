package com.korit.communityback.dto.poll;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PollDto {
    private Integer pollId;
    private Integer tweetId;
    private LocalDateTime endTime;
}
