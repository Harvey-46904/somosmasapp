import React, { useState } from 'react';
import { 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonButton, IonToast 
} from '@ionic/react';
import Header from '../../../components/Header';
import "../../Home.css"
import api from "../../../Utils/api";
import { Preferences } from "@capacitor/preferences";
const Sos = () => {
  const [ok, setOk] = useState(false);

  const sendHelp = async () => {
    try {

     const { value } = await Preferences.get({ key: "userId" });

      if (!value) {
        console.error("No se encontró userId en Preferences");
        return;
      }
      await api.post("/ayudas", { id_user:parseInt(value) ,estado:0});
      setOk(true);
    } catch (err) {
      console.error("Error al enviar ayuda:", err);
    }
  };

  return (
    <>
      <Header />
      <IonContent className='home-content'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            padding: '5px'
          }}
        >
          <IonCard className='neon-card'>
            <IonCardHeader>
              <IonCardTitle>¿Necesitas ayuda inmediata?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
             <IonButton expand="block" color="light" href="tel:123">
  📞 Llamar a emergencia
</IonButton>
              <IonButton expand="block" color="light" onClick={sendHelp}>
                💬 Buscar ayuda a un orientador
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Confirmación */}
        <IonToast
          isOpen={ok}
          message="Trataremos de comunicarnos lo mas pronto posible"
          duration={5000}
          onDidDismiss={() => setOk(false)}
        />
      </IonContent>
    </>
  );
};

export default Sos;
