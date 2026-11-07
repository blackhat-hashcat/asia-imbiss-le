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

Ohne Server und ohne Login: Die Gruppenbestellung steckt komplett im Link. Die App lässt sich auf den Homescreen legen (PWA).

## Dateien
- `menu.js`: Speisekarte, Telefon, Adresse und Öffnungszeiten. Preise ändern sich? Nur hier anpassen.
- `karte/`: Original-Scans des Flyers (Quelle aller Daten)
- `img/`: Fotos für die Startseite
- `index.html`: die App

## Hosting (GitHub Pages)
1. **Settings → Pages → Source: „GitHub Actions“**
2. Jeder Push veröffentlicht automatisch über `.github/workflows/pages.yml`.

Lokal testen: `python3 -m http.server` und dann http://localhost:8000 öffnen.
