import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.css"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout style={{ color: `black` }}>
      <Link to="/">Home</Link>
      <Container>
        <Header headerText="About Pavlos" />
        <Header headerText="About The Man" />
        <p>Such magnificence. Very awesome.</p>

        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
    </Layout>
  )
}