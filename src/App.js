import {
  // import components from ionic/react
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Outlet } from "react-router-dom"; // import Outlet and Link from react-router-dom

import Header from "./components/Header/Header.component"; // import Header component
import Social from "./components/Social/Social.component"; // import Social component
import Footer from "./components/Footer/Footer.component"; // import Footer component

import "./App.css"; // import App.css stylesheet

function App() {
  return (
    <IonPage>
      <IonContent class="ion-padding" color="light">
        <IonCard className="content">
          <Header />
          <IonCardContent color="light">
            <IonGrid>
              <IonRow>
                <div className="side-bar">
                  <Social />
                </div>
                <IonCol className="main" color="light">
                  <Outlet />
                </IonCol>
              </IonRow>
            </IonGrid>
            <Footer />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default App;
