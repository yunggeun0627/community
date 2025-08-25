package com.korit.communityback.service;

import com.korit.communityback.util.AppProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {

    @Value("${user.dir}")
    private String rootPath;

//    private final AppProperties appProperties;

//    public String uploadFile(MultipartFile file, String imageConfigName) {
//        String dirPath = appProperties.getImageConfigs().get(imageConfigName).getDirPath();
//
//        String newFilename = generateRandomFilename(file.getOriginalFilename());
//        // 파일 업로드 경로 생성 -> rootPath - ${user.dir} -> 프로젝트 경로
//
//        mkdirs(dirPath);
//        Path path = Paths.get(dirPath + "/" + newFilename);
//        try {
//            Files.write(path, file.getBytes());
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        }
//
//        return newFilename;
//    }

    public String uploadFile(MultipartFile file, String dirPath) {
        String newFilename = generateRandomFilename(file.getOriginalFilename());
        String uploadPath = rootPath + "/upload" + dirPath;
        mkdirs(uploadPath);
        Path path = Paths.get(uploadPath + "/" + newFilename);
        try {
            Files.write(path, file.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return newFilename;
    }

    private String generateRandomFilename(String originalFilename) {
        StringBuilder newFilename = new StringBuilder();
        newFilename.append(UUID.randomUUID().toString().replaceAll("-", ""));
        newFilename.append("_");
        newFilename.append(originalFilename);

        return newFilename.toString();
    }

    private void mkdirs(String path) {
        File f = new File(path);
        if (!f.exists()) {
            f.mkdirs();
        }
    }


    public void deleteFile (String path){
        if (path.substring(path.lastIndexOf("/")).contains("default")) {
            return;
        }
        File file = new File(path);
        if (!file.exists()) {
            return;
        }
        file.delete();
    }
}
