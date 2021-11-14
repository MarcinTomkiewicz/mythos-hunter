import { FunctionComponent } from "react";
import TopBar from "../atoms/TopBar/TopBar";

const Home: FunctionComponent = () => {
  return (
    <>
      <TopBar title="Home" />
      <div className="content__wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi
        fuga tenetur quidem voluptatem distinctio voluptas a libero eveniet enim
        debitis excepturi perspiciatis rerum, aliquid obcaecati esse soluta
        consequatur accusamus!
      </div>
    </>
  );
};

export default Home;
