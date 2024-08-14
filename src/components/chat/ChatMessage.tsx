import "./ChatMessage.scss";
import React from "react";
import { Avatar } from '@mui/material';

const ChatMessage = () => {
  return <div className="message">
    <Avatar />
    <div className="messageInfo">
      <h4>
        ハムスター
        <span className="messageTimeStamp">2024/8/14</span>
      </h4>

      <p>メッセージ本文</p>
    </div>
  </div>;
};

export default ChatMessage;
