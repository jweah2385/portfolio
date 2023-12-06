import './Skills.css'
import html from '../images/skills/html.jpg';
import css from '../images/skills/css.jpg';
import bootstrap from '../images/skills/bootstrap.jpg';
import react from '../images/skills/react.jpg';
import javaScript from '../images/skills/js.jpg';
import mongoDB from '../images/skills/mongodb.jpg';
import nodeJs from '../images/skills/nodejs.jpg';
import jquery from '../images/skills/jquery.jpg';
import apollogql from '../images/skills/apollogql.jpg';

function Skills() {
  return (
    <>
      <main id="section02" className="skills-page">
        <h1 className="my-skills-title">My skills</h1>
        <section className="skills-sec">
          <div className="front-end">
            <h1>Front-end</h1>
            <div className="front-end-icons">
              <div>
                <img src={html} />
                <span className="html">HTML</span>
              </div>
              <div>
                <img src={css} />
                <span className="css">CSS</span>
              </div>
              <div>
                <img src={react} />
                <span className="react">React</span>
              </div>
              <div>
                <img src={bootstrap} />
                <span className="bootstrap">Bootstrap</span>
              </div>
            </div>
          </div>
          <div className="back-end">
            <h1>Back-end</h1>

            <div className="back-end-icons">
              <div className="icons">
                <img src={javaScript} />
                <span className="js">JavaScript</span>
              </div>
              <div className="icons">
                <img src={mongoDB} />
                <span className="mongo">MongoDB</span>
              </div>
              <div className="icons">
                <img src={jquery} />
                <span className="jquery">JQuery</span>
              </div>
              <div className="icons">
                <img src={nodeJs} />
                <span className="nodejs">NodeJs</span>
              </div>
              <div className="icons">
                <img src={apollogql} />
                <span className="apollo">Apollo GQL</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Skills;
