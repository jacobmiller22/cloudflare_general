import { useState, useEffect } from "react";
import axios from "axios";

import { List, Modal } from "components/atoms";
import { Post, PostForm } from "./components";
import Button from "react-bootstrap/Button";

const posts = [
  { title: "My First Post", username: "coolguy123", content: "Hey Y'all!" },
  {
    title: "Story About my Dogs",
    username: "kn0thing",
    content: "So the other day I was in the yard, and...",
  },
  { title: "My First Post", username: "coolguy123", content: "Hey Y'all!" },
  {
    title: "Story About my Dogs",
    username: "kn0thing",
    content: "So the other day I was in the yard, and...",
  },
  { title: "My First Post", username: "coolguy123", content: "Hey Y'all!" },
  {
    title: "Story About my Dogs",
    username: "kn0thing",
    content: "So the other day I was in the yard, and...",
  },
  { title: "My First Post", username: "coolguy123", content: "Hey Y'all!" },
  {
    title: "Story About my Dogs",
    username: "kn0thing",
    content: "So the other day I was in the yard, and...",
  },
];

const PostsView = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.jacobmillerdev.workers.dev", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      console.log(res);
      //@ts-expect-error
      setPosts(res.data);
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Modal
        open={open}
        setOpen={setOpen}
        content={() => <PostForm />}
        title="New Post"
      />
      <div>
        <Button onClick={() => setOpen(true)}>New Post</Button>
      </div>
      <div style={{ width: "60%" }}>
        <List items={posts} Component={Post} />
      </div>
    </div>
  );
};

export default PostsView;
