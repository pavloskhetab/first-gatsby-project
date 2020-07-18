import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout style={{ color: "purple" }}>
      <Header headerText="Hello my friends!" />
      <Header headerText="Welcome to Pavlos' website." />
      <p>Very exciting!</p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="Random image appeared."
      />
      <h3>{data.site.siteMetadata.subTitle}</h3>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        subTitle
      }
    }
  }
`