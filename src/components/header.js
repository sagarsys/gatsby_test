import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default props => (
  <section>
    <div className={headerStyles.navbar}>
      <Link to="/">
        <h5>My Awesome Gatsby Site</h5>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
    <h1>{props.headerText}</h1>
  </section>
)
