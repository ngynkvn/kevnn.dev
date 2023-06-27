import { Outlet } from "react-router";
import { LinkProps, Link } from "react-router-dom";
import { Button, ButtonProps } from "../components/Button";
import "./sidenav.css";

const LargeLink = ({
  to,
  children,
  ...props
}: Pick<LinkProps, "to"> & ButtonProps) => {
  return (
    <Link to={to}>
      <Button primary size="small" {...props}>
        {children}
      </Button>
    </Link>
  );
};

export const Nav = () => {
  return (
    <>
      <div id="main-outer-container">
        <div id="main-container">
          <div>
            <header className="header-container">
              <div className="text-logo text-light outset">
                <Link to="">kevnn.dev</Link>
              </div>
              <div className="link-tree-container">
                <LargeLink to={""}>Home</LargeLink>
                <LargeLink to={"projects"}>Projects</LargeLink>
                <LargeLink to={"social"}>Social</LargeLink>
                <LargeLink to={"duck"}>Duck🦆</LargeLink>
              </div>
            </header>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
