import React from "react";
import styled from "styled-components";
import { TweetProvider } from "./TweetContext";

import Tweet from "./Tweet";

import avatar from "../assets/carmen-sandiego.png";

const App = () => {
  // const {
  //   date,
  //   tweetContents,
  //   displayName,
  //   username,
  //   avatarSrc,
  //   numOfLikes,
  //   numOfRetweets,
  //   setIsRetweetedByCurrentUser,
  //   setIsLikedByCurrentUser,
  //   isRetweetedByCurrentUser,
  //   isLikedByCurrentUser,
  // } = useContext(TweetContext);
  return (
    <TweetProvider>
      <Wrapper>
        <Tweet
        // date={date}
        // tweetContents={tweetContents}
        // displayName={displayName}
        // username={username}
        // avatarSrc={avatarSrc}
        // numOfLikes={numOfLikes}
        // numOfRetweets={numOfRetweets}
        // isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        // isLikedByCurrentUser={isLikedByCurrentUser}
        // setIsRetweetedByCurrentUser={setIsRetweetedByCurrentUser}
        // setIsLikedByCurrentUser={setIsLikedByCurrentUser}
        />
      </Wrapper>
    </TweetProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
