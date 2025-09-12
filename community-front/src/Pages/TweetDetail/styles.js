import { css } from "@emotion/react";

/** 전체 페이지 */
export const detailPage = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
`;

/** 트윗 카드 */
export const tweetCard = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid #e6ecf0;
    background: #fff;
`;

export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const user = css`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 15px;
    color: #0f1419;
`;

export const avatar = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
    object-fit: cover;
`;

export const username = css`
    font-weight: bold;
    color: #0f1419;
`;

export const elapsedTime = css`
    color: #536471;
    font-size: 12px;
    margin-left: 4px;
`;

export const tweetContent = css`
    font-size: 15px;
    color: #0f1419;
    white-space: pre-wrap;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const tweetImage = css`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.03);
    }
`;

/** 답글 입력창 */
export const replyInputBox = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
    padding: 8px 0;
    border-top: 1px solid #e6ecf0;
`;

export const replyTextarea = css`
    width: 100%;
    min-height: 60px;
    border: none;
    outline: none;
    resize: none;
    font-size: 15px;
    color: #0f1419;
    padding: 8px 0;

    &::placeholder {
        color: #999;
    }
`;

export const replyFooter = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const iconGroup = css`
    display: flex;
    gap: 8px;

    & > button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: rgba(29, 155, 240, 0.1);
            border-radius: 50%;
        }
    }
`;

export const replyButton = css`
    padding: 8px 16px;
    border-radius: 20px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #1a8cd8;
    }
`;

/** 댓글 리스트 */
export const commentList = css`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const commentItem = css`
    display: flex;
    gap: 10px;
    padding: 8px 12px;
    background-color: #f7f9f9;
    border-radius: 12px;
    font-size: 14px;
    color: #0f1419;
    align-items: flex-start;
`;

export const commentUser = css`
    font-weight: 600;
    margin-right: 4px;
    color: #0f1419;
`;

/** 작성자 게시물 */
export const authorPosts = css`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > h4 {
        font-size: 16px;
        font-weight: bold;
        color: #0f1419;
        margin-bottom: 8px;
    }
`;

/** 작성자 게시물 개별 트윗 카드 */
export const authorTweetCard = css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px 14px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: #f5f8fa;
        transform: scale(1.01);
    }

    & > p {
        font-size: 14px;
        color: #0f1419;
        white-space: pre-wrap;
    }

    & > img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 12px;
    }
`;