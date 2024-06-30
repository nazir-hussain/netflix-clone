// import React from 'react'
import Navbar from '../../componant/Navbar/Navbar'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../componant/TitleCards/TitleCards'
import Footer from '../../componant/Footer/Footer'



function Home() {
  return (
    <div className='home'>
      <Navbar/>

      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption_img'/>
          <p>Descovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className="hero_btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark_btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more_cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home