import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import axios from "axios";

const url =
  "https://api.airtable.com/v0/appjtybh7buYpf4Pi/Table%201?api_key=keySRHOI6xf7M04NJ";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((r) => setPosts(r.data.records))
      .catch((error) => console.log(error));
  }, [posts]);

  const sendPosts = (e) => {
    e.preventDefault();
    const data = {
      fields: {
        name: "Uendi",
        description: "Test",
        message: input,
        photoUrl:
          "https://media-exp1.licdn.com/dms/image/C4D03AQGKyoHDR7973g/profile-displayphoto-shrink_800_800/0/1615241423262?e=1658966400&v=beta&t=mtGxhAb9pHClpU4CKEoRMbBmbIr_Oy4bNZlaq66F2os",
        timestamp: "",
      },
      typecast: true,
    };

    axios
      .post(url, data)
      .then((r) => console.log(r.data))
      .catch((error) => console.log(error.response.data));

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.fields.name}
          description={post.fields.description}
          message={post.fields.message}
          photoUrl={post.fields.photoUrl}
          timestamp={post.createdTime}
        />
      ))}
    </div>
  );
}

export default Feed;
