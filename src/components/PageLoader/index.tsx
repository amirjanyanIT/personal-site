import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { PropsInterface } from "./types/PropsInterface";
import deathIMG from "../../images/death.gif";

export const PageLoader = (props: PropsInterface) => {
  const bodyRef = useRef(document.getElementsByTagName("body")[0]);
  const { onLoad } = props;

  useEffect(() => {
    if (onLoad) {
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.style.overflow = "auto";
    }
  }, [onLoad]);

  return createPortal(
    <div className={`page-loader ${onLoad ? "active" : ""} `}>
      <img src={deathIMG} alt="" />
      <p>LOADING SOMETHING SCARY...</p>
    </div>,
    bodyRef.current
  );
};
