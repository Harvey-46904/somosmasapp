import React, { useState } from 'react';
import {
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonToast
} from '@ionic/react';
import Header from '../../../components/Header';
import "../../Home.css";
import api from "../../../Utils/api";
import { Preferences } from "@capacitor/preferences";
const Emociones: React.FC = () => {
  const [ok, setOk] = useState(false);

  const sendEmotion = async (emotion: string) => {
    try {
       const { value } = await Preferences.get({ key: "userId" });
      
            if (!value) {
              console.error("No se encontró userId en Preferences");
              return;
            }
      await api.post('/user-emociones', { emocion: emotion , id_user:parseInt(value)});
      setOk(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <IonContent className="home-content" scrollY={true}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <div className="circular-img" id="psicologo"></div>
        </div>

        <IonCard className="neon-card">
          <IonCardHeader>
            <IonCardTitle>¿Cómo te sientes hoy?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="grid grid-cols-2 gap-3 justify-items-center">
              <IonButton color="tertiary" onClick={() => sendEmotion('Enojado')}>😡 Enojado</IonButton>
              <IonButton color="primary" onClick={() => sendEmotion('Confiado')}>😎 Confiado</IonButton>
              <IonButton color="medium" onClick={() => sendEmotion('Cansado')}>😴 Cansado</IonButton>
              <IonButton color="dark" onClick={() => sendEmotion('Estresado')}>🤯 Estresado</IonButton>
              <IonButton color="secondary" onClick={() => sendEmotion('Ansioso')}>😨 Ansioso</IonButton>
              <IonButton color="success" onClick={() => sendEmotion('Emocionado')}>🤩 Emocionado</IonButton>
              <IonButton color="warning" onClick={() => sendEmotion('Confundido')}>😶‍🌫️ Confundido</IonButton>
              <IonButton color="danger" onClick={() => sendEmotion('Decepcionado')}>💔 Decepcionado</IonButton>
              <IonButton color="light" onClick={() => sendEmotion('Agradecido')}>🫶 Agradecido</IonButton>
              <IonButton color="primary" onClick={() => sendEmotion('Motivado')}>🤗 Motivado</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="neon-card">
          <IonCardHeader>
            <IonCardTitle>Registro emocional</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Aquí puedes mostrar un historial con los estados emocionales elegidos.
          </IonCardContent>
        </IonCard>

        {/* Confirmación */}
        <IonToast
          isOpen={ok}
          message="¡Emoción registrada!"
          duration={5000}
          onDidDismiss={() => setOk(false)}
        />
      </IonContent>
    </>
  );
};

export default Emociones;