import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Swiperslider from '../components/Swiperslider'
import { Link } from "react-router-dom";
import '../assets/js/main.js';
import Button from '@mui/material/Button';
function Service_page() {
  return (  
    <div>
      <Navbar serviceval="Services3"/>
      <h1 className='service-heading'>service page</h1>
      <Slider/>
      <Swiperslider/>
      <div className="tab-wr">
        <div className="container">
          <div className="tabs-inner-wr">
              <div className="tabs">
                <ul id="tabs-nav">
                  <li><a href="#tab1">Bob</a ></li>
                  <li><a href="#tab2">Dante</a ></li>
                  <li><a href="#tab3">Randall</a ></li>
                  <li><a href="#tab4">Jay</a ></li>
                </ul> 
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <h2>Silent Bob</h2>
                    <p>"You know, there's a million fine looking women in the world, dude. But they don't all bring you lasagna at work. Most of 'em just cheat on you."</p>
                  </div>
                  <div id="tab2" className="tab-content">
                    <h2>Dante Hicks</h2>
                    <p>"My friend here's trying href convince me that any independent contractors who were working on the uncompleted Death Star were innocent victims when it was destroyed by the Rebels."</p>
                  </div>
                  <div id="tab3" className="tab-content">
                    <h2>Randall Graves</h2>
                    <p>"In light of this lurid tale, I don't even see how you can romanticize your relationship with Caitlin. She broke your heart and inadvertently drove men href deviant lifestyles."</p>
                  </div>
                  <div id="tab4" className="tab-content">
                    <h2>Jay</h2>
                    <p>"I don't care if she's my cousin or not, I'm gonna knock those boots again tonight."</p>
                  </div>
                </div> 
              </div> 
          
          </div>
        </div>
      </div>
      <div className='material-ui-testing'>
        <div className='container'>
          <h1>material ui examples</h1>
          <Button variant="contained">Hello World</Button>
        </div>
      </div>
    </div>
  )
}

export default Service_page
