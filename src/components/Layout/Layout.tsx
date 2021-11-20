import { FunctionComponent } from "react";
import logo from "../../img/Logo@2x-blue.png";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import LeftPanel from "../LeftPanel/LeftPanel";

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
        <LeftPanel />
        <section className="content">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Layout;
