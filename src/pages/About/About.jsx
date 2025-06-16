  import './About.css';
  import profile from '../images/portrait.jpg'
  import resume from '../../util/James Weah Resume.pdf'
  function About() {
    return (
      <>
        <main id="section01" className="about">
          <section className="about-me">
            <div className="h">
              <div className="welcome">Welcome!</div>
              <h1>Hello I'm James Weah | Software Developer</h1>
              <p>
                "I started programming with Java, which sparked my passion for coding. Over time, I became fascinated by languages and linguistics and how they shape the way we communicate and understand the world. I'm especially interested in the intersection of technology and language, and I want to use my web development skills to build applications that support learning, translation, or linguistic analysis"
              </p>
              <div className="both-buttons">
                <button className="github-btn">
                  <a
                    className="anchor-button"
                    href="https://github.com/jweah2385"
                  >
                    GitHub
                  </a>
                </button>

                <button className="resume-btn">
                  {' '}
                  <a className="anchor-button" href={resume}>
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </section>
          <section className="photo-sec">
            <div>
              <img className="portrait" alt="profile-photo" src={profile} />
            </div>
          </section>
        </main>
      </>
    );
  }

  export default About;
