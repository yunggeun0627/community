package com.korit.communityback.service;

import com.korit.communityback.domain.tweet.Tweet;
import com.korit.communityback.domain.tweet.TweetMapper;
import com.korit.communityback.dto.tweet.TweetDto;
import com.korit.communityback.dto.tweet.TweetReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class TweetService {

    private final TweetMapper tweetMapper;

    // 모든 트윗 조회
    @Transactional(readOnly = true)
    public List<TweetDto> getAllTweets() {
        return tweetMapper.findAll()
                .stream()
                .map(TweetDto::fromEntity)
                .collect(Collectors.toList());
    }

    // 특정 유저의 트윗 조회
    @Transactional(readOnly = true)
    public List<TweetDto> getTweetsByUser(Integer userId) {
        return tweetMapper.findByUserId(userId)
                .stream()
                .map(TweetDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public TweetDto createTweet(TweetReqDto dto) {
        // 1️⃣ 로그인 정보에서 userId 가져오기
        Integer currentUserId = getCurrentUserIdFromSession(); // 구현 필요

        Tweet tweet = Tweet.builder()
                .userId(currentUserId)       // 프론트에 의존하지 않고 서버에서 세팅
                .content(dto.getContent())
                .imageUrl(dto.getImageUrl())
                .build();
        tweetMapper.insert(tweet);

        // DB에 insert 후, 생성된 엔티티를 DTO로 변환해 반환
        return TweetDto.fromEntity(tweet);
    }

    // 세션 또는 JWT에서 로그인한 유저 ID 가져오기
    private Integer getCurrentUserIdFromSession() {
        return 1; // 테스트용, 실제 구현 필요
    }
}
