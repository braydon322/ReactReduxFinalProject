import React, { Component } from 'react';
import '../App.css';
import BNT from '../images/profCircle.png'
import Particles from 'react-particles-js';


class AboutSection extends Component {

  render() {

    return (
      <div>
        <div className="aboutBackground">
          <Particles
          params={{
        		particles: {
              number: {
                value: 100,
                },
        			line_linked: {
        				shadow: {
        					enable: true,
        					color: "#3CA9D1",
        					blur: 5
        				}
        			},
              size: {
              value: 10,
              random: true,
              anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
              }
              }
            },
            opacity: {
            value: 0.2,
            random: false,
            anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
            }
            }
        		}
        	}/>
        </div>
          <div className="about">
          <div id="aboutText">
            <div className="left">
              <img id="profPic" src={BNT} alt=""></img>
            </div>
            <div className="right">
            <div>
              <h1>Hello, Im Braydon</h1>
              <small><em><b>Designer & Developer</b></em></small><br></br><br></br>
                <p>Full stack web developer with a passion for good design. With both graphic design and web development experience, I pride myself in my knowledge of Ruby on Rails, JavaScript and Object Oriented Programming, as well as fluency in the Adobe Creative Suite. I bring strong leadership and technical skills that strengthen teams and drive project excellence.</p>
                <p>Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "deFinibusBonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutSection
