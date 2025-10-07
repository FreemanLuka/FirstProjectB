import cssIcon from "./assets/css.png"
import htmlIcon from "./assets/html.png"
import javaScriptIcon from "./assets/javascript.svg"
import reactIcon from "./assets/react.svg"
import angielskiIcon from "./assets/angielski.svg"
import hiszpanskiIcon from "./assets/hiszpanski.svg"
import cIcon from "./assets/c.svg"
import ccIcon from "./assets/cc.svg"

const Hero = () => {
  return (
    <section id="about" className="hero">
        <h2 className="hero-headings">
            ABOUT ME
        </h2>
        <p className="hero-main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum rem, ab accusamus consequuntur quam, corporis quibusdam, iste expedita deleniti nulla? Explicabo et aliquam minus deleniti culpa doloribus, officia quas.</p>

        <button className="hero-explore-btn">EXPLORE</button>
        <img src="" alt="" />

        <div className="hero-design">
            <div>
                <h2>DESIGN</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus deleniti esse similique omnis laudantium obcaecati atque a? Ipsam quidem dolorum ipsum cupiditate, reprehenderit, rem dignissimos dolore, qui temporibus molestias esse.</p>
            </div>
            <div>
                <h2>DEVELOPMENT</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, alias commodi est odio officiis hic repudiandae consectetur ea rem fugiat quo aut repellendus, explicabo asperiores aperiam eius repellat, consequatur maxime!</p>
            </div>
        </div>
        <div className="hero-design-plus">
            <h2>MAINTENANCE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur sapiente aliquam suscipit iste quia impedit tempore ratione ipsam? Eligendi repudiandae dolores cum reiciendis, hic minus ratione similique eos veritatis!</p>
        </div>

        <img src="" alt="" />

        <h2 id="skills" className="hero-headings">
            SKILLS
        </h2>

        <div className="hero-tools">
            <h2>USING NOW:</h2>
            <div className="hero-tools-div">
                <div>
                    <img src={htmlIcon} alt="CSS icon" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={cssIcon} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={javaScriptIcon} alt="CSS icon" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={reactIcon} alt="CSS icon" />
                    <p>React</p>
                </div>
            </div>
        </div>
        
        <div className="hero-tools">
            <h2>LEARNING:</h2>
            <div className="hero-tools-div">
                <div>
                    <img src={javaScriptIcon} alt="CSS icon" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={reactIcon} alt="CSS icon" />
                    <p>React</p>
                </div>
                <div>
                    <img src={htmlIcon} alt="CSS icon" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={cssIcon} alt="CSS icon" />
                    <p>CSS</p>
                </div>
            </div>
        </div>

        <div className="hero-tools">
            <h2>OTHER SKILLS:</h2>
            <div className="hero-tools-div">
                <div>
                    <img src={angielskiIcon} alt="CSS icon" />
                    <p>ANGIELSKI <br />C1/C2</p>
                </div>
                <div>
                    <img src={hiszpanskiIcon} alt="CSS icon" />
                    <p>HISZPANSKI <br />B1/B2</p>
                </div>
                <div>
                    <img src={ccIcon} alt="icon" />
                    <p>C++</p>
                </div>
                <div>
                    <img src={cIcon} alt="icon" />
                    <p>C</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
