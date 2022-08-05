import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {

  const title = 'Welcome to my Gatsby site!';

  return (
    <Layout pageTitle={title}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage