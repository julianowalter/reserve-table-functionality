import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='header-container'>
        <Header></Header>
        <Nav></Nav>
      </div>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
