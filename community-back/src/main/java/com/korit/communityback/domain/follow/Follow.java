package com.korit.communityback.domain.follow;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Follow {
    private Integer followId;
    private Integer followerId;
    private Integer followingId;
    private LocalDateTime createdAt;
}
