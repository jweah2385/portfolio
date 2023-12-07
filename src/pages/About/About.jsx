  import './About.css';
  import profile from '../images/portrait.jpg'
  
  function About() {
    return (
      <>
        <main id="section01" className="about">
          <section className="about-me">
            <div className="h">
              <div className="welcome">Welcome!</div>
              <h1>Hello I'm James Weah | Software Developer</h1>
              <p>
                "Beginning with Java, my programming journey commenced, igniting
                a fervor for coding. Web development, biology, and linguistics
                fascinated me deeply. Web development offered a canvas for
                intuitive interfaces, while biology and linguistics led me to
                explore complex systems and language processing algorithms.
                These diverse interests propel my exploration of their
                intersection in technology."
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
                  <a className="anchor-button" href="">
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
