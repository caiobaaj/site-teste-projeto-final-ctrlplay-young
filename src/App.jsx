import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
