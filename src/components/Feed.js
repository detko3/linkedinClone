import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (event) => {
    event.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feedInputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>

        <div className="feedInputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOption title="Video" Icon={YouTubeIcon} color="#e7a33e" />
          <InputOption
            title="Event"
            Icon={EventAvailableIcon}
            color="#7fc15e"
          />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#ed7b87"
          />
        </div>
      </div>

      {/* Post */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="My name"
        description="This is description"
        message="this is message"
      />
    </div>
  );
};

export default Feed;
