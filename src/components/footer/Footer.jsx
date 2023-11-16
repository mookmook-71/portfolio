function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <h3 className="footer-header">Pattaraporn</h3>
        <ul className="footer-list">
          <li className="footer-list-item header">About Me</li>
          <li className="footer-list-item">Home</li>
          <li className="footer-list-item">About us</li>
          <li className="footer-list-item">Pricing</li>
          <li className="footer-list-item">Blog</li>
          <li className="footer-list-item">Contact</li>
        </ul>

        <ul className="footer-list">
          <li className="footer-list-item header">Services</li>
          <li className="footer-list-item">Facebook</li>
          <li className="footer-list-item">Twitter</li>
          <li className="footer-list-item">Linkedin</li>
          <li className="footer-list-item">Instagram</li>
        </ul>

        <ul className="footer-list">
          <li className="footer-list-item header">Resume</li>
          <li className="footer-list-item">Slack</li>
          <li className="footer-list-item">Asana</li>
          <li className="footer-list-item">Jira</li>
          <li className="footer-list-item">Trello</li>
        </ul>

        <ul className="footer-list">
          <li className="footer-list-item header">Contact</li>
          <li className="footer-list-item">Privacy Policy</li>
          <li className="footer-list-item">Terms Of Service</li>
        </ul>
      </div>
      <hr className="divider" />
      <div className="copyright">2021 © Pattaraporn All rights reserved.</div>
    </footer>
  );
}

export default Footer;
