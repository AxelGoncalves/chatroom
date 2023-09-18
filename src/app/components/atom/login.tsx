import React from "react";

interface ILogFormProps {
  onUsernameSubmit: (username: string) => void;
}

const LogForm = ({ onUsernameSubmit }: ILogFormProps) => {
  const [username, setUsername] = React.useState<string>("");

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <div className="h-5/6 flex justify-center items-center">
      <div className=" bg-blue-100  border-blue-200 flex-col border-4 font-bold rounded-lg p-6 w-2/6 h-1/4 content-between self-center text-center space-y-4">
        <h1 className="w-auto h-1/2 align-middle text-blue-600">
          Choose your username
        </h1>
        <form onSubmit={handelSubmit} className="flex justify-around">
          <input
            className="border-2 border-blue-200 text-blue-600 rounded-lg pl-2 text-center"
            type="text"
            placeholder="Username"
            aria-label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={20}
          />

          <button
            className="border-2 border-blue-400 bg-blue-200 text-blue-400 rounded-lg p-2 hover:text-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogForm;
