import { IonCard, IonCardContent, IonLabel, IonProgressBar, IonIcon } from '@ionic/react';
import { leaf, ribbon, star ,arrowForward} from 'ionicons/icons';
import "./generalcomponent.css"

interface Rangos {
  icono_actual: string;
  icono_siguiente:string;
  meta_actual:number;
  rango_actual:string;
  siguiente:string;
}
interface ProgressProps {
  puntuacion: number; 
  rango: Rangos; 
}

const ProgressModule: React.FC<ProgressProps> = ({ puntuacion, rango }) => {
  
  
const iconMap: Record<string, string> = {
  leaf,
  ribbon,
  star
};
  return (
    <IonCard className="progress-card neon-card">
      <IonCardContent>
        <div className="progress-header-between">
          <div className="progress-side">
            <IonIcon icon={iconMap[rango.icono_actual]} size="large" color="success" />
            <IonLabel className='titulo_secondary'>{rango.rango_actual}</IonLabel>
            <IonIcon icon={arrowForward} size="large" color="medium" />
          </div>
          
          <div className="progress-side">
            <IonLabel className='titulo_secondary'>{rango.siguiente}</IonLabel>
            <IonIcon icon={iconMap[rango.icono_siguiente]} size="large" color="medium" />
          </div>
        </div>
        <IonProgressBar value={puntuacion}></IonProgressBar>
        <p className='titulo_secondary'>{puntuacion} / {rango.meta_actual} puntos</p>
      </IonCardContent>
    </IonCard>
  );
};

export default ProgressModule;
