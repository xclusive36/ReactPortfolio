import Projects from "../Projects/Projects"; // import Projects component
import { IonCardContent } from "@ionic/react"; // import components from ionic/react

const Portfolio = () => {
  // create Portfolio component

  return (
    // return Portfolio component
    <section id="portfolio">
      <IonCardContent color="primary">
        <h2>
          Here are a few past projects I've worked on. Want to see more? Visit{" "}
          <a href="https://github.com/xclusive36/">Github</a>.
        </h2>
        <Projects />
      </IonCardContent>
    </section>
  );
};

export default Portfolio; // export Portfolio component
