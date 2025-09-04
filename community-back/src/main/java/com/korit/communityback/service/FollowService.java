package com.korit.communityback.service;

import com.korit.communityback.domain.follow.FollowMapper;
import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowMapper followMapper;
    private final UserMapper userMapper;

    // 팔로우
    @Transactional
    public void follow(Integer userId) {
        Integer currentUserId = getCurrentUserId();

        // 이미 팔로우 중인지 체크
        boolean exists = followMapper.existsFollow(currentUserId, userId);
        if (exists) {
            throw new RuntimeException("이미 팔로우 중입니다.");
        }

        followMapper.insertFollow(currentUserId, userId);
    }

    // 언팔로우
    @Transactional
    public void unfollow(Integer userId) {
        Integer currentUserId = getCurrentUserId();

        boolean exists = followMapper.existsFollow(currentUserId, userId);
        if (!exists) {
            throw new RuntimeException("팔로우 관계가 존재하지 않습니다.");
        }

        followMapper.deleteFollow(currentUserId, userId);
    }

    // 내가 팔로잉 중인 유저 리스트
    @Transactional(readOnly = true)
    public List<User> getFollowing() {
        Integer currentUserId = getCurrentUserId();
        return userMapper.findFollowingUsers(currentUserId);
    }

    // 추천 유저 리스트
    @Transactional(readOnly = true)
    public List<User> recommend() {
        Integer currentUserId = getCurrentUserId();
        return userMapper.findRecommendedUsers(currentUserId);
    }

    // 로그인 유저 ID 가져오기 (예: JWT, 세션 등)
    private Integer getCurrentUserId() {
        // TODO: 실제 로그인 유저 ID 가져오기
        return 1; // 임시 하드코딩
    }
}
