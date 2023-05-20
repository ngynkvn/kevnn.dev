import { Link, LinkProps } from "react-router-dom";
import { AppRoutes } from "./routes";

const LargeLink = (props: LinkProps) => {
  return (
    <span className="large-txt hover-underline">
      <Link {...props}></Link>
    </span>
  );
};

export function Root() {
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
              <LargeLink to={"/"}>Home</LargeLink>
              <LargeLink to={"/projects"}>Projects</LargeLink>
              <LargeLink to={"/social"}>Social</LargeLink>
            </div>
          </div>
          <div className="right-container">
            <AppRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
