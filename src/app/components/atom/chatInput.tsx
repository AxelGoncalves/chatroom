import React from "react";

interface IChatInputProps {
  onNewMessage: (message: string) => void;
}

const ChatInput = ({ onNewMessage }: IChatInputProps) => {
  function handleNewMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newMessage = event.currentTarget.message.value;
    (event.target as HTMLFormElement).reset();
    onNewMessage(newMessage);
  }
  return (
    <form
      className="flex justify-around h-full w-full"
      onSubmit={handleNewMessage}
    >
      <input
        className="w-9/12 border-800-400 border-2 bg-gray-50 rounded-md p-2"
        name="message"
        placeholder="Type a message"
        type="text"
        autoComplete="off"
        required
      />
      <button
        className="max-w-3/12 p-2 border-2 bg-gray-50 rounded-md hover:text-blue-600"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
