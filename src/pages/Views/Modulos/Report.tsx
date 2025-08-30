import React, { useState } from 'react';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonActionSheet,
  IonToast,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { camera, image } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Header from '../../../components/Header';
import "../../Home.css";
import api from "../../../Utils/api";
const Report: React.FC = () => {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [showSheet, setShowSheet] = useState(false);
  const [ok, setOk] = useState(false);
  const [caso, setCaso] = useState<string>("");

  const pickPhoto = async (source: CameraSource) => {
    const img = await Camera.getPhoto({
      quality: 70,
      resultType: CameraResultType.DataUrl,
      source
    });
    setPhoto(img.dataUrl || null);
  };

 const sendReport = async () => {
  if (!description.trim() || !caso) return;

  const payload = {
    evidencia: photo,
    descripcion: `"${description}"`,
    caso
  };

  try {
    const res = await api.post("/reportes", payload);
    console.log("Reporte enviado:", res.data);

    // Limpiar formulario
    setDescription('');
    setPhoto(null);
    setCaso('');

    // Mostrar toast de éxito
    setOk(true);
  } catch (error) {
    console.error("Error al enviar reporte:", error);
    // Aquí podrías activar un IonToast de error si quieres
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
            gap: '10px',
            padding: '10px'
          }}
        >
          <IonCard className='neon-card'>
            <IonCardHeader>
              <IonCardTitle>Reportar una anomalía</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Si notas bullying, un compañero triste, robo, vandalismo o cualquier situación irregular, repórtalo aquí. Tu reporte será confidencial.
              </p>

              {/* Select de caso */}
              <IonItem>
                <IonLabel position="stacked">Tipo de caso</IonLabel>
                <IonSelect
                  placeholder="Selecciona un caso"
                  value={caso}
                  onIonChange={(e) => setCaso(e.detail.value)}
                >
                  <IonSelectOption value="ayuda">Ayuda</IonSelectOption>
                  <IonSelectOption value="bullying">Bullying</IonSelectOption>
                  <IonSelectOption value="robo">Robo</IonSelectOption>
                  <IonSelectOption value="vandalismo">Vandalismo</IonSelectOption>
                  <IonSelectOption value="otro">Otro</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Descripción</IonLabel>
                <IonTextarea
                  placeholder="Escribe lo que sucede..."
                  value={description}
                  onIonChange={(e) => setDescription(e.detail.value!)}
                />
              </IonItem>

              {photo && (
                <img
                  src={photo}
                  alt="Foto seleccionada"
                  style={{
                    marginTop: '10px',
                    borderRadius: '8px',
                    maxHeight: '200px',
                    objectFit: 'cover'
                  }}
                />
              )}

              <IonButton
                expand="block"
                color="medium"
                onClick={() => setShowSheet(true)}
                style={{ marginTop: '10px' }}
              >
                📷 Agregar foto
              </IonButton>

              <IonButton
                expand="block"
                color="primary"
                onClick={sendReport}
                style={{ marginTop: '5px' }}
              >
                Enviar reporte
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Selección de foto */}
        <IonActionSheet
          isOpen={showSheet}
          onDidDismiss={() => setShowSheet(false)}
          buttons={[
            { text: 'Tomar foto', icon: camera, handler: () => pickPhoto(CameraSource.Camera) },
            { text: 'Elegir de galería', icon: image, handler: () => pickPhoto(CameraSource.Photos) },
            { text: 'Cancelar', role: 'cancel' },
          ]}
        />

        {/* Confirmación */}
        <IonToast
          isOpen={ok}
          message="¡Gracias! Tu reporte fue enviado para revisión."
          duration={5000}
          onDidDismiss={() => setOk(false)}
        />
      </IonContent>
    </>
  );
};

export default Report;
