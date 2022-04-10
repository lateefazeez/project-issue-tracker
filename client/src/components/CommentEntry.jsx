import { Fragment, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";

const CommentEntry = (props) => {
  const {
    commentCreate,
    LoneTicket,
    loggedInUser,
    userIdFromSession,
    userNameFromSession,
  } = props;
  const [comment, setComment] = useState({
    tickets_id: "",
    users_id: "",
    message: "",
  });
  const [inputVal, setInputval] = useState("");

  if (!LoneTicket[0]) {
    return null;
  }

  let ticketId = LoneTicket[0].id;

  const handleChange = (e) => {
    setComment({
      ...comment,
      tickets_id: ticketId,
      users_id: userIdFromSession,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.message) {
      const webhookUrl = process.env.REACT_APP_SLACK_WEBHOOK;

      const data = {
        text: `${userNameFromSession}: ${comment.message}`,
      };

      return axios
        .post(webhookUrl, JSON.stringify(data), {
          withCredentials: false,
          transformRequest: [
            (data, headers) => {
              delete headers.post["Content-Type"];
              return data;
            },
          ],
        })
        .then((response) => {
          commentCreate(comment);
          setComment({ message: "" });
          if (response.status === 200) {
            return;
          } else {
            alert("Error Sending your comment, Please try again later");
          }
        });
    }
    return;
  };

  return (
    <Fragment>
      <div className="commentZone">
        <input
          name="message"
          id="commentInput"
          placeholder="Comment Away..."
          onChange={handleChange}
          value={comment.message}
        ></input>
        <PrimaryButton
          onPress={handleSubmit}
          style={{
            backgroundColor: "#4D45B5",
            height: "inherit",
            borderRadius: "30px",
            width: "12rem",
          }}
          id="buthead"
          children="+ Comment"
        />
      </div>
    </Fragment>
  );
};

export default CommentEntry;
