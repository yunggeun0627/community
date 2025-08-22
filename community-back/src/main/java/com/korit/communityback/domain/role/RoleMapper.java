package com.korit.communityback.domain.role;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {
    Role findByRoleName(String roleName);
}
