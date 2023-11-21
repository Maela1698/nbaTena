import logo from './logo.svg';
import './App.css';
import Blogs from './pages/Blogs';

function App() {
  const css = {
    color: "red"
  }
    
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1 style = {css}>Hello</h1>
      <Blogs value = {"haha"}/>
    </div>
  );
}

export default App;
