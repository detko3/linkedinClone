import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";

import "./Post.css";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, imageUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postHeader">
        {/* nemal by som generovat obrazok z props */}
        <Avatar src={imageUrl}>{name[0]}</Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="postBody">
        <p>{message}</p>
      </div>

      <div className="postButtons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={RedoOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={NearMeIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
