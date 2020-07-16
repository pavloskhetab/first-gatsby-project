import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout style={{ color: "purple" }}>
      <Header headerText="Hello my friends! Welcome to Pavlos' website." />
      <p>Very exciting!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}