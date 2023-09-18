interface IMessage {
  key?: number;
  message: string;
  username: string;
}

interface IChatInputProps {
  newMessageHandler: React.FormEventHandler<HTMLButtonElement>;
}

interface IHeaderProps {
  username: string | null;
}

interface IFooterProps {
  newMessageHandler: React.FormEventHandler<HTMLButtonElement>;
}

interface ILogFormProps {
  onUsernameSubmit: (username: string) => void;
}
