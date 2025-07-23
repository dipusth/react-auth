import Prop1 from "../../assets/images/props-1.svg";
import Prop2 from "../../assets/images/props-2.svg";
import Prop3 from "../../assets/images/props-3.svg";
import Prop4 from "../../assets/images/props-4.svg";
import Prop5 from "../../assets/images/props-5.svg";
import Prop6 from "../../assets/images/props-6.svg";
import MentorAdarsha from "../../assets/images/mentor-adarsha.png";
import MentorSujit from "../../assets/images/mentor-sujit.png";
import MentorManoj from "../../assets/images/mentor-manoj.png";
import heroImg from "@/assets/images/hero-img.png";
import videoImg1 from "../../assets/images/videos/video-img-1.png";
import videoImg2 from "../../assets/images/videos/video-img-2.png";
import videoImg3 from "../../assets/images/videos/video-img-3.png";
import videoImg4 from "../../assets/images/videos/video-img-4.png";
import video1 from "../../assets/images/videos/video-1.mp4";
import video2 from "../../assets/images/videos/video-2.mp4";
import video3 from "../../assets/images/videos/video-3.mp4";
import video4 from "../../assets/images/videos/video-4.mp4";

import "./Home.css";

const Home = () => {
  const marqueeCourse = [
    "Zara",
    "Tommy Hilfiger",
    "Lenovo",
    "Gucci",
    "Under Armour",
    "L'Oréals",
    "Dell",
    "Huawei ",
    "Puma",
    "Gucci",
    "Under Armour",
    "Levi’s",
    "Philips",
  ];
  // const videoCard = [
  //   {
  //     img: videoImg1,
  //     video: video1,
  //   },
  //   {
  //     img: videoImg2,
  //     video: video2,
  //   },
  //   {
  //     img: videoImg3,
  //     video: video3,
  //   },
  //   {
  //     img: videoImg4,
  //     video: video4,
  //   },
  //   {
  //     img: videoImg2,
  //     video: video2,
  //   },
  //   {
  //     img: videoImg1,
  //     video: video1,
  //   },
  //   {
  //     img: videoImg4,
  //     video: video4,
  //   },
  //   {
  //     img: videoImg2,
  //     video: video2,
  //   },
  //   {
  //     img: videoImg3,
  //     video: video3,
  //   },
  //   {
  //     img: videoImg4,
  //     video: video4,
  //   },
  // ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section props-wrapper pt-0">
        <div className="container items-center h-full relative">
          <div className="mid-block mx-auto text-center">
            {/* <span className="text-slate-500 italic font-bold">
              Everything You Need
            </span> */}
            <h1 className="text-1 title font-nohemi capitalize flex justify-center">
              Just
              <span className="font-black slider ml-3">
                <span className="slide1 text-gradient">Click Away</span>
                <span className="slide2 text-gradient">Shop Smart</span>
                <span className="slide3 text-gradient">Live Better</span>
              </span>
            </h1>
            <p className="text-[20px]">
              Discover a better way to shop — stylish, simple, and delivered to
              your door
            </p>
            <div className="her-img">
              <img src={heroImg} alt="Hero Image" />
            </div>
          </div>
          <div className="props props-2"></div>
          <div className="props props-3"></div>
          {/* <div className="props props-4"></div> */}
          <div className="props props-5"></div>
        </div>
      </section>
      {/* Marquee Section */}
      <section>
        <div className="list-marquee  text-center item-center container">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="list-none list text-gray-400 font-bold">
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
          <div className="mid-block text-center mx-auto mt-10">
            <h2 className="text-2 title">
              Your Wishlist
              <span className="text-primary font-bold ml-2">
                Delivered Fast
              </span>
            </h2>
            <p>Why Pay More? Shop Online for Less</p>
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
