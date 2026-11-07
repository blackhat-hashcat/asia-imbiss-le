// =====================================================================
//  SPEISEKARTE – Asia Imbiss Le, Hechinger Str. 2, 70567 Stuttgart
//  Quelle: karte/seite-1.jpg und karte/seite-2.jpg (Flyer, Stand 11/2026)
// =====================================================================
//  Felder:
//    nr     Bestellnummer (so wie man sie am Telefon sagt)
//    name   Gericht
//    desc   Zusatz / Beschreibung (optional)
//    price  Preis in Euro
//    cat    Kategorie
//    hot    Schärfe laut Karte (Anzahl Chilischoten, 0 = nicht scharf)
//    veg    true = vegetarisch
//    al     Allergene/Zusatzstoffe laut Karte (siehe ALLERGENE unten)
//    opts   (optional) Auswahl, die beim Hinzufügen abgefragt wird
//    sayName (optional) true = am Telefon den Namen statt der Nummer sagen
// =====================================================================

window.IMBISS = {
  name: "Asia Imbiss Le",
  phone: "+4971172248733",
  phoneDisplay: "0711 - 72248733",
  address: "Hechinger Str. 2, 70567 Stuttgart",
  street: "Hechinger Str. 2",
  city: "70567 Stuttgart",
  // Öffnungszeiten: 0 = Sonntag … 6 = Samstag; Zeiten als "HH:MM-HH:MM"
  hours: {
    0: ["13:00-21:00"],
    1: ["11:00-14:00", "17:30-21:00"],
    2: ["11:00-14:00", "17:30-21:00"],
    3: ["11:00-14:00", "17:30-21:00"],
    4: ["11:00-14:00", "17:30-21:00"],
    5: ["11:00-14:00", "17:30-21:00"],
    6: [], // Samstag Ruhetag
  },
  hoursText: [
    ["Mo – Fr", "11:00 – 14:00 & 17:30 – 21:00"],
    ["Samstag", "Ruhetag"],
    ["So & Feiertag", "13:00 – 21:00"],
  ],
};

window.CATEGORIES = [
  { id: "Suppen", icon: "🍜" },
  { id: "Vorspeisen", icon: "🥟" },
  { id: "Gebratener Reis", icon: "🍚" },
  { id: "Gebratene Nudeln", icon: "🍝" },
  { id: "Nudelbox", icon: "🥡" },
  { id: "Hühnerfleisch", icon: "🐔" },
  { id: "Rindfleisch", icon: "🐄" },
  { id: "Ente", icon: "🦆" },
  { id: "Schweinefleisch", icon: "🐖" },
  { id: "Vegetarisch", icon: "🥦" },
  { id: "Meeresfrüchte", icon: "🦐" },
  { id: "Spezialitäten", icon: "⭐" },
  { id: "Beilagen", icon: "🥢" },
  { id: "Desserts", icon: "🍌" },
];

window.ALLERGENE = {
  "1": "Glutenhaltiges Getreide", "1a": "Weizen", "1b": "Roggen", "1c": "Gerste",
  "2": "Krebstiere (Garnelen, Krabben)", "3": "Eier", "4": "Fisch", "5": "Erdnüsse",
  "6": "Soja", "7": "Milch", "8": "Schalenfrüchte", "9": "Sellerie", "10": "Senf",
  "11": "Sesam", "12": "Schwefeldioxid", "13": "Lupinen", "14": "Weichtiere",
  A: "mit Farbstoff", B: "mit Konservierungsstoff", C: "mit Antioxidationsmittel",
  D: "mit Geschmacksverstärker", E: "geschwefelt", F: "geschwärzt", G: "mit Phosphat",
  H: "mit Milcheiweiß", I: "koffeinhaltig", J: "chininhaltig", K: "gewachst",
  L: "mit Taurin", M: "Phenylalaninquelle", N: "Süßungsmittel",
};

const S = "Suppen", V = "Vorspeisen", R = "Gebratener Reis", N = "Gebratene Nudeln",
  HU = "Hühnerfleisch", RI = "Rindfleisch", EN = "Ente", SW = "Schweinefleisch",
  VE = "Vegetarisch", ME = "Meeresfrüchte", SP = "Spezialitäten", BE = "Beilagen", DE = "Desserts", NB = "Nudelbox";

