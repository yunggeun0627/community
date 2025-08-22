package com.korit.communityback.controller;

import com.korit.communityback.domain.user.User;
import com.korit.communityback.dto.reponse.PaginationRespDto;
import com.korit.communityback.dto.reponse.ResponseDto;
import com.korit.communityback.dto.user.UserModifyReqDto;
import com.korit.communityback.dto.user.UserRegisterReqDto;
import com.korit.communityback.dto.user.UserSearchReqDto;
import com.korit.communityback.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/admin/users")
    public ResponseEntity<ResponseDto<PaginationRespDto<User>>> searchUsers(UserSearchReqDto dto) {
        System.out.println(dto);
        return ResponseEntity.ok(ResponseDto.success(userService.searchUsers(dto)));
    }

    @PostMapping("/admin/users")
    public ResponseEntity<ResponseDto<?>> register(@ModelAttribute UserRegisterReqDto dto) {
        System.out.println(dto);
        return ResponseEntity.ok(ResponseDto.success("회원 등록 완료"));
    }

    @PostMapping("/admin/users/modify")
    public ResponseEntity<ResponseDto<?>> modify(@ModelAttribute UserModifyReqDto dto) {
        userService.modify(dto);
        return ResponseEntity.ok(ResponseDto.success("회원 정보 수정 완료"));
    }

    @DeleteMapping("/admin/users")
    public ResponseEntity<ResponseDto<?>> delete(@RequestBody List<Integer> userIds) {
        userService.delete(userIds);
        return ResponseEntity.ok(ResponseDto.success("회원 삭제 완료"));
    }
}
