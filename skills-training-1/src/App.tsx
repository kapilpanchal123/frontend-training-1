import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {

  return (
    <>
      <Header />
      <MainContent pageTitle={'Weight Loss Competition'} countTopics={5} />
      <Footer />
    </>
  )
}

export default App;