window.MENU = [
  // ---- Suppen ----
  { nr: "V01", name: "Peking Suppe", desc: "süßsauer-scharf", price: 3.10, cat: S, hot: 1, al: "1a,6,D" },
  { nr: "V02", name: "Gemüse Suppe", price: 3.10, cat: S, veg: true, al: "1a,6,D" },
  { nr: "V03", name: "Wantan Suppe", desc: "Teigtaschen mit Hühnerfleischfüllung", price: 3.70, cat: S, al: "1a,2,6,D" },
  { nr: "V04", name: "Tom Yam Gai", desc: "Scharfe Hühnersuppe mit Kokosmilch", price: 4.00, cat: S, hot: 2, al: "1a,7,D" },
  { nr: "V05", name: "Tom Yam Gung", desc: "Scharfe Garnelensuppe", price: 4.50, cat: S, hot: 2, al: "1a,2,D" },
  { nr: "V06", name: "Currysuppe mit Rindfleisch", price: 4.10, cat: S, hot: 1, al: "1a,7,D" },
  { nr: "V07", name: "Suppe mit Gemüse und Hühnerfleisch", price: 3.50, cat: S, al: "1a,6,D" },
  { nr: "V08", name: "Hühnersuppe mit Glasnudeln", price: 3.90, cat: S, al: "1a,6,D" },

  // ---- Vorspeisen ----
  { nr: "V11", name: "Krabbenchips", price: 2.50, cat: V, al: "1a,2,D" },
  { nr: "V12", name: "Mini Frühlingsrollen", desc: "5 Stück", price: 3.00, cat: V, al: "1a,6,D" },
  { nr: "V13", name: "Vietnamesische Frühlingsrolle", desc: "Schweinefleisch, groß", price: 3.60, cat: V, al: "1a,6,D" },
  { nr: "V14", name: "2 Satee-Spieße", price: 4.40, cat: V, al: "1a,5,D" },
  { nr: "V15", name: "Gebackene Wantan", desc: "Hühnerfleisch", price: 3.30, cat: V, al: "1a,2,6,D" },
  { nr: "V16", name: "Gemischter Salat", price: 3.50, cat: V, veg: true, al: "6,D" },
  { nr: "V17", name: "Salat mit Hühnerfleisch", price: 4.50, cat: V, al: "6,D" },

  // ---- Gebratener Reis ----
  { nr: "H01", name: "Gebratener Reis mit Gemüse und Eier", price: 7.60, cat: R, veg: true, al: "1a,3,6,A,D" },
  { nr: "H02", name: "Gebratener Reis mit Hühnerfleisch und Gemüse", price: 8.80, cat: R, al: "1a,3,6,A,D" },
  { nr: "H03", name: "Gebratener Reis mit Rindfleisch und Gemüse", price: 9.00, cat: R, al: "1a,3,6,A,D" },
  { nr: "H04", name: "Gebratener Reis mit Garnelen und Gemüse", price: 10.60, cat: R, al: "1a,2,3,6,A,D" },
  { nr: "H05", name: "Nasi Goreng", desc: "mit Hühnerfleisch, Schweinefleisch, Krabben", price: 9.60, cat: R, hot: 1, al: "1a,2,3,6,A,D" },
  { nr: "H06", name: "Gebratener Reis mit paniertem Hühnerfilet", desc: "Gemüse, dazu Hoisin Sauce", price: 9.90, cat: R, al: "1a,3,6,A,D" },
  { nr: "H07", name: "Gebratener Reis mit knuspriger Ente", desc: "Gemüse, dazu Hoisin Sauce", price: 10.70, cat: R, al: "1a,3,6,A,D" },
  { nr: "H08", name: "Gebratener Reis mit knuspriger Ente", desc: "Hühnerfilet und Gemüse", price: 12.00, cat: R, al: "1a,3,6,A,D" },

  // ---- Gebratene Nudeln ----
  { nr: "H11", name: "Gebratene Nudeln mit Gemüse und Eier", price: 7.60, cat: N, veg: true, al: "1a,3,6,A,D" },
  { nr: "H12", name: "Gebratene Nudeln mit Hühnerfleisch und Gemüse", price: 8.80, cat: N, al: "1a,3,6,A,D" },
  { nr: "H13", name: "Gebratene Nudeln mit Rindfleisch und Gemüse", price: 9.00, cat: N, al: "1a,3,6,A,D" },
  { nr: "H14", name: "Gebratene Nudeln mit Garnelen und Gemüse", price: 10.60, cat: N, al: "1a,2,3,6,A,D" },
  { nr: "H15", name: "Bami Goreng", desc: "Hühnerfleisch, Schweinefleisch, Krabben", price: 9.60, cat: N, hot: 1, al: "1a,2,3,6,A,D" },
  { nr: "H16", name: "Gebratene Nudeln mit paniertem Hühnerfilet", desc: "Gemüse, dazu Hoisin Sauce", price: 9.90, cat: N, al: "1a,3,6,A,D" },
  { nr: "H17", name: "Gebratene Nudeln mit knuspriger Ente", desc: "Gemüse, dazu Hoisin Sauce", price: 10.70, cat: N, al: "1a,3,6,A,D" },
  { nr: "H18", name: "Gebratene Nudeln mit knuspriger Ente", desc: "Hühnerfilet und Gemüse", price: 12.00, cat: N, al: "1a,3,6,A,D" },
  { nr: "H19", name: "Gebratene Nudeln mit Hummerkrabben", desc: "Hühnerfleisch, Rindfleisch und Gemüse", price: 12.60, cat: N, hot: 1, al: "1a,3,6,A,D" },

  // ---- Nudelbox ----
  { nr: "Nudelbox Gemüse", name: "Nudelbox mit Gemüse", price: 5.00, cat: NB, veg: true, al: "1a,6,D", sayName: true },
  { nr: "Nudelbox Huhn", name: "Nudelbox mit paniertem Hühnerfleisch", price: 5.50, cat: NB, al: "1a,6,D", sayName: true },
  { nr: "Nudelbox Frühlingsrollen", name: "Nudelbox mit Mini-Frühlingsrollen", price: 5.50, cat: NB, al: "1a,6,D", sayName: true },
  { nr: "Nudelbox Huhn+Rollen", name: "Nudelbox mit Hühnerfleisch und Mini-Frühlingsrollen", price: 6.50, cat: NB, al: "1a,6,D", sayName: true },

  // ---- Hühnerfleisch ----
  { nr: "H21", name: "Hühnerfleisch Chopsuey", desc: "mit verschiedenem Gemüse", price: 8.80, cat: HU, al: "1a,6,A,D" },
  { nr: "H22", name: "Hühnerfleisch mit Gemüse in Curry Sauce", price: 8.90, cat: HU, hot: 1, al: "1a,7,A,D" },
  { nr: "H23", name: "Hühnerfleisch Rot Curry", desc: "mit Kokosmilch und Gemüse", price: 9.30, cat: HU, hot: 3, al: "1a,7,A,D" },
  { nr: "H24", name: "Hühnerfleisch mit Gemüse nach Sichuaner Art", price: 8.90, cat: HU, hot: 6, al: "1a,6,A,D" },
  { nr: "H25", name: "Hühnerbrust mit Gemüse", desc: "Morcheln, Sojasprossen, Lauch", price: 8.80, cat: HU, al: "1a,6,A,D" },
  { nr: "H26", name: "Hühnerfleisch Kungpao", desc: "scharf mit Hoisin Sauce, Gemüse", price: 8.90, cat: HU, hot: 2, al: "1a,5,6,8,A,D" },
  { nr: "H27", name: "Knuspriges Hühnchen mit Ananas", desc: "in süß-sauer Sauce", price: 9.30, cat: HU, al: "1a,6,D" },
  { nr: "H28", name: "Knuspriges Hühnchen mit Knoblauch und Gemüse", desc: "Hoisin Sauce", price: 9.30, cat: HU, al: "1a,6,A,D" },
  { nr: "H29", name: "Paniertes Hühnerfleisch", desc: "mit süß-sauer Sauce", price: 9.30, cat: HU, al: "1a,6,D" },

  // ---- Rindfleisch ----
  { nr: "H31", name: "Rindfleisch Chopsuey", desc: "mit verschiedenem Gemüse", price: 9.70, cat: RI, al: "1a,6,A,D" },
  { nr: "H32", name: "Rindfleisch mit Zwiebeln und Lauch", price: 9.90, cat: RI, al: "1a,6,A,D" },
  { nr: "H33", name: "Rindfleisch mit Gemüse nach Sichuaner Art", price: 10.00, cat: RI, hot: 6, al: "1a,6,A,D" },
  { nr: "H34", name: "Rindfleisch Kungpao Art", desc: "scharf mit Hoisin Sauce, Gemüse", price: 9.90, cat: RI, hot: 2, al: "1a,5,6,8,A" },
  { nr: "H35", name: "Rindfleisch mit Gemüse in Curry Sauce", price: 9.90, cat: RI, hot: 1, al: "1a,7,A,D" },
  { nr: "H36", name: "Rindfleisch Rot Curry", desc: "mit Kokosmilch und Gemüse", price: 10.20, cat: RI, hot: 3, al: "1a,7,A,D" },
  { nr: "H37", name: "Gebratenes Rindfleisch mit Broccoli", price: 9.90, cat: RI, al: "1a,6,A,D" },
  { nr: "H38", name: "Gebratenes Rindfleisch", desc: "mit Morcheln, Lauch und Gemüse", price: 9.70, cat: RI, al: "1a,6,A,D" },
  { nr: "H39", name: "Gebratenes Rindfleisch mit Paprika und Lauch", price: 9.90, cat: RI, hot: 1, al: "1a,6,A,D" },

  // ---- Ente ----
  { nr: "H41", name: "Knusprige Ente", desc: "mit versch. Gemüse und Hoisin Sauce", price: 10.90, cat: EN, al: "1a,6,A,D" },
  { nr: "H42", name: "Knusprige Ente auf Sichuaner Art", price: 10.90, cat: EN, hot: 6, al: "1a,6,A,D" },
  { nr: "H43", name: "Knusprige Ente mit Curry Sauce und Gemüse", price: 10.90, cat: EN, hot: 1, al: "1a,7,A,D" },
  { nr: "H44", name: "Knusprige Ente mit Rot Curry Sauce und Gemüse", price: 11.20, cat: EN, hot: 3, al: "1a,7,A,D" },
  { nr: "H45", name: "Knusprige Ente auf Kungpao Art", price: 10.90, cat: EN, hot: 2, al: "1a,5,6,8,A,D" },
  { nr: "H46", name: "Knusprige Ente mit Ananas", desc: "in süß-sauer Sauce", price: 10.90, cat: EN, al: "1a,6,D" },
  { nr: "H47", name: "Knusprige Ente auf Kantoner Art", desc: "mit Gemüse (süß-sauer, scharf)", price: 10.90, cat: EN, hot: 1, al: "1a,6,D" },
  { nr: "H48", name: "Knusprige Ente mit Broccoli", desc: "Hoisin Sauce", price: 10.90, cat: EN, al: "1a,6,A,D" },

  // ---- Schweinefleisch ----
  { nr: "H51", name: "Schweinefleisch mit verschiedenem Gemüse", price: 8.60, cat: SW, al: "1a,6,A,D" },
  { nr: "H52", name: "Schweinefleisch Kungpao Art", desc: "scharf mit Hoisin Sauce, Gemüse", price: 8.80, cat: SW, hot: 2, al: "1a,5,6,8,A,D" },
  { nr: "H53", name: "Schweinefleisch mit Rot Curry Soße und Gemüse", price: 9.30, cat: SW, hot: 2, al: "1a,7,A,D" },
  { nr: "H54", name: "Schweinefleisch mit Morcheln, Lauch und Gemüse", price: 8.80, cat: SW, al: "1a,6,A,D" },

  // ---- Vegetarisch ----
  { nr: "H61", name: "Chopsuey mit verschiedenem Gemüse", price: 8.30, cat: VE, veg: true, al: "1a,6,A,D" },
  { nr: "H62", name: "Gebratene Sojasprossen", desc: "mit Bambus, Glasnudeln", price: 8.30, cat: VE, veg: true, al: "1a,6,A,D" },
  { nr: "H63", name: "Gemischtes Gemüse mit Rot Curry", price: 8.80, cat: VE, veg: true, hot: 3, al: "1a,7,A,D" },
  { nr: "H64", name: "Gemischtes Gemüse mit Tofu und Glasnudeln", price: 8.80, cat: VE, veg: true, al: "1a,6,A,D" },

  // ---- Meeresfrüchte ----
  { nr: "H71", name: "Gebratene Hummerkrabben nach Kungpao Art", price: 12.40, cat: ME, hot: 3, al: "1a,2,5,6,A,D" },
  { nr: "H72", name: "Gebratene Hummerkrabben nach Sichuaner Art", price: 12.40, cat: ME, hot: 6, al: "1a,2,6,A,D" },
  { nr: "H73", name: "Fisch Chopsuey", desc: "mit verschiedenem Gemüse", price: 9.90, cat: ME, al: "1a,4,A,D" },
  { nr: "H74", name: "Fisch mit Gemüse in Curry Sauce", price: 10.20, cat: ME, al: "1a,4,7,A,D" },
  { nr: "H75", name: "Gebratener Fisch in süß-sauer Sauce", price: 9.90, cat: ME, hot: 2, al: "1a,4,D" },
  { nr: "H76", name: "Gebratene Garnelen mit Tofu", price: 11.70, cat: ME, al: "1a,2,6,A,D" },

  // ---- Spezialitäten ----
  { nr: "S01", name: "Knusprige Ente und Hühnerfleisch", desc: "mit Gemüse (Hoisin Soße)", price: 11.50, cat: SP, al: "1a,6,A,D" },
  { nr: "S02", name: "Knusprige Ente und Hummerkrabben", desc: "mit Gemüse (süß-sauer Soße)", price: 12.20, cat: SP, al: "1a,2,6,D" },
  { nr: "S03", name: "Gebratenes Entenfleisch mit spezieller Soße", desc: "nach Art des Hauses (süß-scharf)", price: 11.70, cat: SP, hot: 1, al: "6,A,D" },
  { nr: "S04", name: "Gebratenes Hühner-, Rind- und Schweinefleisch", desc: "mit verschiedenem Gemüse und Curry Soße", price: 11.20, cat: SP, hot: 2, al: "7,A,D" },
  { nr: "S05", name: "Gebratenes Hühner- und Rindfleisch, Hummerkrabben", desc: "und verschiedenes Gemüse", price: 11.90, cat: SP, al: "2,6,A,D" },
  { nr: "S06", name: "Gebratene Hummerkrabben mit Gemüse in Rot Curry", price: 12.40, cat: SP, hot: 3, al: "2,7,A,D" },
  { nr: "S07", name: "Panierte Hummerkrabben", desc: "mit süß-sauer Soße", price: 12.70, cat: SP, al: "1a,2,6,D" },
  { nr: "S08", name: "Gebratene Krabben mit gemischtem Gemüse", price: 10.70, cat: SP, al: "2,6,A,D" },
  { nr: "S09", name: "Acht-Schätze", desc: "gebratenes Hühner-, Rind-, Schweinefleisch und Krabben mit pikanter Soße", price: 11.70, cat: SP, hot: 3, al: "2,6,A,D" },
  { nr: "S10", name: "Knusprige Ente mit Acht-Schätze", desc: "Schwein, Huhn, Rind und Krabben", price: 12.70, cat: SP, hot: 2, al: "1a,2,6,8,A,D" },
  { nr: "S11", name: "Gebratenes Rinderhackfleisch mit Tofu", desc: "nach Sichuan-Art (Pfeffer und Chili-Soße)", price: 11.90, cat: SP, hot: 6, al: "6,A,D" },
  { nr: "S12", name: "Gebratenes Rindfleisch", desc: "mit Sojasprossen, Morcheln, Bambussprossen und Glasnudeln", price: 11.90, cat: SP, al: "6,A,D" },
  { nr: "S13", name: "Paniertes Hühnerfleisch mit Lychees", desc: "und Ananas in süß-sauer Soße", price: 10.30, cat: SP, al: "2,6,D" },
  { nr: "S14", name: "Paniertes Hühnerfleisch", desc: "in süß-sauer scharf Sauce", price: 9.90, cat: SP, hot: 2, al: "1a,D" },

  // ---- Beilagen (nur zusammen mit Hauptspeise) ----
  { nr: "B01", name: "Gebratener Reis", desc: "nur mit Hauptspeise", price: 4.50, cat: BE, veg: true, al: "1a,3,6,A,D" },
  { nr: "B02", name: "Gebratene Nudeln", desc: "nur mit Hauptspeise", price: 4.50, cat: BE, veg: true, al: "1a,3,6,A,D" },
  { nr: "B03", name: "Reis", desc: "nur mit Hauptspeise", price: 2.00, cat: BE, veg: true, al: "" },
  { nr: "B05", name: "Sauce", desc: "nur mit Hauptspeise", price: 2.00, cat: BE, veg: true, al: "1a,A", opts: ["Curry (7)", "süß-sauer", "Erdnuss (5)", "pikant"], optAl: { "Curry (7)": ["7"], "Erdnuss (5)": ["5"] } },

  // ---- Desserts ----
  { nr: "D01", name: "Gebackene Banane mit Honig", price: 3.30, cat: DE, veg: true, al: "1a,A" },
  { nr: "D02", name: "Gebackene Ananas mit Honig", price: 3.30, cat: DE, veg: true, al: "1a,A" },
  { nr: "D03", name: "Lychees (Litschi)", price: 3.80, cat: DE, veg: true, al: "A,B" },
  { nr: "D04", name: "Gebackene Lychees mit Honig", price: 3.80, cat: DE, veg: true, al: "1a,A,B" },
];
