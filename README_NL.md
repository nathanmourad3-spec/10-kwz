# 10_KWZ V9 — PWA (iPhone beginscherm-app)

Dit is een Progressive Web App. Na publicatie op een HTTPS-webadres kun je hem op je iPhone via Safari aan het beginscherm toevoegen.

## Bestanden
- `index.html`, `style.css`, `app.js`: app-interface
- `manifest.webmanifest`: naam, startscherm en app-iconen
- `sw.js`: offline cache voor de basisinterface
- `icons/`: app-iconen

## Belangrijk: nog niet online
Deze ZIP is de websitebroncode, niet zelf een installeerbare app. De site moet eerst op HTTPS-hosting worden gepubliceerd. Daarna:
1. Open de HTTPS-link in Safari op je iPhone.
2. Tik op de Deel-knop.
3. Kies 'Zet op beginscherm'.
4. Pas de naam aan naar `10_KWZ` en tik op Voeg toe.

## Wat werkt?
- Responsieve zwart/crimson interface
- Navigatie tussen Home, AI Chat, Tools en Settings
- Lokale demo-chat
- PWA manifest, iconen en offline caching

## Wat nog niet werkt?
- Echte AI-antwoorden (server/backend + API-sleutel nodig)
- Echte VPN (PWA kan geen iPhone-brede WireGuard-tunnel activeren)
- Cloudaccounts, synchronisatie en opslag
- De ZIP is nog niet gehost. Een HTTPS-host is vereist voor installatie als PWA.
