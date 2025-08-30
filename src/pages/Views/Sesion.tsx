import { IonContent, IonPage, IonText, IonButton, IonInput, IonItem, IonList,useIonRouter  } from '@ionic/react';
import '../Home.css';
import React, { useState } from "react";

import { login } from '../../Utils/auth';

const Sesion: React.FC = () => {

    const router = useIonRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    try {
      const token = await login(email, password);
      console.log("Token guardado:", token);
      router.push('/inicio', 'forward', 'replace');
    } catch (err) {
      console.error("Error en login:", err);
    }
  };
    return (
        <IonPage>
            <IonContent fullscreen className="home-content" scrollY={true} forceOverscroll={false}  >
                <div className="center-wrapper">
                    <IonText color="primary">
                        <div className="logo"></div>
                    </IonText>

                    <p className='titulo'>Ingresa tu nombre de usuario y contraseña para continuar</p>

                    <IonList className="custom-list">
                        <IonItem className="custom-item">
                            <IonInput
                                aria-label="Email"
                                placeholder="Ingresa tu usuario"
                                className="custom-input"
                                value={email}
                                onIonInput={(e: any) => setEmail(e.target.value)}
                            />
                        </IonItem>
                    </IonList>

                    <IonList className="custom-list">
                        <IonItem className="custom-item">
                            <IonInput
                                type="password"
                                aria-label="Contraseña"
                                placeholder="Ingresa tu contraseña"
                                className="custom-input"
                                value={password}
                                onIonInput={(e: any) => setPassword(e.target.value)}
                            />
                        </IonItem>
                    </IonList>

                    <IonButton expand="block" className="main-button" onClick={handleLogin}>
                        Iniciar
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Sesion;
