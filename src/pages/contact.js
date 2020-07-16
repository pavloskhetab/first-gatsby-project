import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Give us a shout!</p>
      <a href="mailto:me@example.com">eyeygor@yoyo.com</a>
    </Layout>
  )
}