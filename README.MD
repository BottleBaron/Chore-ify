Chorify. 

För att köra repot: 
npm install 
npm start


CI flödet. 
npm run make-pretty - Detta scriptet korrigerar alla prettier problem. 
npm run style:all - Detta scriptet kollar så att alla regler för ES-lint och prettier är uppfyllda. Denna körs i CI-flödet. 


Så innan ni gör en pullrequest så se till att ni kört båda scripten och att style:all inte hittar några fel. 
    
Avklarade krav. 

| Krav                                                                                                                                               | Gjorda |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| En logga, splashscreen och appikon ska designas och användas. \*                                                                                   | x      |
| Applikationen ska byggas med RN, Expo & TS. \*                                                                                                     | x      |
| Designen av appen ska utgå ifrån befintliga skisser, undantag kan ges men ska diskuteras med produktägare, godkännas och dokumenteras. \*          | x      |
| Ett hushåll ska ha ett namn och en genererad (enkel) kod så andra kan gå med i hushållet,namnet ska gå att ändra. \*                               | x      |
| En användare ska kunna registrera och logga in sig. \*                                                                                             | x      |
| En användare ska kunna skapa ett nytt hushåll. \*                                                                                                  | x      |
| En användare ska kunna gå med i ett hushåll genom att ange hushållets kod. \*                                                                      | x      |
| En användare ska kunna ange sitt namn. \*                                                                                                          | x      |
| En användare ska kunna välja en avatar (emoji-djur + färg) från en fördefinierad lista. \*                                                         | x      |
| Valda avatarer ska inte kunna väljas av andra användare i hushållet. \*                                                                            | x      |
| Avataren ska användas i appen för att visa vad användaren har gjort. \*                                                                            | x      |
| En ägare ska kunna lägga till sysslor att göra i hemmet. \*                                                                                        | x      |
| En syssla ska ha ett namn, en beskrivning (text), hur ofta den ska göras (dagar), och en<br>vikt som beskriver hur energikrävande den är. \*       | x      |
| En ägare ska kunna redigera en syssla. \*                                                                                                          | x      |
| Alla sysslor ska listas i en dagsvy och ge en översikt kring vad som behöver göras. \*                                                             | x      |
| Utöver sysslans namn ska även vem/vilka som har gjort sysslan visas, hur många dagar<br>sedan sysslan gjordes senast samt om den är försenad. \*   | x      |
| När en användare väljer en syssla ska beskrivningen av sysslan visas och det ska även<br>med ett enkelt tryck gå att markera sysslan som gjord. \* | x      |
| En användare ska kunna se fördelningen av gjorda sysslor mellan användarna i sitt<br>hushåll. \*                                                   | x      |
| Varje statistikvy ska visa den totala fördelningen (inräknat vikterna för sysslorna) samt<br>fördelning av varje enskild syssla. \*                | x      |
| Det ska finnas en statistikvy över ”nuvarande vecka”. \*                                                                                           | x      |
📋 Copy
Clear
Buy Me a Coffee at ko-fi.com