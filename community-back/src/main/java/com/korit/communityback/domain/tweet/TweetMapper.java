package com.korit.communityback.domain.tweet;

import com.korit.communityback.domain.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TweetMapper {
    List<Tweet> findAll();
    void insert(Tweet tweet);
    Tweet findById(@Param("tweetId") Integer tweetId);
    List<Tweet> findByUserId(@Param("userId") Integer userId);

}
