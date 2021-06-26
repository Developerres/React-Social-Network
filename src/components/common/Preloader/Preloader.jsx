import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import cn from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={cn.parent}>
      <img className={cn.preloader} src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
