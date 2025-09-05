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
    public TweetDto createTweet(TweetReqDto dto, Integer userId) {
        Tweet tweet = new Tweet();
        tweet.setUserId(userId);             // 세션/토큰에서 가져온 로그인 ID
        tweet.setContent(dto.getContent());
        tweet.setImageUrl(dto.getImageUrl());
        tweetMapper.insert(tweet);
        return TweetDto.fromEntity(tweet);
    }

    @Transactional
    public void deleteTweet(List<Integer> tweetId) {
        tweetMapper.deleteByIds(tweetId);
    }
}
