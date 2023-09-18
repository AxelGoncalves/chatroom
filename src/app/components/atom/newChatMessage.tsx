import React from "react";

interface INewChatMessageProps {
  newMessage: IMessage;
  currentUsername: string;
}

export default function NewChatMessage({
  newMessage,
  currentUsername,
}: INewChatMessageProps) {
  const { username, message } = newMessage;
  return username === currentUsername ? (
    <div className="flex flex-col p-2 w-full h-auto items-end text-right">
      <span>Me:</span>
      <span className="border-2 p-3 max-w-md border-blue-600 bg-sky-200 rounded-md">
        {message}
      </span>
    </div>
  ) : (
    <div className="flex flex-col p-2 w-full h-auto items-start text-right">
      <span>{username}:</span>
      <span className="border-2 p-3 max-w-md border-blue-600 rounded-md bg-sky-200">
        {message}
      </span>
    </div>
  );
}
