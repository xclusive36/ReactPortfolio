import Social from "../Social/Social.component"; // import Social component

const Footer = () => { // Create Footer component
  return ( // return Footer component
    <footer className="footer">
      <Social />
      <p className="footer-text">
        Built with <a href="https://react.dev/">React</a> and{" "}
        <a href="https://ionicframework.com/">Ionic Framework</a>
      </p>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} <a href="#contact">Joshua Cavell</a>
      </p>
    </footer>
  );
};

export default Footer; // export Footer component
