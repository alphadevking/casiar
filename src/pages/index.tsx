import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { ArtDisplay } from '../components/Sections/ArtDisplay';

export default function IndexPage() {
  
  return (
    <React.Fragment>

      <Helmet>
        <title>Casiar Web Store</title>
      </Helmet>

      <Layout prenav navbar footer>
        <ArtDisplay/>
      </Layout>

    </React.Fragment>
  )
}
