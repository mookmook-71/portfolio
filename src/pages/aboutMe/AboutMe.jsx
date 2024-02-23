import ArrowDown from "../../assets/arrow-down.png";
import Footer from "../../components/footer/Footer";

function AboutMe() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Hi hi 👋🏻 this is Pattaraporn!</h1>
        <img
          src="https://placekitten.com/240/240"
          className="hero-profile-img"
          alt="profile"
        />
        <p className="hero-sub">
          I turn words into bridges, crafting precise and culturally attuned{" "}
          <br />
          <span className="hero-sub-strong">localization</span> to create
          impactful connections <br />
          and smooth <span className="hero-sub-strong">user experience </span>
          🌈✨
        </p>
        <div className="icon-divider">
          <img
            className="icon not-good"
            src={ArrowDown}
            alt="next section arrow down"
          />
        </div>
        <div className="text-center">
          <h2>My Expertise</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h4>
            Translation &<br /> localization
          </h4>
        </div>
        <p className="section-text body-2">
          I've been involved in various projects such as academic work,
          interviews and video subtitles. My expertise lies in localizing
          software for mobile apps and websites. In this specialized field, I've
          established style guides, glossaries and other language assets to
          ensure top-quality localization. I also provide localization audit and
          consultation to my client.
        </p>
      </section>

      <section className="section section-revert">
        <div className="section-title">
          <h4>UX writing</h4>
        </div>
        <p className="section-text body-2">
          Collaborating within a vibrant UX team comprising content designers,
          product designers, researchers, project managers, engineers and many
          more, I contribute to creating content that enhances the user
          experience. I help teams make sure that the content design meets usability,
          accessibility and user-centric standards while also being
          localization-friendly so the brand is ready to go local and global.
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <h4>Blog writing</h4>
        </div>
        <p className="section-text body-2">
          In my free time, I share my Korean travel and language-learning experience through
          blog articles giving the readers a glimpse into the culture, language
          and adventures of Korea.
        </p>
      </section>

      <section className="section section-revert">
        <div className="section-title">
          <h4>Thai for Foreigners</h4>
        </div>
        <p className="section-text body-2">
          I offer personalized lessons to help Thai language learners achieve
          their goals. My students come from the US, Italy, Myanmar, Korea, China and
          Singapore.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default AboutMe;
