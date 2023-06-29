import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
} from "@ionic/react"; // import components from ionic/react
const Project = ({ id, projects }) => {
  // children is the content of the component
  return (
    <section id={id}>
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
    </section>
  ); // return Project component
};

export default Project; // export Project component
