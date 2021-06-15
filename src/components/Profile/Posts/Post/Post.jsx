import cn from "./Post.module.css";

function Post(props) {
  return (
    <div>
      {props.message}
      <span>
        <img
          src="https://image.flaticon.com/icons/png/128/633/633759.png"
          width="12px"
          alt=""
        />
        {props.likes}
      </span>
    </div>
  );
}

export default Post;
