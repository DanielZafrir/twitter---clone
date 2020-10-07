import React from "react";

import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1293627322554351616"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/DZafrir"}
          options={{ text: "#reactjs is awsome" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
