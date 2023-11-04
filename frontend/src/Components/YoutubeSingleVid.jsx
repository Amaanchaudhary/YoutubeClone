import './YoutubeSingleVid.css';
import Navbar from './Navbar';

const YoutubeSingleVid = () => {
    return(
        <>
        <Navbar/>
        <div id='SV-screen'>
            <div className='SV-body'>
                <div className='SV-body-left'>
                    <div className='SV-main-vid'>
                        <iframe src='https://www.youtube.com/embed/vEjTUDjjU6A'></iframe>
                    </div>
                    <p className='SV-title'>Tiger 3 Trailer | Salman Khan, Katrina Kaif, Emraan Hashmi | Maneesh Sharma | YRF Spy Universe</p>
                    <div className='SV-left-lastdiv'>
                        <div className='SV-owner-photo'>
                            <img src='https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s88-c-k-c0x00ffffff-no-rj'/>
                        </div>
                        <div className='SV-owner-name'>
                            <p>YRF <i class="fa-solid fa-check fa-sm"></i></p>
                            <span>56.8M..</span>
                        </div>
                        <button className='SV-subs-button'><i style={{marginRight : "5px"}} class="fa-regular fa-bell fa-xl"></i> Subscribed <i style={{marginLeft : "5px"}}class="fa-solid fa-angle-down fa-lg"></i></button>
                    </div>
                </div>
                <div className='SV-body-right'></div>
            </div>
        </div>
        </>
    )
}

export default YoutubeSingleVid;