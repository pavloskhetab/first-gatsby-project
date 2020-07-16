import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
//import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 600, color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Header headerText="Hello my friends! Welcome to Eyegor's website." />
      <p>Very exciting!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
