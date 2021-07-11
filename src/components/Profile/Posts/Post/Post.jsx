import cn from "./Post.module.css";

function Post(props) {
  return (
    <div className={cn.post}>
      <img
        src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_96/front/home/new/sarah-2.png"
        alt=""
        className={cn.avatar}
      />
      {props.message}
      <span>
        {" "}
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
