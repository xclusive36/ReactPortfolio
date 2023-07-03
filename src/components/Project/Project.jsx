import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonImg,
  IonCard,
} from "@ionic/react"; // import components from ionic/react
const Project = ({ index, project }) => {
  return (
    <IonCol
      size-xs="12"
      size-sm="12"
      size-md={index === 0 ? "12" : "6"}
      size-lg={index === 0 ? "12" : "4"}
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
  ); // return Project component
};

export default Project; // export Project component
