import React from "react";
import NewChatMessage from "@/app/components/atom/newChatMessage";

interface IChatRoomProps {
  MessageList: IMessage[];
  username: string;
}

const ChatRoom = ({ MessageList, username }: IChatRoomProps) => {
  return (
    <div>
      {MessageList.map((message) => (
        <NewChatMessage
          key={message.key}
          newMessage={message}
          currentUsername={username}
        />
      ))}
    </div>
  );
};

export default ChatRoom;
