// src/Utils/Loading.tsx
import { IonLoading } from '@ionic/react';
import { RefObject, createRef } from 'react';

const loadingRef: RefObject<HTMLIonLoadingElement | null> = createRef();

export const Loading = () => <IonLoading ref={loadingRef} message="Enviando..." spinner="crescent" />;

// Funciones para mostrar/ocultar el loading
export const showLoading = () => loadingRef.current?.present();
export const hideLoading = () => loadingRef.current?.dismiss();
