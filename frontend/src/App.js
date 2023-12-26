import './App.css';
import { Route, Routes } from 'react-router-dom';
import YoutubeHome from './Components/YoutubeHome';
import Navbar from './Components/Navbar';
import {Toaster} from 'react-hot-toast'
import YoutubeLogin from './Components/YoutubeLogin';
import YoutubeRegister from './Components/YoutubeRegister'
import YoutubeSingleVid from './Components/YoutubeSingleVid';
import YoutubeHistory from './Components/YoutubeHistory'
import YoutubeYou from './Components/YoutubeYou';
import PageNotFound from './Components/PageNotFound';

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
      {/* <Navbar/> */}
      <Routes>
        <Route exact path='*' element={<PageNotFound/>} />
        <Route path='/' element={<YoutubeHome />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/login' element={<YoutubeLogin/>} />
        <Route path='/register' element={<YoutubeRegister/>}/>
        <Route path="/singlevid/:id" element={<YoutubeSingleVid/>} />
        <Route path='/history' element={<YoutubeHistory/>} />
        <Route path='/you' element={<YoutubeYou/>} />
      </Routes>
    </div>
  );
}

export default App;
