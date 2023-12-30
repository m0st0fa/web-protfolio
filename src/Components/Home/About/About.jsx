import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const About = () => {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['I am a Full Stack Web Developer'],
            autoStart: true,
            loop: true,
        });
    }, []);

    return (
        <div className="md:grid grid-cols-5 items-center gap-4 p-8 bg-blue-300 rounded-xl" id="about" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="col-span-3">
                <h1 className="text-5xl font-bold mb-4 text-white">Hi, I am <br /> Kawsar Ahamed</h1>
                <div id="typewriter" className="typewriter-text text-green-500 text-4xl font-extrabold"></div>
                <p className="text-white">
                    I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                </p>
                <br />
                <div>
                    <button className='btn btn-warning border-blue-500 hover:bg-yellow-500'>Download Resume</button>
                </div>
            </div>

            <div className="col-span-2">
                <img className="md:rounded-full shadow-lg border-2 border-skyblue-300 hover:ring-4 hover:ring-blue-500" src="https://i.postimg.cc/yYY7c0cq/removal-ai-f50a00ee-a4cb-4309-ab50-ce99d54e252e-my-photo-807-XTN.png" alt="Mostofa Kamal" />
            </div>
        </div>
    );
};

export default About;
