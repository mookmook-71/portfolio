function App() {
  return (
    <>
      <nav class="navbar">
        <ul class="navbar-wrapper">
          <li class="navbar-item">
            <button class="btn active">About me</button>
          </li>
          <li class="navbar-item">
            <button class="btn">Portfolio</button>
          </li>
          <li class="navbar-item">
            <button class="btn">Resume</button>
          </li>
          <li class="navbar-item">
            <button class="btn">Contact</button>
          </li>
        </ul>
      </nav>

      <main>
        <section class="hero">
          <img src="https://assets.api.uizard.io/api/cdn/stream/d2d3bae8-33a0-4ebe-9a4f-6a161259b068.png" class="hero-bg" alt="a rainbow" />
          <h1 class="hero-title">Hi, this is Pattaraporn!</h1>
        </section>

        <section class="section pt-0">
          <div class="section-wrapper">
            <h1 class="section-title">About me</h1>
            <p class="section-text">I'm a language enthusiast turned professional Thai (th-TH) translator with a degree in linguistics and a decade of experience in translation and localization plus project management.</p>
            <p>I turn words into bridges, crafting precise and culturally attuned localization to create impactful connections. Glad to see you here!</p>
            <button class="btn btn-primary active section-btn center">Connect on Linkedin</button>
          </div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/d2f3cbc3-267e-469b-b9ef-264b46310cb9.png" alt="kid sunset" class="section-side-img" />
        </section>

        <section class="section reverse">
          <div class="section-wrapper">
            <h1 class="section-title">Translation and localization</h1>
            <p class="section-text">I've engaged in a wide spectrum of projects, covering academic materials, interviews, surveys, and video subtitles. My expertise revolves around software localization for mobile apps and websites. In this specialized field, I've established style guides, glossaries and other language assets to ensure top-quality localization. I also provide localization audit and consultation to my client.</p>
            <button class="section-btn btn btn-outline-light">See sample projects</button>
          </div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/cc850735-1065-4b81-8c7a-fd664d4ca9d8.png" alt="worker" class="section-side-img" />
        </section>

        <section class="section">
          <div class="section-wrapper">
            <h1 class="section-title">UX writing</h1>
            <p class="section-text">Collaborating within a vibrant UX team comprising content designers, product designers, researchers, project managers, engineers, and many more, I contribute to crafting content that enhances the user experience. I help ensure that the content design meets usability, accessibility, and user-centric standards, while also being localization-friendly so the brand is ready to go local and global.</p>
            <button class="section-btn btn btn-primary ">See sample projects</button>
          </div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/4fce335d-594d-40b7-89a3-2504be841f71.png" alt="people around the world" class="section-side-img" />
        </section>

        <section class="section reverse">
          <div class="section-wrapper">
            <h1 class="section-title">Blog writing</h1>
            <p class="section-text">I share my Korean travel and language-learning experiences through blog articles giving the readers a glimpse into the culture, language and adventures of Korea.</p>
            <button class="section-btn btn btn-outline-light ">Visit website</button>
          </div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/f1288968-921f-4ccb-b628-d3e9de467710.png" alt="blog-writing" class="section-side-img" />
        </section>

        <section class="section">
          <div class="section-wrapper">
            <h1 class="section-title">Teaching Thai language</h1>
            <p class="section-text">I offer personalized lessons to help Thai language learners achieve their goals. My students come from italy, Myanmar, Korea, China and Singapore.</p>
          </div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/f1288968-921f-4ccb-b628-d3e9de467710.png" alt="people around the world" class="section-side-img" />
        </section>
      </main>
      <footer class="footer">
        <div class="footer-wrapper">
          <h3 class="footer-header">Pattaraporn</h3>
          <ul class="footer-list">
            <li class="footer-list-item header">About Me</li>
            <li class="footer-list-item">Home</li>
            <li class="footer-list-item">About us</li>
            <li class="footer-list-item">Pricing</li>
            <li class="footer-list-item">Blog</li>
            <li class="footer-list-item">Contact</li>
          </ul>

          <ul class="footer-list">
            <li class="footer-list-item header">Services</li>
            <li class="footer-list-item">Facebook</li>
            <li class="footer-list-item">Twitter</li>
            <li class="footer-list-item">Linkedin</li>
            <li class="footer-list-item">Instagram</li>
          </ul>

          <ul class="footer-list">
            <li class="footer-list-item header">Resume</li>
            <li class="footer-list-item">Slack</li>
            <li class="footer-list-item">Asana</li>
            <li class="footer-list-item">Jira</li>
            <li class="footer-list-item">Trello</li>
          </ul>

          <ul class="footer-list">
            <li class="footer-list-item header">Contact</li>
            <li class="footer-list-item">Privacy Policy</li>
            <li class="footer-list-item">Terms Of Service</li>
          </ul>
        </div>
        <hr class="divider" />
        <div class="copyright">2021 © Pattaraporn All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
