import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../app/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      imageUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feedInputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, imageUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            imageUrl={imageUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
