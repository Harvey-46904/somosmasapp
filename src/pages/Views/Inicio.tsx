import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Route, Redirect } from 'react-router';

import { home, camera, happy, warning } from 'ionicons/icons';
import '../Home.css';

import Feed from './Modulos/Feed';
import Emociones from './Modulos/Emociones';
import Sos from './Modulos/Sos';
import Report from './Modulos/Report';

const Inicio: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/inicio" to="/inicio/feed" />
        <Route exact path="/inicio/feed" component={Feed} />
        <Route exact path="/inicio/emocion" component={Emociones} />
        <Route exact path="/inicio/sos" component={Sos} />
        <Route exact path="/inicio/reporte" component={Report} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="custom-tabbar">
        <IonTabButton tab="home" href="/inicio/feed">
          <IonIcon icon={home} className="tab-icon" />
        </IonTabButton>

        <IonTabButton tab="report" href="/inicio/reporte">
          <IonIcon icon={camera} className="tab-icon" />
        </IonTabButton>

        <IonTabButton tab="emotions" href="/inicio/emocion">
          <IonIcon icon={happy} className="tab-icon" />
        </IonTabButton>

        <IonTabButton tab="sos" href="/inicio/sos">
          <IonIcon icon={warning} className="tab-icon" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Inicio;
