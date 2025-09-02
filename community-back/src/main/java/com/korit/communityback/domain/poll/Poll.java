package com.korit.communityback.domain.poll;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Poll {
    private Integer pollId;
    private Integer tweetId;
    private LocalDateTime endTime;
}
