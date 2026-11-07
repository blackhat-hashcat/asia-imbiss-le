# 🥢 Asia Imbiss Le – Gruppenbestellung

Kleine Web-App, mit der unsere Gruppe in der Pause zusammen aussucht, was wir beim Asia Imbiss Le vorbestellen. Einer ruft an und liest nur noch die Nummern vor.

## Funktionen
- **Karte**: Suche nach Nummer, Name oder Zutat, Kategorien, Filter (Veggie, Scharf, Beliebt, ⭐ Favoriten)
- **Gruppenbestellung ohne Server und ohne Login**: Die ganze Bestellung steckt im Link. Jeder packt seins dazu und teilt den neuen Link in der Gruppe weiter
- **Sonderwünsche** pro Gericht (z. B. „ohne Zwiebeln")
- **📞 Anrufen**: Ein Tipp ruft beim Imbiss an. Daneben steht die zusammengefasste Liste nach Nummern sortiert in großer Schrift zum Vorlesen
- **Wer zahlt was**: Betrag pro Person, als Text kopierbar für WhatsApp
- **🎲 Was essen?**: Zufallsauswahl, berücksichtigt Filter, Budget und Favoriten. Dazu „Nochmal wie letztes Mal"
- Lässt sich als App auf den Homescreen legen (PWA), Dark Mode

## Speisekarte eintragen
Alles steht in **`menu.js`**: Telefonnummer und Gerichte (`nr`, `name`, `price`, `cat`, optional `tags`, `desc`).
Solange dort noch Beispielgerichte stehen, zeigt die App oben einen Hinweis.

## Hosting mit GitHub Pages
1. Repo → **Settings → Pages → Build and deployment → Source: „GitHub Actions"**
2. Der Workflow `.github/workflows/pages.yml` veröffentlicht bei jedem Push automatisch.
3. Die App liegt dann unter `https://blackhat-hashcat.github.io/asia-imbiss-le/`.

Lokal testen: `python3 -m http.server` und dann http://localhost:8000 öffnen.
