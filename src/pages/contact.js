import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <p>Give us a shout!</p>
      <a href="mailto:pavlos@yoyo.com">pavlos@yoyo.com</a>
    </Layout>
  )
}