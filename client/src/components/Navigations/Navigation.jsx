import "./Navigation.scss";
import TopNavigation from "./TopNavigation";
import Button from "../Buttons/PrimaryButton";

const Navigation = (props) => {
  const { isOpen } = props; //user in the future

  return (
    <nav id="nav" className={isOpen ? "sidebar" : "closed"}>
      <p className="navuser"> {user.firstName + "  " + user.lastName}</p>
      <div classname="navitems">
        <p className="item-hov">My Account</p>
        <p className="item-hov">My Issues</p>
        <p className="item-hov">Chat</p>
        <p className="item-hov">Board</p>
        <p className="itemLast-hov">Archive</p>
      </div>
      <div className="login">
        <Button children={"Logout"} />
      </div>
    </nav>
  );
};

const user = {
  firstName: "Fred",
  lastName: "Flinstone",
};

export default Navigation;
