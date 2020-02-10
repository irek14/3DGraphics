# 3DGraphics
Poniższa aplikacja stanowi projekt stworzony w ramach czwartego laboratorium z przedmiotu Grafika Komputerowa 1. Aplikacja ta umożliwa przyjrzenie się kilku charakterystycznym aspektom grafiki trójwymiarowej. Projekt został wykonany w technologii WebGL z wykorzystaniem biblioteki three.js.

## Funckjonalność
Na przykładzie aplikacji możemy zaaobserwować takie efekty grafiki 3D jak:
* trzy rodzaje cieniowania powierzchni 
  * cieniowanie według modelu Phonga
   * cieniowanie według modelu Gourauda
   * cieniowania płaskiego
* trzy położenia kamery
  * kamera nieruchoma na środku sceny
  * kamera śledząca obiekt
  * kamera znajdują się nad obiektem i poruszająca się wraz z nim
* poruszanie obiektem, a także zmienianie kierunku padającego światła
* efekt źródła światła ruchomego, a także stałego
* efekt mgły
* efekt dnia i nocy

## Użycie
Aby uruchomić aplikacje należy skorzystać z jednej z dwóch opcji:
* odblokowanie polityki CORS w przeglądarce internetowej po uruchomieniu pliku głównego z rozszerzeniem .html
* uruchomienie aplikacji przy pomocy lokalnego serwera (na przykład z wykorzystaniem NodeJS i komendy http-server . -p 8000)
Sterowanie aplikacją odbywa się przy pomocy następującej listy klawiszy:
* Kamery:
      <ul>
        <li>1: Kamera na obiekcie</li>
        <li>2: Górna, nieruchoma kamera</li>
        <li>3: Górna kamera śledząca obiekt</li>
      </ul>
      Cieniowanie:<br />
      <ul>
        <li>7: Cieniowanie Phonga</li>
        <li>8: Cieniowanie Gourauda</li>
        <li>9: Cieniowanie płaskie</li>
      </ul>
* Ruch obiektu:
      <ul>
        <li>W/S: Przesuń do przodu/tyłu</li>
        <li>A/D: Obróć w lewo/w prawo</li>
        <li>Q/E: Przesuń w lewo/prawo</li>
        <li>R/F: Obróć góra/dół</li>
      </ul>
* Ruch źródła światła:
      <ul>
        <li>U/J: Przesuń do przodu/tyłu</li>
        <li>H/K: Obróć w lewo/w prawo</li>
        <li>Y/I: Przesuń w lewo/prawo</li>
        <li>O/L: Obróć góra/dół</li>
      </ul>
* Pozostałe:
      <ul>
        <li>5: Mgła włącz/wyłącz</li>
        <li>6: Ruchome światło nad obiektem włącz/wyłącz</li>
        <li>N: Tryb nocny włącz/wyłącz</li>
      </ul>
      
## Autor
[Ireneusz Stanicki](https://github.com/irek14), student Informatyki na wydziale Matematyki i Nauk Informacyjnych Politechniki Warszawskiej <br/>
Projekt oparty na przykładach kodu źródłowego przykładów ze strony three.js, a także tutorialu dla grafiki 3D z wykorzystaniem three.js od podstaw autorstwa [Lee Stemkowskiego](https://github.com/stemkoski)
