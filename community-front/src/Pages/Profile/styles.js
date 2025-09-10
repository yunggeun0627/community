import { css } from '@emotion/react';

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

export const header = css`
    height: 200px;
    background-color: #1da1f2;
    position: relative;
`;

export const headerImg = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const bannerWrapper = css`
    position: relative;
    width: 100%;
    height: 120px; /* 배너 높이 */
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    background-color: #e6ecf0; /* 배너 없는 경우 기본 배경 */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const banner = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const bannerPlaceholder = css`
    width: 100%;
    height: 100%;
    background-color: #cfd9de;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #657786;
`;

export const avatarInput = css`
    display: none;
`;

export const cameraIcon = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* 아이콘 클릭은 wrapper가 받도록 */
`;

export const avatarRow = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 16px 0;
`;

export const avatarWrapper = css`
    position: relative;
    display: inline-block;
    margin-left: 20px;
    margin-top: -40px;
    cursor: pointer;
`;

export const avatar = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid white;
    object-fit: cover;
`;

export const avatarIcon = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid white;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: white;
`;

export const editButton = css`
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const info = css`
    padding: 20px;
`;

export const bio = css`
    font-weight: 500;
    font-size: 16px;
    color: #333;
    margin-bottom: 2px;
`;

export const username = css`
    font-size: 14px;
    color: #555;
    margin-bottom: 2px;
`;

export const nickname = css`
    font-weight: 600;
    font-size: 16px;
    color: #111;
`;

export const handle = css`
    color: gray;
    margin-bottom: 10px;
`;

export const stats = css`
    display: flex;
    gap: 20px;
    color: gray;
    font-size: 14px;
    margin: 10px 0;
`;

export const tabs = css`
    display: flex;
    border-bottom: 1px solid #e6ecf0;
    margin-bottom: 10px;

    div {
        flex: 1;
        text-align: center;
        padding: 12px 0;
        cursor: pointer;
        font-weight: bold;
        color: gray;

        &.active {
            color: black;
            border-bottom: 2px solid #1da1f2;
        }
    }
`;

export const tweetItem = css`
    padding: 12px 20px;
    border-bottom: 1px solid #e6ecf0;
    cursor: pointer;

    &:hover {
        background-color: #f5f8fa;
    }
`;

export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const modalContent = css`
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        margin-bottom: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 14px;
    }

    input {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 6px;
    }
`;

export const modalHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;
export const closeButton = css`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;
export const modalTitle = css`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    flex-grow: 1;
`;
export const saveButton = css`
    background-color: #000;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
`;

export const modalButtons = css`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
        padding: 8px 14px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    button:first-of-type {
        background: #1d9bf0;
        color: white;
    }

    button:last-of-type {
        background: #f5f5f5;
    }
`;

export const inputWrapper = css`
    position: relative;
    margin-bottom: 24px;
`;

export const label = (active) => css`
    position: absolute;
    left: 12px;
    top: ${active ? '6px' : '50%'};
    transform: translateY(${active ? '0' : '-50%'});
    font-size: ${active ? '12px' : '16px'}; /* 👈 focus되면 작아짐 */
    color: ${active ? '#1da1f2' : '#aaa'};
    pointer-events: none;
    transition: all 0.2s ease;
`;

export const inputField = css`
    width: 100%;
    height: 48px; /* 👈 이미지와 같은 높이 */
    padding: 0 40px 0 12px; /* 오른쪽 여백 확보 */
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    color: #333;
    transition: border-color 0.2s;

    &:focus {
        border-color: #1da1f2;
    }
`;

export const charCount = css`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #999;
`;