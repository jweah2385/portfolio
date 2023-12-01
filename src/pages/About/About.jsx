  import './About.css';
  import profile from '../images/portrait.jpg'
  
  function About() {
    return (
      <>
        <main className="about">
          <section className="about-me">
            <div>
              <div className="welcome">Welcome!</div>
              <h1>Hello I'm James Weah | Software Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="both-buttons">
                <button>GitHub</button>
                <button>Resume</button>
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
