import React, { useState, useEffect } from "react";

import { db } from "../../firebase";
import FlipMove from "react-flip-move";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <TweetBox />
      </div>

      <div className="feed__posts">
        <FlipMove>
          {posts.reverse().map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avater={post.avater}
              image={post.image}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
