import React ,{useState,useEffect}from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar
} from '@ionic/react';

import { Preferences } from "@capacitor/preferences";
import "../pages/Home.css"
function Header() {
  const [saludo, setSaludo] = useState("");
  const [user, setUser] = useState("");

   useEffect(() => {
    const loadUser = async () => {
      const { value } = await Preferences.get({ key: "userName" });
      if (value) {
        setUser(value);
      }
    };

    const hora = new Date().getHours();
    if (hora < 12) {
      setSaludo("Buenos días");
    } else if (hora < 19) {
      setSaludo("Buenas tardes");
    } else {
      setSaludo("Buenas noches");
    }

    loadUser();
  }, []);
 
  return (
     <IonHeader>
  <IonToolbar className="header-transparent">
    <IonTitle>
      <IonItem lines="none" className="item-transparent">
        <IonAvatar slot="start">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
        <IonLabel className="titulo_secondary">
          {saludo} <br /> {user}
        </IonLabel>
      </IonItem>
    </IonTitle>
  </IonToolbar>
</IonHeader>
  );
}
export default Header;