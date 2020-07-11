import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link> 
      <Header headerText="About Eyegor" />
      <Header headerText="About The Doc" />     
      <p>Such magnificence. Very awesome.</p>
    </div>
  )
}