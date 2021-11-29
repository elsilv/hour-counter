# Työaikakirjanpito

| päivä | aika | mitä tein  |
| :----:|:-----| :-----|
|07.7.| 1h | Laskurit toimimaan oikein
|07.7.| 1h | Mahdollisuus lisätä ja poistaa tuntikirjauksia
|08.7.| 1h | Pientä hiomista: kentät tyhjenevät submitin jälkeen, ei lähetä jos kentät tyhjiä, responsiivisempi tyyli
|10.7.| 3h | MongoDBn yhdistämistä, ongelmia ilmeni, joten niihin kului paljon aikaa
|11.7.| 1h | ongelman selvittelyä liittyen GET pyyntöön, tiedostojen organisointia
|11.7.| 2h | POST pyyntö toimimaan, ongemia REST Clientin kanssa, joten siihen hukkaantui aikaa, backend ja frontend yhteen toimiviksi
|11.7.| 2h | Perehtymistä kirjautumisen tekemiseen, UIn suunnittelua, navigoinnin aloittaminen
|12.7.| 2h | Sidebar navigoinnin opettelua ja toteuttamista, delete buttonin tyylittelyä ja yleistä tyylin parantelua
|14.7.| 2h | Pieniä tyylimuutoksia, Käyttäjä skeeman ja käyttäjien GET, POST ja DELETE pyyntöjen toteutus
|14.7.| 1h | React Routeriin nopea perehtyminen (en käynyt kurssin tätä osaa), ja Projects ja Lsivujen totetuksen aloittaminen
|14.7.| 1h | Tyylin hiomista, tyylin suunnittelemista, pohtimista miten edetä kirjautumisen ja projektien lisäämisen kanssa
|15.7.| 1h | Käyttäjien autentikoinnin kehittämistä
|15.7.| 3h |  Autentikointi middleware, yritin saada GET /api/auth/user toimimaa ja palauttamaan tokenin perusteella käyttäjän tiedot, mutta paljon ongelmia
|16.7.|1.5h | Käyttäjän autentikointia eteenpäin, jälleen paljon isoja ongelmia
|16.7.|1.5h | Käyttäjän autentikointia eteenpäin, jälleen paljon isoja ongelmia
|19.7.| 1h  | 30min Käyttäjän autentikointia eteenpäin
|19.7.| 2h  | Käyttäjän autentikointia eteenpäin, nyt kaikki vaikuttaa toimivan ok
|20.7.| 4h  | 30min Käyttäjän autentikointia valmiiksi, ongelmana, ettei pysy kirjautuneena, aikaa sen korjailuun. Myös ongelmana "could not proxy request ", minkä selvittelyyn meni aikaa.
|21.7.| 2h  | Pientä siistimistä, vihdoin myös käyttäjän autentikointi toimimaan täysin. Rakenteen ja tästä eteenpäin menemisen pohdintaa.
|22.7.| 3h  | Lisäsin Projekti mongo Skeeman, GET, POST & DELETE /api/projects, yhdistin projektin ja käyttäjän toisiinsa, projektien lisäämissivun kehittämistä
|23.7.| 2h  | Yrityksenä saada lisättyä uusi projekti selaimen kautta, paljon tappelua ja ongelmia
|26.7.| 2h  | aiempien ongelmien korjailua, myös lisättyjen projektien listaus ja niistä haluttujen tietojen näytttäminen
|27.7.| 2.5h | Vihdoin projektin lisäys toimimaan oikein, hieman koodin siistimistä, logout sivun lisäys, suunnittelua miten jatkaa eteenpäin
|27.7.| 1.5h |	Perehtymistä paremmin react routeriin ja sen toimintaan, toimimaan oikein ja loogisesti ohjelmassa
|28.7.| 2h  |  Projektin ja käytettyjen tuntien toisiinsa yhdistäminen, tuntien poisto päivittymään oikein myös projektissa
|28.7.| 1.5h  | Projektien poisto päivittymään käyttäjissä, projektien listauksen tyylin muotoilua, suunnittelua kuinka toteuttaa projektien ja käytettyjen tuntien toisiinsa yhdistäminen visuaalisesti tyylikkästi
|29.7.| 1.5h  | Parameter route projektien näyttöön
|29.7.| 2h	 | Yksittäisten projektien sivujen muokkaamista, ja pohtimista kuinka toteuttaa järkevästi
|30.7.| 1.5h  | Yksittäisten projektien sivujen muokkaamista, pohtimista miten saada myös työtuntien tiedot näkyviin
|31.7.| 3,5h  | Yksittäisten projektien sivujen muokkaamista, toimimaan projektista työtunnin poistaminen ja lisääminen, käytettyjen ja jäljellä olevien tuntien näyttäminen oikein, yleistä siistimistä
|02.8.| 3.5h  | Näyttämään kirjautuneelle käyttäjälle vain hänen omat projektinsa, pohtimista miten korjata ongelma liittyen siihen, että projektien omien sivujen päivittäminen johtaa virheeseen, sen korjaaminen, projektin eteenpäin suunnittelua
|03.8.| 1.5h  | Pääsivun ulkoasun pohdintaa, taustan suunnittelu ja muutos, väripalettien pohdinta
|04.8.| 3.5h  | Pääsivun tyylittelyä, erilaisten ideoiden toimivuuden testaamista, päätyminen nykyiseen ratkaisuun
|05.8.| 2h  |   Muu tyyli sopimaan paremmin yhteen pääsivun kanssa
|05.8.| 1h  |   Muuta tyyliä yhä sopimaan paremmin yhteen + muuta tyylittelyä
|06.8.| 1h	| Projektien lisääntymään smoothisti listaan, projekti sivun tyylin siistimistä pääsivuun sopivaksi
|06.8.| 1h  |   Uudet tunnit lisääntymään smoothisti listaan, sivuista responsiivisemmat, erityisesti kännykällä paremmin toimiviksi
|09.8.| 2,5h  |  Pohtimista miten toteuttaa että käyttäjä voi ladata omat projektinsamuodossa. Testausta, ongelmana taas "could not proxy request ".
|10.8.| 2h  |  Testaamista, huomasin ongelmia projektien poistamiseen liittyen, ongelman selvittelyä. Poisto poistaa nyt myös tunnit jotka liittyvät projektiin.
|13.8.| 4h	| Tyylin muuttamista, router toimimaan oikein, tyylin pientä viilailua ja ongelmakohtien listaamista
|14.8.| 2h  |  Tooltipsit, ikonien pohtimista, UIn yhtenäistämistä, fonttikokojen yms tarkistelua
|15.8.| 1,5h  | Heroku toimimaan, ongelma workingHourin poistamisessa herokun kautta, pohtimista miten jatkaa projektia
|16.8.| 2h	| Responsiviisuuden parantamista, ongelmia Herokun ja GitHubin kanssa, css:n siistimistä, tuntien yhteyteen lisäämispäivämäärä
|17.8.| 1.5h  | Menubutton toimimaan oikein ja hienommin, projektien historia listat näyttämään paremmalta myös jos eripituisia lisäyksiä
|18.8.| 3h  |   Projektin lataaminen pdf:nä, ongelmana tällä tavoin (html2canvas, jspdf) tuotetun pdfn huono laatu ja muokattavuus
|19.8.| 2,5h  | Projektin lataaminen pdf:nä uudella tavalla, parempi laatu ja muokattavuus
|23.8.| 2h  |   Pdf sisältämään kaikki halutut tiedot ja näyttämään ne siististi
|24.8.| 1h  |  Etusivulle linkit, niiden tyylit, tyylin korjaamista
|24.8.| 0.5h  | Virheviestien korjaamista
|25.8.| 2,5h  | Pohtimista miten toteuttaa projektin muokkaaminen, sekä aloitin toteuttamaan mahdollisuutta merkitä projekti tehdyksi tai keskeneräiseksi
|26.8.| 1h  |   Projektin tietojen muokkaaminen toimimaan postmanin kautta
|29.8.| 1h  |   Mahdollisuus merkitä projekti tehdyksi toimimaan oikein, toiminnallisuus nyt ok, näyttämisen kanssa pieniä ongelmia 
|30.8.| 1,5h  | Näyttää oikein mitkä projektit on merkitty tehdyksi ja mitkä ei, myös uusi projekti imestyy smoothimmin
|31.8.| 1,5h  | Jatkoin projektin muokkaamisen kehitystä, lisäsin muokkausikkunan ja aloitin toiminnallisuuden kehittämisen
|03.9.| 3h	| Projektin muokkausikkunan tyylittelyä, projektin muokkaamisen toiminnallisuus valmiiksi
|08.9.| 0,5h  | Projektin muokkausikkuna sulkeutumaan tallennuksen jälkeen, jos ei muutoksia, niin käyttämään projektin vanhoja tietoja, ikonien muuttamista
|08.9.| 1,5h  | Aloitin kehittämään sivua, josta käyttäjä voi nähdä projekteihinsa liittyvää informaatiota, esim. kuinka paljon aikaa hän on käyttänyt yhteensä, mihin projektiin eniten yms.
|10.9.|  1h  |   Pieniä muutoksia aiemmin mainittuun sivuun, pohdintaa mitä kaikkea lisätä sivulle
|29.9.|  2h  |   Perehtymistä miten kirjoittaa hyvä ReadMe ja sen kirjoittamista
|04.10.|  1h  |   ReadMe:n täydentämistä, testien tarkistamista ja korjaamista, käyttämättömien riippuvuksien poistamista
|05.10.|  0,5h |  Testien päivittämistä, testien kautta uuden tunnuksen luominen toimimaan oikein
|25.10.|  1,5h |  Koodin yhtenäistämistä, heroku-versio käyttämään eri tietokantaa kuin lokaaliversio, muutoksia oikeuksiin
|26.10.|  1h | Uusien virheviestien lisäämistä ja vanhojen päivittämistä, submit-kenttien pituuksien rajoittamista
|27.10.|  1,5h  | Uusia testejä ja pieniä päivityksiä vanhoihin, pieniä muutoksia aiempiin virheviesteihin, Heroku käyttämään eri jwt keytä
|28.10.|  0,5h  | Yksittäisten pienten bugien korjailua
|29.10.|  1,5h  | Näyttämään pdf-tiedostot oikein, aiemmin listauksessa rumia pilkkuja
| yht   | 122,5h   | | 
