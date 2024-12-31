import About from './components/about'
import Home from './components/home'

import './App.css'
function App() {
  const pathname = window.location.pathname;

  if (pathname === '/about.js') {
    return <About />;
  } else {
    return <Home />;
  }
  
}
export default App;