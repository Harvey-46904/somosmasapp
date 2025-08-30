import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Sesion from './pages/Views/Sesion';
import Inicio from './pages/Views/Inicio';
import { useEffect, useState } from 'react';
import { Loading } from './Utils/Loading'; // <-- Importa el loading

/* Ionic core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobileRegex = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  if (!isMobile) {
    return (
      <IonApp>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem"
          }}
        >
          <h2>🚫 Esta aplicación solo está disponible en dispositivos móviles</h2>
        </div>
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sesion">
            <Sesion />
          </Route>
          <Route path="/inicio" component={Inicio} />
          <Route exact path="/">
            <Redirect to="/sesion" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>

      <Loading /> {/* Componente global de loading */}
    </IonApp>
  );
};

export default App;
