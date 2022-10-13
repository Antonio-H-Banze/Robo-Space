import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faAddressCard, faEnvelope);

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Antonio-H-Banze"><FontAwesomeIcon className="footer-icon" icon={["fab", "github"]} title="Github" /></a>
        <a href="https://www.linkedin.com/in/ant%C3%B3nio-h-banze/"><FontAwesomeIcon className="footer-icon" icon={["fab", "linkedin"]} title="Linkedin" /></a>
        <a href="mailto:antoniohbanze@gmail.com"><FontAwesomeIcon className="footer-icon" icon={["fas", "envelope"]} title="Email" /></a>
      </div>
      <p>Copyright Antonio Banze {new Date().getFullYear()}</p>
    </footer>
  );
}
