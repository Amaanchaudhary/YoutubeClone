import './YoutubeHistory.css'
import Navbar from './Navbar'
import { useState } from 'react'


const YoutubeHistory = () => {
    const [data, setData] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/MZXvl8N7KXs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKb5bcmery3bCCmOwZrBGMS2mu7yqsqjDO8Kpme90g=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Techno Ruhez ',
        views: '54K Views',
        title: 'Infinix GT 10 Pro Full Review After 2 Months - Big Surprises !'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/CLKrLdPQBGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Apna College',
        views: '243K Views',
        title: 'Bringing Complete Web Development Course | in 4.5 Months | Delta 3.0 with..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/pS0AXGL8xJ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/0J2EnnqRfBLqrMl-T7hyOzte7c3fX42SgtXvad9v3g_jWLd9JgtKuX1J3ZLNFbjWBXJbThL6=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Hina Qaisar',
        views: '195 Views',
        title: 'Web Development kia hota hai | How can I become Web Developer | part 0'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/-jFYdg31Jd0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Dhruv Rathee',
        views: '8.5M Views',
        title: 'Why Hitler Lost? | World War 2 | Dhruv Rathee '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MwmxZ85RLJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj-mo',
        owner: 'Anshika Gupta',
        views: '103K Views',
        title: 'Get Job with zero coding (OR minimum coding)|Cloud job roles for Fresher in...'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/23vKCXZ6yg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Technical Guruji',
        views: '115k Views',
        title: 'Redmi Note 13 pro+ Unboxing & First Look - 120W - 200MP - IP68'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/stjZKBhQ3lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '92M Views',
        title: 'JAWAN: Zinda Banda (Hindi) | Shah Rukh Khan | atlee | Anirudh | Narayan..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coke Studio Pakistan',
        views: '473M Views',
        title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        owner: 'Zee Music Compamny',
        views: '3.3M Views',
        title: 'Sara Zamana - Ganapath | Tiger Shroff,Elli AvrRam| Benny Dayal, Prakri..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/jzYxbnHHhY4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '171M Views',
        title: 'Bhool Bhulaiyaa (Full movie) Akshay Kumar Vidya balan,Shiney A, Prak..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    }
    ])
    return (
        <>
        <Navbar/>
        <div id='HistoryScreen'>
            <div className='HistoryBody'>
                <div className='HistoryLeft'>
                <i style={{ marginTop: '25px' }} class="fa-solid fa-house fa-lg"></i><br />
                    <span>Home</span><br />
                    <i class="fa-solid fa-photo-film fa-lg"></i><br />
                    <span>Shorts</span><br />
                    <i class="fa-solid fa-folder-minus fa-lg"></i><br />
                    <span>Subscriptions</span><br />
                    <i class="fa-brands fa-youtube fa-lg"></i><br />
                    <span>You</span>
                </div>
                <div className='HistoryRight'>
                    <div className='HistoryRightBody'>
                        <div className='RightBody-left'>
                        <h1 className='History-h1'>Watch history</h1>
                            <h2>Today</h2>
                            <div className='history-vids'>
                                {data.map((pro) => (
                                    <div className='div-main'>
                                        <div className='history-thumbnail'>
                                            <img src={pro.thumbnail}/>
                                        </div>
                                        <div className='history-details'>
                                            <p className='history-title'>{pro.title}</p>
                                            <span className='history-owner'>{pro.owner}<i className='history-check' class="fa-solid fa-check"></i></span>
                                            <span className='history-views'>{pro.views}</span>
                                            <p className=''>

                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='RightBody-right'>
                            <div className='search-history'>
                            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                            <input type='text' placeholder='Search watch history'/>
                            </div>
                            <div className='clear-history'>
                            <i class="fa-solid fa-trash-can fa-lg"></i>
                            <p>clear all watch history</p>
                            </div>
                            <div className='clear-history'>
                            <i style={{marginLeft : '2px', marginRight : '14px'}} class="fa-solid fa-pause fa-lg"></i>
                            <p>Pause watch history</p>
                            </div>
                            <div className='clear-history'>
                            <i class="fa-solid fa-gear fa-lg"></i>
                            <p>Manage all history</p>
                            </div>
                            <div className='right-last-div'>
                                <p>Comments</p>
                                <p>Community posts</p>
                                <p>Live chat</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default YoutubeHistory