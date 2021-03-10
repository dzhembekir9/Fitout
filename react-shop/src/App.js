import GlobalStyle from './utilities/Global/GlobalStyles'
import Navbar from './containers/Navbar/Navbar'
import MainContent from './containers/MainContent/MainContent'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
