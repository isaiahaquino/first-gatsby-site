import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {

  const title = 'Welcome to my Gatsby site!';

  return (
    <Layout pageTitle={title}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
      />
    </Layout>
  )
}

export default IndexPage