// =====================================================================
//  SPEISEKARTE – hier die echten Daten von Asia Imbiss Le eintragen
// =====================================================================
//  Die Einträge unten sind nur BEISPIELE, damit die App läuft.
//  Ersetze sie durch die echte Karte (Nummer, Name, Preis, Kategorie).
//
//  tags (optional): "veggie", "scharf", "beliebt"
//  desc (optional): kurze Beschreibung / Zutaten
// =====================================================================

window.IMBISS = {
  name: "Asia Imbiss Le",
  phone: "+490000000000", // <-- echte Telefonnummer eintragen (mit Vorwahl, ohne Leerzeichen)
  phoneDisplay: "Nummer fehlt noch",
};

window.MENU = [
  // BEISPIELE – bitte ersetzen
  { nr: "1",  name: "Beispiel: Frühlingsrollen", price: 3.5,  cat: "Vorspeisen", tags: ["veggie"], desc: "Platzhalter" },
  { nr: "2",  name: "Beispiel: Wan-Tan-Suppe",   price: 4.0,  cat: "Suppen",     tags: [],         desc: "Platzhalter" },
  { nr: "10", name: "Beispiel: Gebratene Nudeln mit Hühnerfleisch", price: 8.5, cat: "Nudeln", tags: ["beliebt"], desc: "Platzhalter" },
  { nr: "11", name: "Beispiel: Gebratene Nudeln mit Gemüse",       price: 7.5, cat: "Nudeln", tags: ["veggie"],  desc: "Platzhalter" },
  { nr: "20", name: "Beispiel: Ente knusprig mit Reis",             price: 11.0, cat: "Ente",  tags: ["beliebt"], desc: "Platzhalter" },
  { nr: "30", name: "Beispiel: Rindfleisch Szechuan",               price: 10.0, cat: "Rind",  tags: ["scharf"],  desc: "Platzhalter" },
];
