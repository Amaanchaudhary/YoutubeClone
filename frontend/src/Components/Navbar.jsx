// import toast from 'react-hot-toast';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { state, Logout } = useContext(AuthContext)
    const rout = useNavigate()
    return (
        <div id='navbar-screen'>
            <div className='navbar-body'>
                <div className='navbar-left'>
                    <i class="fa-solid fa-bars fa-lg"></i>
                    <div>
                        <img alt='A' src='https://www.gstatic.com/youtube/img/promos/growth/6ab442d6a1002dcfa655526badce27feecfc743e1fbe9cbb98ed6855a504a898_324x72.png' />
                    </div>
                </div>
                <div className='navbar-mid'>
                    <div>
                        <input type='input' placeholder='Search' />
                        <button><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
                    </div>
                    <div className='voice-button'>
                        <i class="fa-solid fa-microphone fa-l"></i>
                    </div>
                </div>
                <div className='navbar-right'>
                    <i class="fa-solid fa-video fa-lg"></i>
                    <i class="fa-regular fa-bell fa-lg"></i>
                    <div className='nav-photo'>
                        {state?.user?.id ?
                        <>
                        <img alt='A' onClick={() => rout("/you")} src='https://yt3.ggpht.com/yti/ADpuP3Ov-Nos4utGNV0zwoW0XDk3Cm3ZxMKlZaC-JAoVjtU=s88-c-k-c0x00ffffff-no-rj'/>
                        <button onClick={Logout}>Logout</button>
                        </>
                        :
                        <button onClick={() => rout("/login")}>Login</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;