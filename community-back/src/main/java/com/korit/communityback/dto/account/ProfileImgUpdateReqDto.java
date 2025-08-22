package com.korit.communityback.dto.account;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProfileImgUpdateReqDto {
    private MultipartFile multipartFile;
}
