package com.korit.communityback.dto.pollvote;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PollVote {
    private Integer PollVoteId;
    private Integer PollOptionId;
    private Integer userId;
    private LocalDateTime votedAt;
}
