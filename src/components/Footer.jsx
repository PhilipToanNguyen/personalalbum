import React from "react";
import SocialLogo from "social-logos";
import "../index.css"

function Footer() {
  const socials = {
    facebookLink: "https://facebook.com",
    tiktokLink: "https://tiktok.com",
    twitterLink: "https://twitter.com",
    instagramLink: "https://instagram.com/plip.jpg",
    youtubeLink: "https://youtube.com",
  };

  return (
    <footer className="">
      <div className="wholefooter">

      <div className="social">
          <a href={socials.instagramLink} className="w-6">
            <SocialLogo icon="instagram" />
          </a>
      </div>
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
