import './YoutubeHistory.css'
import Navbar from './Navbar'

const YoutubeHistory = () => {
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
                    <h1 className='History-h1'>Watch history</h1>
                    <div className='HistoryRightBody'>
                        <div className='RightBody-left'>
                            <h2>Today</h2>
                        </div>
                        <div className='RightBody-right'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default YoutubeHistory