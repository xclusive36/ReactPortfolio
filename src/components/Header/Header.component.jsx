import { useState } from "react"; // import useState hook
import { IonCardHeader, IonCardTitle, IonIcon, IonButton } from "@ionic/react"; // import components from @ionic/react
import { Link } from "react-router-dom"; // import Link component from react-router-dom
import {
  // import icons from ionicons
  mailOutline,
  informationCircleOutline,
  briefcaseOutline,
  bookOutline,
} from "ionicons/icons";
import Navigation from "../Navigation/Navigation.component"; // import Navigation component
import "./Header.styles.css"; // import Header component styles

const Header = () => {
  // create Header component
  const [selectedButton, setSelectedButton] = useState("about-me"); // useState hook to set selectedButton state

  return (
    // return Header component
    <IonCardHeader color="light" className="header">
      <IonCardTitle className="name">Joshua Cavell</IonCardTitle>
      <div className="header-buttons">
        <Navigation>
          <Link to="/">
            <IonButton
              className="header-button"
              fill={selectedButton === "about-me" ? "solid" : "clear"}
              color={selectedButton === "about-me" ? "primary" : "dark"}
              onClick={() => setSelectedButton("about-me")}
            >
              <IonIcon icon={informationCircleOutline} slot="start" />
              About Me
            </IonButton>
          </Link>
        </Navigation>
        <Navigation>
          <Link to="/portfolio">
            <IonButton
              className="header-button"
              fill={selectedButton === "portfolio" ? "solid" : "clear"}
              color={selectedButton === "portfolio" ? "primary" : "dark"}
              onClick={() => setSelectedButton("portfolio")}
            >
              <IonIcon icon={briefcaseOutline} slot="start" />
              Portfolio
            </IonButton>
          </Link>
        </Navigation>
        <Navigation>
          <Link to="/contact">
            <IonButton
              className="header-button"
              fill={selectedButton === "contact" ? "solid" : "clear"}
              color={selectedButton === "contact" ? "primary" : "dark"}
              onClick={() => setSelectedButton("contact")}
            >
              <IonIcon icon={mailOutline} slot="start" />
              Contact
            </IonButton>
          </Link>
        </Navigation>
        <Navigation>
          <Link to="/resume">
            <IonButton
              className="header-button"
              fill={selectedButton === "my-resume" ? "solid" : "clear"}
              color={selectedButton === "my-resume" ? "primary" : "dark"}
              onClick={() => setSelectedButton("my-resume")}
            >
              <IonIcon icon={bookOutline} slot="start" />
              My Resume
            </IonButton>
          </Link>
        </Navigation>
      </div>
    </IonCardHeader>
  );
};

export default Header; // export Header component
