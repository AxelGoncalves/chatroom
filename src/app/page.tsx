"use client";

import Header from "@/app/components/molecule/header";
import ChatRoom from "@/app/components/molecule/chatroom";
import Footer from "@/app/components/molecule/footer";
import React from "react";
import LogForm from "@/app/components/atom/login";

export default function Page() {
  const [username, setUsername] = React.useState<string>("");
  const [messagesList, setMessageList] = React.useState<IMessage[]>([
    {
      key: 0,
      username: "System",
      message: "Welcome, your messages will appear here",
    },
  ]);

  function handleNewMessage(message: string) {
    const newMessage: IMessage = {
      key: messagesList.length + 1,
      username,
      message,
    };
    console.log(newMessage);
    setMessageList([...messagesList, newMessage]);
  }

  return (
    <main className="h-screen ">
      <div className="w-full sticky top-0">
        <Header username={username} />
      </div>
      {username === "" ? (
        <LogForm onUsernameSubmit={setUsername} />
      ) : (
        <div className="flex-col flex-no-wrap p-2 text-blue-600 h-full">
          <div className="flex-grow p-2">
            <ChatRoom MessageList={messagesList} username={username} />
          </div>
          <div className="sticky bottom-0 py-4 bg-sky-50 w-full">
            <Footer newMessageHandler={handleNewMessage} />
          </div>
        </div>
      )}
    </main>
  );
}
