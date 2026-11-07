// =====================================================================
//  LIVE-GRUPPE (Firebase Realtime Database)
// =====================================================================
//  Solange hier null steht, läuft die App im Link-Modus (Bestellung steckt
//  im geteilten Link). Sobald die Firebase-Zugangsdaten eingetragen sind,
//  gibt es die Live-Gruppe: ein fester Link, alle sehen alles sofort.
//
//  Anleitung: siehe README.md, Abschnitt "Live-Gruppe einrichten".
//  Diese Werte sind nicht geheim; Firebase-Web-Configs sind öffentlich.
// =====================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCCHX03NYIC-bxV4BwVV1ydxFN_W4vmr2M",
  authDomain: "asia-le.firebaseapp.com",
  databaseURL: "https://asia-le-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asia-le",
  storageBucket: "asia-le.firebasestorage.app",
  messagingSenderId: "476702780399",
  appId: "1:476702780399:web:e9bc29f89e52769995e41a",
};

/* Beispiel (eigene Werte aus der Firebase-Konsole einsetzen):
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "asia-le-xxxx.firebaseapp.com",
  databaseURL: "https://asia-le-xxxx-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asia-le-xxxx",
  appId: "1:123456789:web:abc123",
};
*/
