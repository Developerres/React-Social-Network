import React from "react";
import { Field, Form } from "react-final-form";
import Post from "./Post/Post";
import cn from "./Posts.module.css";

function Posts(props) {
  const postRender = props.profilePage.postData.map((text) => (
    <Post message={text.message} likes={text.likesCount} key={text.id} />
  ));

  return (
    <div className={cn.posts}>
      <h3> My posts</h3>

      <div>
        <PostForm {...props} />
      </div>
      <div>{postRender}</div>
    </div>
  );
}

const PostForm = (props) => {
  const required = (value) => (value ? undefined : "Required");

  const addNewPost = function (value) {
    props.addPost(value.messageText);
    value.messageText = "";
  };

  return (
    <Form
      onSubmit={addNewPost}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="messageText" validate={required}>
            {({ input, meta }) => (
              <div>
                <textarea
                  {...input}
                  type="textarea"
                  placeholder="Message text "
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Send
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Posts;
