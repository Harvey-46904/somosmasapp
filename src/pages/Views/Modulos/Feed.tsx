import React, { useEffect, useState } from "react";

import { IonContent } from '@ionic/react';
import Carousel from '../../../components/Carousel';
import ProgressModule from '../../../components/ProgressModule';
import Comunidad from '../../../components/Comunidad';
import Mision from '../../../components/Mision';
import Header from '../../../components/Header';
import "../../Home.css";
import api from "../../../Utils/api";
const Feed: React.FC = () => {

interface Rangos {
  icono_actual: string;
  icono_siguiente:string;
  meta_actual:number;
  rango_actual:string;
  siguiente:string;
}
interface Reporte {
  id_user:number;
  caso:string;
}
interface mision_diaria {
  mision:string;
  descripcion:string;
  puntos:number;
}
   const [banners, setBanners] = useState<string[]>([]);
   const [mision, setMision] = useState<mision_diaria | null>(null);
   const [puntos, setPuntos] = useState(0);
   const [rango, setRango] = useState<Rangos | null>(null);
   const [reporte, setReporte] = useState<Reporte | null>(null);

   useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await api.get("/total_app"); // 👈 tu endpoint
       
        console.log("data",res.data);
          setMision(res.data.mision_diaria);
          setPuntos(res.data.puntos.puntuacion);
          setRango(res.data.rango);
          setReporte(res.data.reporte);
        // suponiendo que res.data = [{image: "url1"}, {image: "url2"}]
        setBanners(res.data.banner.map((b: any) => b.imagen));
         console.log(banners);
      } catch (err) {
        console.error("Error cargando banners", err);
      }
    };

    fetchBanners();
  }, []);
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
          <div style={{ width: '100%', height: '170px' }}>
            <Carousel  images={banners} />
          </div>

          {rango && <ProgressModule puntuacion={puntos} rango={rango} />}
          {reporte && <Comunidad report={reporte} />}
          {mision && <Mision datos={mision} />}
          
        </div>
      </IonContent>
    </>
  );
};

export default Feed;
