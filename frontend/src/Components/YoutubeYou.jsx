import { useContext, useState } from 'react'
import Navbar from './Navbar'
import './YoutubeYou.css'
import { AuthContext } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'

const YoutubeYou = () => {

    const rout = useNavigate();

    const [data, setData] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/MZXvl8N7KXs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKb5bcmery3bCCmOwZrBGMS2mu7yqsqjDO8Kpme90g=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Techno Ruhez ',
        views: '54K Views . 1 year ago',
        title: 'Infinix GT 10 Pro Full Review After 2 Months - Big Surprises !'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/CLKrLdPQBGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Apna College',
        views: '243K Views . 3 months ago',
        title: 'Bringing Complete Web Development Course | in 4.5 Months | Delta 3.0 with..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/pS0AXGL8xJ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/0J2EnnqRfBLqrMl-T7hyOzte7c3fX42SgtXvad9v3g_jWLd9JgtKuX1J3ZLNFbjWBXJbThL6=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Hina Qaisar',
        views: '195 Views . 2 days ago',
        title: 'Web Development kia hota hai | How can I become Web Developer | part 0'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/-jFYdg31Jd0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Dhruv Rathee',
        views: '8.5M Views . 2 years ago',
        title: 'Why Hitler Lost? | World War 2 | Dhruv Rathee '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MwmxZ85RLJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj-mo',
        owner: 'Anshika Gupta',
        views: '103K Views . 10 months ago',
        title: 'Get Job with zero coding (OR minimum coding)|Cloud job roles for Fresher in...'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 4 days ago',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/23vKCXZ6yg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Technical Guruji',
        views: '115k Views . 1 week ago',
        title: 'Redmi Note 13 pro+ Unboxing & First Look - 120W - 200MP - IP68'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/stjZKBhQ3lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '92M Views . 5 months ago',
        title: 'JAWAN: Zinda Banda (Hindi) | Shah Rukh Khan | atlee | Anirudh | Narayan..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coke Studio Pakistan',
        views: '473M Views . 1 year ago',
        title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        owner: 'Zee Music Compamny',
        views: '3.3M Views 2 years ago',
        title: 'Sara Zamana - Ganapath | Tiger Shroff,Elli AvrRam| Benny Dayal, Prakri..'
    }])

    const { state } = useContext(AuthContext);

    return (
        <>
            <div id='you-screen'>
                <Navbar />
                <div className='you-body'>
                    <div className='you-left'>
                    <i onClick={()=> rout("/")} style={{ marginTop: '25px' }} class="fa-solid fa-house fa-lg"></i><br />
                        <span>Home</span><br />
                        <i class="fa-solid fa-photo-film fa-lg"></i><br />
                        <span>Shorts</span><br />
                        <i class="fa-solid fa-folder-minus fa-lg"></i><br />
                        <span>Subscriptions</span><br />
                        <i onClick={() => rout("/you")} class="fa-solid fa-user fa-lg"></i><br />
                        <span>You</span><br/>
                        <i onClick={() => rout("/history")} class="fa-solid fa-clock-rotate-left fa-lg"></i><br />
                        <span>history</span>
                    </div>
                    <div className='you-right'>
                        <div className='you-right-1'>
                            <div className='you-image'>
                                <img alt='A' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                            </div>
                            <div className='you-details'>
                                <h1>{state?.user?.name}</h1>
                                <p>{state?.user?.name} &bull; View channel</p>
                                <button><i class="fa-solid fa-user"></i> Switch account</button>
                                <button><i class="fa-brands fa-google"></i> Google Account</button>
                            </div>
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-clock-rotate-left"></i> History</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div className='you-hist-thumbnail'>
                                        <img alt='A' src={pro.thumbnail} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-list"></i> Playlists</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div className='you-hist-thumbnail'>
                                        <img alt='A' src={pro.thumbnail} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoutubeYou