import './App.css';
import { Route, Routes } from 'react-router-dom';
import YoutubeHome from './Components/YoutubeHome';
import Navbar from './Components/Navbar';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
            
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
        <Route path='/' element={<YoutubeHome />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
