import cn from "clsx";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CgScrollV } from "react-icons/cg";
import { useWindowSize } from "../hooks/useResize";
import style from "./homeText.module.scss";

export default function HomeText() {
  const [isHover, setIsHover] = useState(false);
  const { isScreenXl, isScreenMd } = useWindowSize();

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const styleBox = {
    transition: "clip-path 1s",
    clipPath: isHover
      ? "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)"
      : "polygon(50% 0, 100% 0, 100% 100%, 10% 100%)",
  };

  return (
    <div className={style.main}>
      <div
        className={cn(
          "dark:text-colors-light-light",
          style.paralax,
          !isScreenXl
            ? "w-full  dark:bg-[url('/bg-par-black.jpg')] bg-center bg-[url('/bg-par-light.jpg')]"
            : "w-1/3"
        )}
      >
        <Fade cascade damping={0.1}>
          <div className={style.textBlock}>
            <div className={style.title}>
              <p>{"PhisicA"}</p>
            </div>
            <div
              className={cn(
               "text-bg-light  shadow-2xl",
                style.subTitle
              )}
            >
              <p>{"Санкт-Петербург"}</p>
              <p>{"гостиница «Спутник» пр. Тореза, 36"}</p>
              <p>{"23-27 октября, 2023"}</p>
            </div>
          </div>
        </Fade>
      </div>
      {isScreenXl && (
        <div
          className={cn(
            "dark:bg-[url('/bg-par-black.jpg')] bg-[center_right_-35rem] bg-[url('/bg-par-light.jpg')] ",
            "w-[100vw] min-h-[100vh]",
            style.paralax
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styleBox}
        ></div>
      )}
      {!isScreenMd && (
        <CgScrollV
          className={cn("animate-bounce", style.scrollSvg)}
          size={50}
        />
      )}
    </div>
  );
}
