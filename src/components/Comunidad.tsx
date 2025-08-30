import React from 'react';
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
} from '@ionic/react';

interface Reporte {
  id_user:number;
  caso:string;
}
interface ProgressProps {
  report: Reporte; 
}

const Comunidad: React.FC<ProgressProps> = ({ report }) => {

  return (
    <IonCard className='neon-card'>
      <IonCardHeader>
        <IonCardTitle className='titulo_secondary'>Comunidad Empática</IonCardTitle>
       
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel className='titulo_secondary'>El Usuario {report.id_user} Registros un caso: {report.caso}</IonLabel>
          </IonItem>

         
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
export default Comunidad;