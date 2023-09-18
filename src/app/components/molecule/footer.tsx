import ChatInput from "@/app/components/atom/chatInput";

interface IFooterProps {
  newMessageHandler: (message: string) => void;
}

const Footer = ({ newMessageHandler }: IFooterProps) => {
  return (
    <footer>
      <ChatInput onNewMessage={newMessageHandler} />
    </footer>
  );
};

export default Footer;
