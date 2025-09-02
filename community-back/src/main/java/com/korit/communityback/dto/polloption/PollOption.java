package com.korit.communityback.dto.polloption;

import lombok.Data;

@Data
public class PollOption {
    private Integer pollOptionId;
    private Integer pollId;
    private String content;
    private Integer votes;
}
