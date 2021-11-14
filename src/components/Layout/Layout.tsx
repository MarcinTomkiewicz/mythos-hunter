import { FunctionComponent } from "react";
import logo from "../../img/Logo@2x-blue.png";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent = () => {
  const user = 1234;
  return (
    <main className="main">
      <header className="header">
        <img src={logo} className="logo" alt="" />
        <div className="user-profile">
          {/* <div className="user-profile__logged"></div> */}
          <div className="user-profile__not-logged"></div>
        </div>
      </header>
      <Navigation />
      <div className="wrapper">
        <div className="left-panel">
          <div className="left-panel__join"></div>
          <div className="left-panel__extras"></div>
        </div>
        <section className="content">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Layout;
