package com.korit.communityback.domain.pollvote;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PollVote {
    private Integer PollVoteId;
    private Integer PollOptionId;
    private Integer userId;
    private LocalDateTime votedAt;
}
