import MetaInsight from "../../assets/images/meta-insight.png"; // import image of meta-insight
import VolunteerFinder from "../../assets/images/vf.png"; // import image of volunteer finder
import MisfitGirl from "../../assets/images/misfitgirl.png"; // import image of misfitgirl.com
import LiteStep from "../../assets/images/litestep.webp"; // import image of litestep
import Minesweeper from "../../assets/images/minesweeper.png"; // import image of minesweeper
import BlackJack from "../../assets/images/blackjack.png"; // import image of blackjack
import SnipSnap from "../../assets/images/snipsnap.png"; // import image of snipsnap

import Project from "../Project/Project"; // import Project component
import { IonGrid, IonRow } from "@ionic/react"; // import components from ionic/react

const Projects = () => {
  const projects = [
    // array of projects to map over
    {
      title: "SnipSnap",
      alt: "SnipSnap",
      image: SnipSnap,
      git: "https://github.com/xclusive36/SnipSnap/",
      deploy: "https://snipsnapsalon-cac486d1b963.herokuapp.com/",
    },
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
    <IonGrid>
      <IonRow>
        {projects.map((project, index) => (
          <Project index={index} project={project} key={index} />
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default Projects;
