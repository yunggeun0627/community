package com.korit.communityback.domain.polloption;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PollOption {
    private Integer pollOptionId;
    private Integer pollId;
    private String content;
    private Integer votes;
}
