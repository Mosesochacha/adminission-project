import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">

        <div>
          <h1>Shinobi</h1>
          <p>Choose the best</p>
        </div>

        <div>

          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-Twitter-square"></i>
          </a>

        </div>

      </div>

      <div className="top">

        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">contact Us</a>
          <a href="/">All version</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">privacy</a>
          <a href="/">License</a>
        </div>


      </div>



    </div>

  );
};

export default Footer;
