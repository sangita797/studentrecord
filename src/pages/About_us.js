import React from "react";
import Darkmode from "../components/Darkmode";
import Navbar from "../components/Navbar";
import "../assets/js/main.js";
import $ from "jquery";
function About_us() {
  return (
    <div>
      <Navbar title="hello" serviceval="Services2" />
      <h1>about page</h1>
      <Darkmode />

      <section className="counter-wr">
        <div className="container">
          <div className="intro">
            <h1>Scroll down to see the animation</h1>
            <h3>
              The animation will be start only when the element is visible on the
              screen<br/>Resize the page to see the difference
            </h3>

          </div>
          <div className="container-fluid text-center counter-main-wr">
            <h1>Some cool facts</h1>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                    <i className="fa fa-user"></i>
                    <h2 data-max="50">+ <br/>Happy Customers</h2>
                </div>
              
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <i className="fa fa-code"></i>
                  <h2 data-max="25000">+ <br/>Lines of code</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <i className="fa fa-lock"></i>
                  <h2 data-max="10">+ <br/> Projects</h2>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <i className="fa fa-briefcase"></i>
                  <h2 data-max="30" id="test">
                    + <br/> Developers
                  </h2>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

// let counts=setInterval(updated);
// let upto=0;
// function updated(){
//     var count= document.getElementsByClassName("counter");
//     count.innerHTML=++upto;
//     if(upto===1000)
//     {
//         clearInterval(counts);
//     }
// }
function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

export default About_us;
