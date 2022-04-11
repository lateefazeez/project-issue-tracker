import { ReactSlackChat } from "react-slack-chat";

const ChatBot = () => {
  return (
    <ReactSlackChat
      botName="project-issue-tracker" // VisitorID, CorpID, Email, IP address etc.
      apiToken="eG94Yi0yNzgwMTYwMjI0MzI1LTI3OTYwNTA2MDgyNTctdHE5YzBmTDFlVHlXTkt0R0w4bkVqbWZq"
      channels={[
        {
          name: "project",
        },
        {
          name: "helpdesk",
        },
        {
          name: "general",
        },
      ]}
      helpText="Need Help?"
      themeColor="#856090"
      userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
      debugMode={true}
      hooks={[
        {
          /* My Custom Hook */
          id: "getSystemInfo",
          action: () => Promise.resolve("MY SYSTEM INFO!"),
        },
      ]}
    />
  );
};

export default ChatBot;
