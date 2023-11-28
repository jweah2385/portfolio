  import './About.css';
  import profile from '../images/white-top-girl.png'

  function About() {
    return (
      <>
        <main className="about">
          <section className="about-me">
            <div>
              <h1>Where Creativity Meets Strategy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='both-buttons'>
                <button>GitHub</button>
                <button>Resume</button>
              </div>
            </div>
          </section>

          <section className="photo-sec">
            <div>
             <img src={profile} />
            </div>
          </section>
        </main>
      </>
    );
  }

  export default About;
