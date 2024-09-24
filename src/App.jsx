import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import Info from './components/Infos'
import Prensent from './components/Prensent'

const App = () => {
  return <>
    <div className='header'>
      <Header />
    </div>
    <Prensent />
    <Info />
    <Footer />
  </>
}

export default App
