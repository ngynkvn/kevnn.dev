import { RefAttributes, useState } from "react";
import "./root.css";
import { Link, LinkProps } from "react-router-dom";
import { AppRoutes } from "./routes";

const LargeLink = (props: LinkProps) => {
  return (
    <span className="large-txt hover-underline">
      <Link {...props}></Link>
    </span>
  );
};

function Root() {
  return (
    <>
      <div id="main">
        <div id="l">
          <ul>
            <li>
              <LargeLink to={"/"}>Home</LargeLink>
            </li>
            <li>
              <LargeLink to={"/projects"}>Projects</LargeLink>
            </li>
            <li>
              <LargeLink to={"/social"}>Social</LargeLink>
            </li>
          </ul>
        </div>
        <div id="r">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default Root;
