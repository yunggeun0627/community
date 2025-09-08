package com.korit.communityback.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    // 🔹 프로필 업로드
    @PostMapping("/upload/profile")
    public ResponseEntity<Map<String, String>> uploadProfile(@RequestParam("file") MultipartFile file) {
        return handleFileUpload(file, "profile");
    }

    // 🔹 트윗 업로드
    @PostMapping("/upload/tweet")
    public ResponseEntity<Map<String, String>> uploadTweet(@RequestParam("file") MultipartFile file) {
        return handleFileUpload(file, "tweet");
    }

    // 🔹 공통 업로드 처리 메서드
    private ResponseEntity<Map<String, String>> handleFileUpload(MultipartFile file, String type) {
        try {
            // 업로드 경로 (예: upload/profile, upload/tweet)
            String uploadDir = "upload/" + type + "/";

            // 파일명 충돌 방지
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path path = Paths.get(uploadDir + fileName);

            // 디렉토리 없으면 생성
            Files.createDirectories(path.getParent());

            // 파일 저장
            Files.write(path, file.getBytes());

            // 클라이언트 접근 가능한 URL
            String fileUrl = "/upload/" + type + "/" + fileName;

            return ResponseEntity.ok(Map.of("url", fileUrl));

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "파일 업로드 실패"));
        }
    }
}
