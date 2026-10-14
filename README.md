# ⚔️ Mroczny Rycerz

Platformówka 2D w stylu Super Mario z motywem **dark fantasy**. Rycerz, szkielety, zamek, lochy, lawa w przepaściach i boss na końcu — wszystko w jednym pliku HTML (canvas, bez bibliotek).

## Jak grać

| Klawisz | Akcja |
|---|---|
| ← → / A D | ruch |
| Spacja / W / ↑ | skok |
| X / J / Z | cios mieczem |
| Spacja / Enter | start / jeszcze raz |
| F11 / Esc | pełny ekran (wersja .exe) |

Skacz na szkielety albo je tnij mieczem, uderzaj w bloki **?** od dołu, zbieraj dusze, pokonaj **Władcę Kości** i wejdź w portal.

## Uruchomienie

**W przeglądarce:** otwórz `index.html` (dwuklik, nic nie trzeba instalować).

**Jako aplikacja (Electron):**
```bash
npm install
npm start
```

**Budowanie wersji na Windows (.exe):**
```bash
npm install
npm run build:win
```
Gotowa gra pojawi się w `dist/MrocznyRycerz-win32-x64/` (uruchom `MrocznyRycerz.exe`).

## Struktura

- `index.html` — cała gra (logika, grafika rysowana kodem)
- `main.js` — okno Electrona (start w pełnym ekranie)
- `package.json` — skrypty uruchamiania i budowania
