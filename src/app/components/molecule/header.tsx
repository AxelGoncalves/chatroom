export default function Header({ username }: IHeaderProps) {
  return (
    <header className=" h-1/12 w-full flex justify-between p-4 border-b-2 border-blue-200 bg-blue-100 text-blue-600">
      <h1 className="font-bold w-1/6">Chatroom</h1>
      {username ? (
        <span className="flex justify-around">
          <span className="mr-2">{username}</span>
          <button className=" hover:text-red-400" type="button">
            Logout
          </button>
        </span>
      ) : (
        <p className="">Please choose your username</p>
      )}
    </header>
  );
}
