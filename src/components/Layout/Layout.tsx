import { FunctionComponent } from "react";
import logo from "../../img/Logo@2x-blue.png";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";

const Layout: FunctionComponent = () => {
  return (
    <main className="main">
      <header className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="" />
        </div>
        <UserProfile />
      </header>
      <Navigation />
      <div className="wrapper">
        <div className="left-panel">
          <div className="left-panel__join">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            ducimus adipisci fugiat sint, possimus, itaque corporis, a
            aspernatur ullam impedit aperiam soluta inventore. Aliquam
            voluptatem, fugiat numquam error quas doloremque!
          </div>
          <div className="left-panel__extras">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut
            natus, tempore, sapiente officiis reprehenderit itaque pariatur
            facilis alias ab repellat vel beatae nam quos aperiam, accusamus
            libero repudiandae omnis?
          </div>
        </div>
        <section className="content">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Layout;
