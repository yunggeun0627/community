package com.korit.communityback.domain.follow;

import com.korit.communityback.domain.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface FollowMapper {
    void insertFollow(@Param("followerId") Integer followerId,
                        @Param("followingId") Integer followingId);

    void deleteFollow(@Param("followerId") Integer followerId,
                        @Param("followingId") Integer followingId);

    boolean existsFollow(@Param("followerId") Integer followerId,
                            @Param("followingId") Integer followingId);
}
