import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    width: 100%;
    min-height: 100vh;
    overflow-y: auto; /* ✅ 스크롤 여기만 */
`;

export const container = css`
    flex: 1;
    min-width: 600px;
    max-width: 600px;
    height: 100vh;
    border-right: 1px solid #e6ecf0;
    padding: 20px;
`;