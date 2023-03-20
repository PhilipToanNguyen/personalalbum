import React from "react";
import SocialLogo from "social-logos";
import { Link } from "react-router-dom";
import "../index.css"

function Footer() {
  const socials = {
    facebookLink: "https://facebook.com",
    tiktokLink: "https://tiktok.com",
    twitterLink: "https://twitter.com",
    instagramLink: "https://instagram.com",
    youtubeLink: "https://youtube.com",
  };

  return (
    <footer className="">
      <div className="wholefooter">
        <div className="author">
          <p>
            ©2023 Gallery | Philip T. Nguyen
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
