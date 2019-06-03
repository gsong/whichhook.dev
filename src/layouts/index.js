import React from "react";
import { Link } from "gatsby";

export default ({ children }) => (
  <>
    <main>{children}</main>
    <footer>
      <Link to="/">Start over</Link>
    </footer>
  </>
);
