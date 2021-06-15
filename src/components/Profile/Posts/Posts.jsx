import Post from "./Post/Post";
import cn from "./Posts.module.css";

function Posts() {
  const postData = [
    { id: 1, message: "Hi. How are you?", likesCount: 15 },
    { id: 2, message: "Hey. I'm fine. And you?", likesCount: 20 },
  ];

  const postRender = postData.map((text) => (
    <Post message={text.message} likes={text.likesCount} />
  ));
  return (
    <div>
      My posts
      <textarea name="newPost" id="" cols="30" rows="10"></textarea>
      <button>Send</button>
      <div>{postRender}</div>
    </div>
  );
}

export default Posts;
