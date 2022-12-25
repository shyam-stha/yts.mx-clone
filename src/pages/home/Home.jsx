import { NavLink } from 'react-router-dom'
import "./home.scss"

const Home = () => {

    return (
        <div className='home'>
            <div className="top">
                <h1 className="heading">Download YTS YIFY movies: HD smallest size</h1>
                <div className="welcome-text">
                    <p> Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in <br />excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
                    <h4 className='important-note'>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</h4>
                </div>
            </div>
            <section className='link-section'>
                <NavLink className="link">Popular Downloads</NavLink>
                <NavLink className="link">More Featured</NavLink>
            </section>
            <section className="suggested-section">
                
            </section>
            <section className="latest">
                {/* latest movie  */}
            </section>
            <section className="upcoming">
                {/* upcomming movie  */}
            </section>
        </div>
    )
}

export default Home