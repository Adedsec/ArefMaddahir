import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Social extends React.Component {
  render() {
    return (
      <div className="social-container">
        <a
          href="https://www.instagram.com/a.dedsec/"
          target="_blank"
          className="social-icon"
        >
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
        <a
          href="http://twitter.com/a_dedsec"
          className="social-icon"
          target="_blank"
        >
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </a>
        <a href="https://t.me/a_dedsec" className="social-icon" target="_blank">
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </div>
        </a>
        <a
          href="https://github.com/Adedsec"
          className="social-icon"
          target="_blank"
        >
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/aref-maddah-7639ba16a"
          className="social-icon"
          target="_blank"
        >
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
        <a
          href="https://virgool.io/@arefmaddah"
          className="social-icon"
          target="_blank"
        >
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faMediumM} />
          </div>
        </a>
      </div>
    );
  }
}
export default Social;
