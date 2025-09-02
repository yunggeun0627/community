package com.korit.communityback.controller;

import com.korit.communityback.dto.error.SimpleErrorDto;
import com.korit.communityback.dto.response.ResponseDto;
import com.korit.communityback.exception.auth.LoginException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionControllerAdvice {

    @ExceptionHandler(BindException.class)
    public ResponseEntity<ResponseDto<?>> validException(BindException e) {
        Map<String, String> errorMap = e.getFieldErrors()
                .stream()
                .collect(Collectors
                        .toMap(
                                (fieldError) -> fieldError.getField(),
                                (fieldError) -> fieldError.getDefaultMessage()
                        ));
        System.out.println(errorMap);
        return ResponseEntity.badRequest().body(ResponseDto.fail(HttpStatus.BAD_REQUEST, "요청 데이터 유효성 검사 오류", errorMap));
    }

    @ExceptionHandler(LoginException.class)
    public ResponseEntity<ResponseDto<SimpleErrorDto>> loginError(LoginException e) {
        return ResponseEntity.badRequest().body(ResponseDto.fail(HttpStatus.BAD_REQUEST, "로그인 정보 오류", e.getErrorDto()));
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<ResponseDto<String>> duplicatedKey(DuplicateKeyException e) {
        return ResponseEntity.badRequest().body(ResponseDto.fail(HttpStatus.BAD_REQUEST, "중복 키 오류", e.getMessage()));
    }
}
