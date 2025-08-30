import React, { useState } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle 
    ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle 
} from '@ionic/react';

interface mision_diaria {
  mision:string;
  descripcion:string;
  puntos:number;
}
interface ProgressProps {
  datos: mision_diaria; 
}
const Mision: React.FC<ProgressProps> = ({ datos }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IonButton expand="block" onClick={() => setIsOpen(true)} className='main-button'>
                Misión Diaria
            </IonButton>

            <IonModal isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Misión Diaria</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Cerrar</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <p>
                        🎯 ¡Atención, jugador! Tu misión diaria ya está lista. Súmala, gana puntos y desbloquea nuevas recompensas. ⚡ No dejes que el día termine sin cumplirla, ¡la aventura continúa!
                    </p>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{datos.mision}</IonCardTitle>
                            <IonCardSubtitle> {datos.puntos} puntos de empatia</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>{datos.descripcion}</IonCardContent>
                    </IonCard>
                </IonContent>
            </IonModal>
        </>
    );
}

export default Mision;
