import React from "react";
import styled from "styled-components";
import { useTweet } from "../TweetContext";

import Header from "./Header";
import ActionBar from "./ActionBar";

const Tweet = () => {
  const { date, tweetContents, numOfLikes, numOfRetweets } = useTweet();

  return (
    <Wrapper>
      <Header />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <strong>{numOfRetweets}</strong>
        <StatType>Retweets</StatType>
        <strong> {numOfLikes} </strong>
        <StatType>Likes</StatType>
      </Stats>
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const StatType = styled.span`
  color: rgb(101, 119, 134);
  margin-right: 30px;
  margin-left: 5px;
`;

export default Tweet;
