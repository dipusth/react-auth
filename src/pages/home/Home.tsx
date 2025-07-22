import React from "react";
import Prop1 from "../../assets/images/props-1.svg";
import Prop2 from "../../assets/images/props-2.svg";
import Prop3 from "../../assets/images/props-3.svg";
import Prop4 from "../../assets/images/props-4.svg";
import Prop5 from "../../assets/images/props-5.svg";
import Prop6 from "../../assets/images/props-6.svg";
import MentorAdarsha from "../../assets/images/mentor-adarsha.png";
import MentorSujit from "../../assets/images/mentor-sujit.png";
import MentorManoj from "../../assets/images/mentor-manoj.png";
import videoImg1 from "../../assets/images/videos/video-img-1.png";
import videoImg2 from "../../assets/images/videos/video-img-2.png";
import videoImg3 from "../../assets/images/videos/video-img-3.png";
import videoImg4 from "../../assets/images/videos/video-img-4.png";
import video1 from "../../assets/images/videos/video-1.mp4";
import video2 from "../../assets/images/videos/video-2.mp4";
import video3 from "../../assets/images/videos/video-3.mp4";
import video4 from "../../assets/images/videos/video-4.mp4";

import "./Home.css";
import Carousel from "../../components/carousel";

const Home = () => {
  const marqueeCourse = [
    "UI/UX",
    "Graphic Design",
    "Web Development",
    "Quality Assurance",
  ];
  const videoCard = [
    {
      img: videoImg1,
      video: video1,
    },
    {
      img: videoImg2,
      video: video2,
    },
    {
      img: videoImg3,
      video: video3,
    },
    {
      img: videoImg4,
      video: video4,
    },
    {
      img: videoImg2,
      video: video2,
    },
    {
      img: videoImg1,
      video: video1,
    },
    {
      img: videoImg4,
      video: video4,
    },
    {
      img: videoImg2,
      video: video2,
    },
    {
      img: videoImg3,
      video: video3,
    },
    {
      img: videoImg4,
      video: video4,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section props-wrapper">
        <div className="container items-center h-full relative">
          <div className="mid-block mx-auto text-center">
            <h1 className="text-1 title font-nohemi capitalize">
              Where your
              <span className="font-black slider ml-3">
                <span className="slide1 text-gradient">Ambition</span>
                <span className="slide2 text-gradient">Courage</span>
                <span className="slide3 text-gradient">Passion</span>
              </span>
              <span className="block">
                meets
                <span className="text-gradient font-black ml-2">
                  opportunity
                </span>
              </span>
            </h1>
            <p className="text-[40px]">
              Learn the skills that define your path. Your passion is your
              power—let’s shape it into a future you'll love.
            </p>
            <div className="hero-team mt-16">
              <h6 className="text-black">
                Guided by mentors who turn
                <span className="text-primary font-medium">"I can't"</span> into
                <span className="text-primary-700 font-medium">
                  "Watch me do this!”
                </span>
              </h6>
              <div className="hero-team-member circle-wrap mt-4">
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorAdarsha} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Adarsha Lamichhane</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorSujit} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Sujit Thapa</h4>
                    <span>Data Science Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorManoj} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Manoj Kumar Das</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorAdarsha} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Adarsha Lamichhane</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorSujit} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Sujit Thapa</h4>
                    <span>Data Science Mentor</span>
                  </div>
                </div>

                <div className="icon-tooltip">
                  <div className="circle circle-md">+8</div>
                </div>
              </div>
            </div>
          </div>
          <div className="props props-1">
            <img src={Prop1} alt="Props" />
          </div>
          <div className="props props-2">
            <img src={Prop2} alt="Props" />
          </div>
          <div className="props props-3">
            <img src={Prop3} alt="Props" />
          </div>
          <div className="props props-4">
            <img src={Prop4} alt="Props" />
          </div>
          <div className="props props-5">
            <img src={Prop5} alt="Props" />
          </div>
          <div className="props props-6">
            <img src={Prop6} alt="Props" />
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <section>
        <div className="list-marquee list-marquee-primary text-center bg-primary-500 item-center">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="list-none list text-white font-bold">
              {marqueeCourse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* Videos Section */}
      <section>
        <div className="container">
          <div className="mid-block text-center mx-auto">
            <h2 className="text-2 title">
              <span className="text-primary font-bold">Skill-tastic</span>{" "}
              Moments! 📸
            </h2>
            <p>
              Boredom’s out! Fun learning is what Skillshikshya is all about!
            </p>
          </div>
        </div>
        <div className="video-cards">
          {/* <Carousel>
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full" key={i}>
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </Carousel> */}
          {/* <div className="owl-carousel owl-theme" id="owl-carousel">
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full">
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
