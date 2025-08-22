import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const container = css`  
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 2rem;
width: 100vw; 
height: 100vh;
background-color: #f3f4f6;
`;

const box = css`
text-align: center;
`;

const title = css`
margin: 0;
font-size: 6rem;
color: #f16363;
`;

const subTitle = css`
margin-top: 1rem;
margin-bottom: 1rem;
font-size: 4rem;
`;

const description = css`
font-size: 1.7rem;
color: #3f79ff;
`;

const homeButton = css`
display: inline-flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border: 0.1rem solid #dbdbdb;
border-radius: 0.8rem;
padding: 1rem 1.5rem;
width: fit-content;
background-color: white;
text-decoration: none;
color: #222222;
font-size: 1.6rem;
font-weight: 500;

&:hover {
    background-color: #fafafa;
}

&:active {
    background-color: #eeeeee;
}
`;

function NotFound(props) {
    return (
        <div css={container}>
            <div css={box}>
                <h1 css={title}>404</h1>
                <h2 css={subTitle}>페이지를 찾을 수 없습니다.</h2>
                <p css={description}>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
                <Link css={homeButton} to={"/"}>홈으로 돌아가기</Link>
            </div>
        </div>
    );
}

export default NotFound;