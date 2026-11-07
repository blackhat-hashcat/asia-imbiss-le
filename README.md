# 🥢 Asia Imbiss Le · Gruppenbestellung

Web-App für unsere Mittagspause: Jeder sucht sich beim **Asia Imbiss Le** (Hechinger Str. 2, 70567 Stuttgart, ☎ 0711 72248733) was aus, wir schicken einen Link durch die Gruppe, einer ruft an und liest nur noch die Nummern vor. Bis wir da sind, ist alles fertig.

**Live:** https://blackhat-hashcat.github.io/asia-imbiss-le/

## Funktionen
| Tab | Was es kann |
|---|---|
| 🍜 **Karte** | Alle 98 Gerichte vom Flyer. Suche nach Nummer (`24` findet H24) oder Stichwort (`ente curry`). Filter: Favoriten, vegetarisch, nicht scharf, scharf, richtig scharf, ohne Erdnuss, ohne Meeresfrüchte, ohne Milch, unter 9 €. Kategorien zum Antippen. „Die Gruppe nimmt schon“ zeigt, was die anderen gewählt haben. Antippen öffnet Details, Sonderwunsch, Menge und Allergene. |
| 🎲 **Würfeln** | Zufallsgericht mit Filtern, Kategorie und Budget. Oder „Nochmal wie letztes Mal“. |
| 🧾 **Bestellung** | Alle Personen mit Gerichten und Betrag. Link teilen oder direkt per WhatsApp. „Ich nehm dasselbe“ übernimmt die Bestellung eines anderen. Warnt, wenn der Imbiss zu hat oder bald schließt. |
| 📞 **Anrufen** | Ein Tipp ruft an. Die Liste ist zusammengefasst und nach Nummer sortiert, beim Vorlesen hakt man Zeilen ab. Dazu Abholname, „Wer zahlt was“ und Text zum Kopieren. |
| 📍 **Infos** | Live-Status geöffnet/geschlossen, Öffnungszeiten, Google-Maps-Karte, Route starten, Original-Flyer zum Zoomen, Allergen-Legende. |

**Zwei Modi:**
- **Live-Gruppe** (empfohlen, braucht einmalig Firebase, siehe unten): ein fester Gruppenlink, alle sehen Bestellungen sofort, dazu ein Bestellschluss-Countdown.
- **Link-Modus** (ohne Einrichtung): Die Bestellung steckt im Link, jeder teilt den neuesten Link weiter.

**Bezahlen:** „Jeder zahlt selbst“ oder „Einer legt aus“. Wer auslegt, trägt einmal seinen PayPal.me-Namen ein, die anderen bekommen einen PayPal-Knopf mit ihrem Betrag und haken „bezahlt“ ab. Die App lässt sich auf den Homescreen legen (PWA).

## Live-Gruppe einrichten (einmalig, ca. 5 Minuten, kostenlos)
1. https://console.firebase.google.com öffnen und mit einem Google-Konto anmelden
2. **Projekt erstellen**, Name z. B. `asia-le`, Google Analytics **aus**, dann **Erstellen**
3. Links im Menü **Build → Realtime Database** öffnen, dann **Datenbank erstellen**
   - Standort: **Belgien (europe-west1)**
   - **Im gesperrten Modus starten**, dann **Aktivieren**
4. Oben den Tab **Regeln** öffnen, alles ersetzen durch den Block unten und **Veröffentlichen**
5. Links oben ⚙️ → **Projekteinstellungen** → unten bei „Meine Apps“ das Web-Symbol **`</>`**
   - App-Name `asia-le`, Firebase Hosting **nicht** anhaken, dann **App registrieren**
   - Es erscheint ein Code mit `const firebaseConfig = { ... }`
6. Diesen `firebaseConfig`-Block in `config.js` bei `window.FIREBASE_CONFIG = { ... }` einsetzen (oder Claude schicken)

Regeln (Schritt 4):
```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "groups": {
      "$gid": {
        ".read": "$gid.matches(/^le-[a-z0-9]{6,20}$/)",
        ".write": "$gid.matches(/^le-[a-z0-9]{6,20}$/)",
        "round": {
          "people": {
            "$p": { ".validate": "newData.child('n').isString() && newData.child('n').val().length <= 20" }
          }
        }
      }
    }
  }
}
```
Die Firebase-Werte in `config.js` sind nicht geheim. Wer den Gruppenlink kennt, kann in der Gruppe mitbestellen, also den Link nur in eurer Gruppe teilen.

Testen ohne Firebase: `index.html?mock` simuliert die Live-Gruppe lokal im Browser.

## Dateien
- `config.js`: Firebase-Zugangsdaten für die Live-Gruppe (leer = Link-Modus)
- `menu.js`: Speisekarte, Telefon, Adresse und Öffnungszeiten. Preise ändern sich? Nur hier anpassen.
- `karte/`: Original-Scans des Flyers (`seite-*.jpg`) und zugeschnittene Spalten für die App (`spalte-1…6.jpg`)
- `img/`: Fotos für die Startseite
- `index.html`: die App

## Hosting (GitHub Pages)
1. **Settings → Pages → Source: „GitHub Actions“**
2. Jeder Push veröffentlicht automatisch über `.github/workflows/pages.yml`.

Lokal testen: `python3 -m http.server` und dann http://localhost:8000 öffnen.
