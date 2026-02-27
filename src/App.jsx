import { useState } from 'react'
import { Layout } from './Layout';

function App() {

  return (
    <>
        <Layout>
          <h1>Página legal</h1>
          <p>Este conteúdo está dentro do slot 'children'!</p>
        </Layout>
    </>
  )
}

export default App
