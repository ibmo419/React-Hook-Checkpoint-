import React from 'react';
import './App.css';
import ModalInput from './Components/ChildComponents/ModalInput';
import {Link} from 'react-scroll';
function App () {
    return (                
      <>
      <div className='navbar'>
      <Link
                activeClass='active'
                to='MovieCard'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='link'
                >MovieCard</Link>
                <Link
                activeClass='active'
                to='AddMovie'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='link'
                >AddMovie</Link>
      </div>
      <div className="App">
      <ModalInput/>
      </div>
      </>
    );
  }

export default App;
