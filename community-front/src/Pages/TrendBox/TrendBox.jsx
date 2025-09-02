import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function TrendBox({ trends }) {
    return (
        <div css={s.trendBox}>
            <h3 css={s.sectionTitle}>트렌드</h3>
            {trends.map((trend) => (
                <div key={trend.id} css={s.trendItem}>
                    <span>{trend.name}</span>
                    <span>{trend.tweet} Tweets</span>
                </div>
            ))}
        </div>
    );
}

export default TrendBox;