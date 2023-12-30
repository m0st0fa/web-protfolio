
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <About></About>
            <div className="">
                <h1 className="text-center text-4xl font-bold my-5 ">My Skills</h1>
                <Skill></Skill>
            </div>
            <Projects></Projects>
            <div className="my-5">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;
