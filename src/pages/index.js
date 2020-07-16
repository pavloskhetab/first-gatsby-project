import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout style={{ color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Header headerText="Hello my friends! Welcome to Pavlos' website." />
      <p>Very exciting!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
