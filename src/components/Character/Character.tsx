import { FunctionComponent } from "react";
import TopBar from "../atoms/TopBar/TopBar";

const Character: FunctionComponent = () => {
  return (
    <>
      <TopBar title="Widok postaci" />
      <div className="content__wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi
        fuga tenetur quidem voluptatem distinctio voluptas a libero eveniet enim
        debitis excepturi perspiciatis rerum, aliquid obcaecati esse soluta
        consequatur accusamus!
      </div>
    </>
  );
};

export default Character;
