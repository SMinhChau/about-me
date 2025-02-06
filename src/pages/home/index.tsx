import HomeContent from '@/component/home-content';
import './home.css';
import { ContactData, SkillsData } from './data';
import ContactForm from '@/component/common/form/contact';
import { MyExperiences } from '@/utils/content';
import CardContent from '@/component/card-content';

import Images from '/images/home/bg-info.webp';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const Experiences = () => {
    return (
      <HomeContent id="experiences">
        <h2 className="title">
          Hi
          <span className="sub-title"> There</span>
        </h2>
        <p className="exps-description">
          There are many variations of passages ofLorem Ipsum available, but the I’ve written a few
          thousand words on why traditional “semantic class names” are the reason CSS is hard to
          maintain, but the truth is never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really think you’ll wonder
          how you ever worked with CSS any other way.
        </p>

        <div className="cards">
          {MyExperiences.map((item, index) => {
            return <CardContent key={index} item={item} />;
          })}
        </div>
      </HomeContent>
    );
  };

  const Information = () => {
    return (
      <HomeContent id="info">
        <div className="information">
          <div className="left-information">
            <div className="image-content">
              <img className="image" src={Images} />
            </div>

            <div className="skill-list">
              <div className="marquee-content flex gap-4 items-center ">
                <div className="flex gap-5 items-center">
                  {SkillsData.map((skill, index) => {
                    if (skill?.code == 'styled-components') {
                      return (
                        <a href={skill.href} target="_blank" key={index} className="skill-item">
                          <span className="w-full h-full flex items-center ">💅</span>
                        </a>
                      );
                    }
                    return (
                      <a href={skill.href} target="_blank" key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="right-information">
            <div className="welcome">
              <h1 className="text-content">right right</h1>
            </div>
          </div>
        </div>
      </HomeContent>
    );
  };

  const ContactMe = () => {
    return (
      <HomeContent id="contact">
        <h2 className="title text-center">
          Contact
          <span className="sub-title"> Me</span>
        </h2>
        <p className="first-letter">{ContactData['first_letter']}</p>
        <ContactForm />
      </HomeContent>
    );
  };

  return (
    <div className="container fex flex-col relative">
      <Information />
      <Experiences />
      <ContactMe />
    </div>
  );
};

export default HomePage;
