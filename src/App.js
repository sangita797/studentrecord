
import './assets/css/App.css';
import './assets/css/Responsive.css';
import Alert from './components/Alert';
import './assets/js/main.js';
import Navbar from './components/Navbar';
// import ReactDOM from 'react-dom';
import Studentform from './components/Studentform';
import Darkmode from './components/Darkmode'



function App() {
  return (
    <>
    <div className='main-body'>
      <Navbar title="hello" serviceval="Services1" />
      <Alert Alert='this is a alert box' />
      <Studentform  heading="Enter Your Text Heres" />
      <Darkmode/>
      </div>
    </>
  );
}

export default App;
