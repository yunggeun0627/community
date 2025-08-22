package com.korit.communityback.service;

import com.korit.communityback.domain.user.User;
import com.korit.communityback.domain.user.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final FileService fileService;
    private final UserMapper userMapper;

    @Transactional(rollbackFor = Exception.class)
    public String updateProfileImg(User user, MultipartFile profileFile) {
        final String UPLOAD_PATH = "/profile";
        String uploadedFile = fileService.uploadFile(profileFile, UPLOAD_PATH);
        userMapper.updateProfileImgPathById(user.getUserId(), UPLOAD_PATH + "/" + uploadedFile);
        fileService.deleteFile(user.getProfileImgPath());
        return UPLOAD_PATH + "/" + uploadedFile;
    }
}
