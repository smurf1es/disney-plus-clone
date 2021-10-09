const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-4 bg-[#f9f9f9] py-8">
      <div>
        <img
          className="w-[80px] h-[36px]"
          src="https://static-mh.content.disney.io/matterhorn/assets/goc/nav-logo-dark@2x-2b3eb08c507c.png"
          alt="logo-disney+"
        />
      </div>

      <div className="text-[#040714] flex items-center justify-center space-x-6 px-6 md:px-0 flex-wrap">
        <a className="footer-link" href="#">
          SHOP
        </a>
        <a className="footer-link" href="#">
          OH MY DISNEY
        </a>
        <a className="footer-link" href="#">
          DISNEY STYLE
        </a>
        <a className="footer-link" href="#">
          DISNEY FAMILY
        </a>
        <a className="footer-link" href="#">
          MOVIES
        </a>
        <a className="footer-link" href="#">
          TV
        </a>
        <a className="footer-link" href="#">
          PARKS
        </a>
        <a className="footer-link" href="#">
          MARVEL
        </a>
        <a className="footer-link" href="#">
          STAR WARS
        </a>
        <a className="footer-link" href="#">
          PIXAR
        </a>
        <a className="footer-link" href="#">
          PRINCESS
        </a>
        <a className="footer-link" href="#">
          GAMES
        </a>
      </div>

      <div className="text-[#040714] flex items-center justify-center space-x-6 flex-wrap">
        <a className="footer-sublink" href="#">
          About Disney
        </a>
        <a className="footer-sublink" href="#">
          Advertise with us
        </a>
        <a className="footer-sublink" href="#">
          Support
        </a>
        <a className="footer-sublink" href="#">
          Investor Relations
        </a>
        <a className="footer-sublink" href="#">
          Careers
        </a>
        <a className="footer-sublink" href="#">
          Terms of Use
        </a>
        <a className="footer-sublink" href="#">
          Privacy Policy
        </a>
        <a className="footer-sublink" href="#">
          Classifications
        </a>
        <a className="footer-sublink" href="#">
          Interest-Based Ads
        </a>
      </div>

      <div className="text-[#040714] space-x-6 text-center">
        <p className="text-[0.69rem]">
          ©Disney ©Disney/Pixar © ™ Lucasfilm Ltd. © Marvel, Disney
          Entertainment
        </p>
      </div>
    </footer>
  );
};

export default Footer;
