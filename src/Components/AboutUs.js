import Sections from './Sections'

export  default function About(){
  return(
    <>
      <div className = 'about'>
        <h1>About Us</h1>
        <div className = 'section_container'>
          <Sections text = "Hi, first of all let  me introduce myself, I am Avinash Gupta, I am a student of Narula Institute of Technology, and I am doing my B.tech in Information & Technology. When I started my college in my freshman year, I faced a lot of difficulties in order to find resources to study, so that I can pass the semester exam. But there where no such resources available on the internet. But my friends and from their sources, (from their seniors and elders) I got a lot of study material. Then I thought we have resources but they are just scattered among a students. Then I decided to built this website."/>
          <Sections text = "Now, what does this website do? So, the answer is that it just collects the resources/study material and serves you at one place. Now no-one needs do google the topics they want to study. In future, I will try to bring teachers to this website so that they can also upload their study material here. You are also requested to upload your study material in the Contact Us section. So that the future community can access those. Even one contribution counts."/>
        </div>
      </div>
    </>
  );
}