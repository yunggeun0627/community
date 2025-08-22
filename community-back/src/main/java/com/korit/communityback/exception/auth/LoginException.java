package com.korit.communityback.exception.auth;

import com.korit.communityback.dto.error.SimpleErrorDto;
import lombok.Data;

@Data
public class LoginException extends RuntimeException {
    private SimpleErrorDto errorDto;

    public LoginException(String title, String errorMessage) {
        super(errorMessage);
        this.errorDto = new SimpleErrorDto(title, errorMessage);

    }
}
