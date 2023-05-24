import { Outlet } from "react-router";
import { LinkProps, Link } from "react-router-dom";

const LargeLink = (props: LinkProps) => {
  return (
    <span className="large-txt hover-underline">
      <Link {...props}></Link>
    </span>
  );
};

export const Sidenav = () => {
  return (
    <>
      <div id="main-outer-container">
        <div id="main-container">
          <div className="left-container">
            <header className="header-container">
              <div className="text-logo text-light outset">
                <a href="#">kevnn.dev</a>
              </div>
            </header>
            <div className="link-tree-container">
              <LargeLink to={""}>Home</LargeLink>
              <LargeLink to={"projects"}>Projects</LargeLink>
              <LargeLink to={"social"}>Social</LargeLink>
              <LargeLink to={"duck"}>Duck🦆</LargeLink>
            </div>
          </div>
          <div className="right-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
