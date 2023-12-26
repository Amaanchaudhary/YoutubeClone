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
                    <i class="fa-solid fa-bars fa-lg" id='bar' onClick={menu}></i>
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
                                <img alt='A' onClick={() => rout("/you")} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
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



function menu() {

//     const bar = document.getElementById('bar')
//     bar.style.height = '350px'
//     bar.style.border = '1px solid black'
//     bar.style.position = 'relative';
//     bar.style.top = '100px';
//     bar.style.width = '70px';
//     bar.style.marginLeft = '-20px';
//     bar.style.marginTop = '120px';
//     bar.style.paddingTop = '80px';


//     const div = document.createElement('div')
//     const i = document.createElement('i')
//     var iText = document.crea('i')

//     div.appendChild(DivText)
//     bar.appendChild(div)

}