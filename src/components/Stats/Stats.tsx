import { FunctionComponent } from "react";
import TopBar from "../atoms/TopBar/TopBar";

const Stats: FunctionComponent = () => {
  return (
    <>
      <TopBar title="Statystyki" />
      <div className="content__wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi
        fuga tenetur quidem voluptatem distinctio voluptas a libero eveniet enim
        debitis excepturi perspiciatis rerum, aliquid obcaecati esse soluta
        consequatur accusamus!
      </div>
    </>
  );
};

export default Stats;
