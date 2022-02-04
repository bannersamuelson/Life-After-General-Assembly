import img from '../../images/Link.png';


const Footer = () =>
  <footer>
    <h1> © 2022 L.A.G.A. All Rights Reserved</h1>
    <div>
      <img className="mr-3 h-10" viewBox="0 0 52 72" src={img} alt="LinkedIn logo" />
      <a href="https://www.linkedin.com/in/rod-raymond-281a0284/" style={{ textDecoration: "none" }}>Rod Raymond</a>
      <a href="https://www.linkedin.com/in/galinakishirova/" style={{ textDecoration: "none" }}>Galina Kishirova</a>
      <a href="https://www.linkedin.com/in/michaelabebe5/" style={{ textDecoration: "none" }}>Michael Abebe</a>
      <a href="https://www.linkedin.com/in/banner-samuelson/" style={{ textDecoration: "none" }}>Banner Samuelson</a>
    </div>

    </footer>

export default Footer