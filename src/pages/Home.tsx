import { IonContent, IonHeader, IonPage, IonTitle, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="home-content">
        <div className="logo"></div>

        <div className="center-container">
           <IonButton
            expand="block"
            className="main-button"
            routerLink="/sesion"
          >
            Empezar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
