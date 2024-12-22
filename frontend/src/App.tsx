import React from 'react';
import { ToastContainer } from 'react-toastify';
import { buttonGroups } from './data/buttons';
import { ButtonGroup } from './components/ButtonGroup';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      
      <Header />

      <main className="max-w-md mx-auto">
        {buttonGroups.map((group) => (
          <ButtonGroup key={group.id} group={group} />
        ))}
      </main>
    </Layout>
  );
}

export default App;