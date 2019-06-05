import React from "react";
import { Link } from "gatsby";

export default ({ children }) => (
  <>
    <main>{children}</main>
    <footer>
      <Link to="/">Start over</Link>
      <br />
      <a href="https://github.com/gsong/whichhook.dev">
        Help make this site better
      </a>
    </footer>
  </>
);
