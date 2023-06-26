import {
  // import components from ionic/react
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import Project from "../Project/Project"; // import Project component

import MetaInsight from "../../assets/images/meta-insight.png"; // import image of meta-insight
import VolunteerFinder from "../../assets/images/vf.png"; // import image of volunteer finder
import MisfitGirl from "../../assets/images/misfitgirl.png"; // import image of misfitgirl.com
import LiteStep from "../../assets/images/litestep.webp"; // import image of litestep
import Minesweeper from "../../assets/images/minesweeper.png"; // import image of minesweeper
import BlackJack from "../../assets/images/blackjack.png"; // import image of blackjack

const Portfolio = () => {
  // create Portfolio component
  const projects = [
    // array of projects to map over
    {
      title: "Meta-Insight",
      alt: "Meta-Insight",
      image: MetaInsight,
      git: "https://github.com/erin-m-keller/meta-insight/",
      deploy: "https://meta-insight.herokuapp.com/",
    },
    {
      title: "Volunteer Finder",
      alt: "Volunteer Finder",
      image: VolunteerFinder,
      git: "https://github.com/erin-m-keller/volunteer-finder",
      deploy: "https://erin-m-keller.github.io/volunteer-finder/",
    },
    {
      title: "Misfitgirl.com",
      alt: "MisfitGirl.com Wax melts",
      image: MisfitGirl,
      git: "https://github.com/WordPress",
      deploy: "https://misfitgirl.com",
    },
    {
      title: "Minesweeper Web App",
      alt: "React Minesweeper Game",
      image: Minesweeper,
      git: "https://github.com/xclusive36/minesweeper",
      deploy: "https://stirring-parfait-06fd3c.netlify.app/",
    },
    {
      title: "LiteStep iOS App",
      alt: "LiteStep Picklist App",
      image: LiteStep,
      git: "https://github.com/xclusive36/LiteStep",
      deploy: "https://apps.apple.com/us/app/litestep/id1490896776",
    },
    {
      title: "Black Jack",
      alt: "Black Jack Game",
      image: BlackJack,
      git: "https://github.com/xclusive36/BlackJack",
      deploy: "https://xclusive36.github.io/BlackJack/",
    },
  ];

  return (
    // return Portfolio component
    <Project id="portfolio">
      <IonCardHeader>
        <IonCardTitle>Portfolio</IonCardTitle>
      </IonCardHeader>
      <IonCardContent color="primary">
        <h2>
          Here are a few past projects I've worked on. Want to see more? Visit{" "}
          <a href="https://github.com/xclusive36/">Github</a>.
        </h2>
        <IonGrid>
          <IonRow>
            {projects.map((project, index) => (
              <IonCol
                size-xs="12"
                size-sm="12"
                size-md={index === 0 ? "12" : "6"}
                size-lg={index === 0 ? "12" : "4"}
                key={index}
              >
                <IonCard className="card-container">
                  <IonCardHeader>
                    <a href={project.link} target="blank">
                      <IonImg src={project.image} alt={project.alt}></IonImg>
                    </a>
                  </IonCardHeader>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>{project.title}</IonCardTitle>
                    <br />
                    <a href={project.git}>Github link</a>&nbsp;-&nbsp;
                    <a href={project.deploy}>Deployed link</a>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </Project>
  );
};

export default Portfolio; // export Portfolio component