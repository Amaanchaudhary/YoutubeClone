import './YoutubeSingleVid.css';
import Navbar from './Navbar';
import { useState } from 'react';

const YoutubeSingleVid = () => {

    const [data, setData] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/MZXvl8N7KXs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKb5bcmery3bCCmOwZrBGMS2mu7yqsqjDO8Kpme90g=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Techno Ruhez ',
        views: '54K Views . 2 days ago',
        title: 'Infinix GT 10 Pro Full Review After 2 Months - Big Surprises !'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/CLKrLdPQBGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Apna College',
        views: '243K Views . 18 hours ago',
        title: 'Bringing Complete Web Development Course | in 4.5 M..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/pS0AXGL8xJ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/0J2EnnqRfBLqrMl-T7hyOzte7c3fX42SgtXvad9v3g_jWLd9JgtKuX1J3ZLNFbjWBXJbThL6=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Hina Qaisar',
        views: '195 Views . 22 hours ago',
        title: 'Web Development kia hota hai | How can I become Web Deve..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/-jFYdg31Jd0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Dhruv Rathee',
        views: '8.5M Views . 5 months ago',
        title: 'Why Hitler Lost? | World War 2 | Dhruv Rathee '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MwmxZ85RLJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj-mo',
        owner: 'Anshika Gupta',
        views: '103K Views . 1 month ago ',
        title: 'Get Job with zero coding (OR minimum coding)|Cloud...'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara...'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/23vKCXZ6yg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Technical Guruji',
        views: '115k Views . 9 hours ago ',
        title: 'Redmi Note 13 pro+ Unboxing & First Look - 120W - 200MP - IP68'
    }
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/stjZKBhQ3lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'T-Series',
    //     views: '92M Views . 2 months ago ',
    //     title: 'JAWAN: Zinda Banda (Hindi) | Shah Rukh Khan | atlee | Anirudh | Narayan..'
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'Coke Studio Pakistan',
    //     views: '473M Views . 8 years ago ',
    //     title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     owner: 'Zee Music Compamny',
    //     views: '3.3M Views . 6 days ago ',
    //     title: 'Sara Zamana - Ganapath | Tiger Shroff,Elli AvrRam| Benny Dayal, Prakri..'
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/jzYxbnHHhY4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'T-Series',
    //     views: '171M Views . 1 year ago ',
    //     title: 'Bhool Bhulaiyaa (Full movie) Akshay Kumar Vidya balan,Shiney A, Prak..'
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
    //     image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'T-Series',
    //     views: '169M Views . 2 months ago ',
    //     title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    // }
    ])

    return (
        <>
            <Navbar />
            <div id='SV-screen'>
                <div className='SV-body'>
                    <div className='SV-body-left'>
                        <div className='SV-main-vid'>
                            <iframe src='https://www.youtube.com/embed/vEjTUDjjU6A'></iframe>
                        </div>
                        <p className='SV-title'>Tiger 3 Trailer | Salman Khan, Katrina Kaif, Emraan Hashmi | Maneesh Sharma | YRF Spy Universe</p>
                        <div className='SV-left-lastdiv'>
                            <div className='SV-owner-photo'>
                                <img src='https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s88-c-k-c0x00ffffff-no-rj' />
                            </div>
                            <div className='SV-owner-name'>
                                <p>YRF <i class="fa-solid fa-check fa-sm"></i></p>
                                <span>56.8M..</span>
                            </div>
                            <button className='SV-subs-button'><i style={{ marginRight: "5px" }} class="fa-regular fa-bell fa-xl"></i> Subscribed <i style={{ marginLeft: "5px" }} class="fa-solid fa-angle-down fa-lg"></i></button>
                            <button className='SV-like-button'><i style={{ marginRight: "5px" }} class="fa-regular fa-thumbs-up fa-xl"></i> 2.1M | <i style={{ marginLeft: "10px" }} class="fa-regular fa-thumbs-down fa-xl"></i></button>
                            <button className='SV-share-button'><i class="fa-solid fa-share"></i> Share</button>
                            <button className='SV-dot-button'>&bull;&bull;&bull;</button>
                        </div> 
                    </div>
                    <div className='SV-body-right'>
                        <div className='SV-right-top-div'>
                            <button style={{ backgroundColor: 'black', color: 'white' }}>All</button>
                            <button>From your search</button>
                            <button>From YRF</button>
                            <button>Salman k.</button>
                        </div>
                        <div className='SV-more-suggestions'>
                            {data.map((vids) => (
                                <div className='SV-suggestion-div'>
                                    <div className='Sugg-left'>
                                        <img src={vids.thumbnail}/>
                                    </div>
                                    <div className='Sugg-right'>
                                        <p className='SV-vid-title'>{vids.title}</p>
                                        <p className='SV_vid-owner'>{vids.owner} <i class="fa-solid fa-check fa-sm"></i></p>
                                        <p className='SV-vid-views'>{vids.views}</p>
                                        <p className='SV-new'>New</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoutubeSingleVid;