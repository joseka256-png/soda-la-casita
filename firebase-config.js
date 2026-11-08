// =========================================================
//  CONFIGURACIÓN DE FIREBASE — Soda La Casita
//  Pegar aquí el bloque firebaseConfig de la consola de Firebase
//  (Configuración del proyecto → Tus apps → App web).
//  Estos datos NO son secretos: la seguridad la dan las reglas
//  de Firestore (archivo firestore.rules).
//  Mientras diga "PEGAR…", la tarjeta muestra "en configuración".
// =========================================================
export const firebaseConfig = {
  apiKey: "PEGAR_API_KEY",
  authDomain: "PEGAR.firebaseapp.com",
  projectId: "PEGAR",
  storageBucket: "PEGAR.firebasestorage.app",
  messagingSenderId: "PEGAR",
  appId: "PEGAR"
};

// Clave PÚBLICA de reCAPTCHA (Fraud Defense) para App Check contra bots.
// Dejar vacía ("") hasta crearla; con vacío no se activa App Check.
export const APP_CHECK_SITE_KEY = "";

// =========================================================
//  REGLAS DEL PROGRAMA DE LEALTAD
//  Si se cambia la meta, cambiarla también en firestore.rules
//  (las reglas son las que mandan).
// =========================================================
export const LEALTAD = {
  meta: 10,                       // sellos para ganar el premio
  montoMinimo: 3000,              // compra mínima (₡) para sumar sello
  modo: "porCompra",              // "porCompra": 1 sello por compra ≥ mínimo
                                  // "porCada": 1 sello por cada ₡montoMinimo (₡6.000 = 2 sellos)
  premio: "Lápiz corriente gratis"
};
