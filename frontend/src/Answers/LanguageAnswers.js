import React, { useState, useEffect, useRef } from 'react';
import './LanguageAnswers.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Bulgarian from '../photos/flags/Bulgaria.png';import Croatian from '../photos/flags/Croatia.png';
import Czech from '../photos/flags/Czechia.png';import Danish from '../photos/flags/Denmark.png'
import Dutch from '../photos/flags/Netherlands.png';
import Finnish from '../photos/flags/Finland.png'
import French from '../photos/flags/French.png';
import German from '../photos/flags/German.png';
import Greek from '../photos/flags/Greece.png';
import Hungarian from '../photos/flags/Hungary.png';
import Italian from '../photos/flags/Italian.png'
import Polish from '../photos/flags/Poland.png';
import Portuguese from '../photos/flags/Portugal.png';
import Romanian from '../photos/flags/Romania.png';
 import Spanish from '../photos/flags/Spain.png';
import Swedish from '../photos/flags/Sweden.png';
import Russian from '../photos/flags/Russia.png';
import Turkish from '../photos/flags/Turkey.png';

function LanguageAnswers() {

  const [newStr, setNewStr] = useState("");
    useEffect(() => {
      const str = window.location.href;
      setNewStr(str.replace('http://localhost:3000/home/languageAnswers?', ''));
    })

  const returnHome = () =>{
    window.location.replace("http://localhost:3000/home");
  }




  const [theFlag, setTheFlag] = useState([]);
  useEffect(() => {
    switch (newStr) {
      case 'bulgarian': setTheFlag(Bulgarian); break;
      case 'croatian': setTheFlag(Croatian); break;
      case 'czech': setTheFlag(Czech); break;
      case 'danish': setTheFlag(Danish); break;
      case 'dutch': setTheFlag(Dutch); break;
      case 'finnish': setTheFlag(Finnish); break;
      case 'french': setTheFlag(French); break;
      case 'german': setTheFlag(German); break;
      case 'greek': setTheFlag(Greek); break;
      case 'hungarian': setTheFlag(Hungarian); break;
      case 'italian': setTheFlag(Italian); break;
      case 'polish': setTheFlag(Polish); break;
      case 'portuguese': setTheFlag(Portuguese); break;
      case 'romanian': setTheFlag(Romanian); break;
      case 'russian': setTheFlag(Russian); break;
      case 'spanish': setTheFlag(Spanish); break;
      case 'swedish': setTheFlag(Swedish); break;  
      case 'turkish': setTheFlag(Turkish); break;    
      default:
    }
  }, [newStr]);
  const [England, setEngland] = useState([]);
  useEffect(() => {
        setEngland([
          {english: 'Hello'},{english: 'Hi'},{english: 'Thank you'},{english: 'Please'},
  {english: 'And'},{english: 'The'},{english: 'Yes'},{english: 'No'},{english: 'Good Morning'},
  {english: 'Good Afternoon'},{english: 'Food'},{english: 'Eggs'},{english: 'Milk'},
    {english: 'Bread'},{english: 'Chips'},{english: 'Fish'},{english: 'Chocolate'},
    {english: 'Pizza'},{english: 'Water'},{english: 'Beer'},{english: 'Wine'},
  {english: 'Restaurant'},{english: 'House'},{english: 'Beach'},{english: 'Shop'},
    {english: 'City'},{english: 'Swimming pool'},{english: 'Park'},{english: 'Toilet'},
    {english: 'The bill'},{english: 'Money'},{english: 'Phone'},{english: 'Vegetarian'},
    {english: 'Train'},{english: 'Car'},{english: 'One'},{english: 'Two'},
    {english: 'Three'},{english: 'Four'},{english: 'Five'},{english: 'Six'},
    {english: 'Seven'},{english: 'Eight'},{english: 'Nine'},
        ])
      })

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    switch (newStr) {
      case 'bulgarian':
        setCountries([
          {Other: 'Zdraveite'}, {Other: 'zdrasti'}, {Other: 'Blagodarya ti'}, {Other: 'Molya te'}, {Other: 'I'},{Other: 'The'}, 
{Other: 'da'}, {Other: 'Ne'}, {Other: 'Dobro utro'}, {Other: 'Dobur den'},
{Other: 'Khrana'}, {Other: 'yaitsa'}, {Other: 'Mlyako'}, {Other: 'Khlyab'}, {Other: 'Chips'}, {Other: 'Riba'},
{Other: 'Shokolad'}, {Other: 'pitsa'}, {Other: 'voda'}, {Other: 'Bira'}, {Other: 'Vino'},
{Other: 'Restorant'}, {Other: 'Kushta'}, {Other: 'plazh'}, {Other: 'Magazin'}, {Other: 'grad'},
{Other: 'Basein'}, {Other: 'Parkiraite'}, {Other: 'Toaletna'},
{Other: 'Smetkata'}, {Other: 'Pari'}, {Other: 'Telefon'}, {Other: 'Vegetarianets'}, {Other: 'Vlak'}, {Other: 'Kola'},
{Other: "edin"}, {Other: "dve"}, {Other: "Tri"}, {Other: "Chetiri"}, {Other: "Pet"}, {Other: "shest"}, {Other: "Sedem"},
{Other: "Osem"}, {Other: "Devete"}
        ]);
        break;
case 'croatian':
        setCountries([
          {Other: 'Pozdrav'}, {Other: 'Bok'}, {Other: 'Hvala'}, {Other: 'Molim'}, {Other: 'I'}, 
{Other: 'On'}, {Other: 'Da'}, {Other: 'Ne'}, {Other: 'Dobro jutro'}, {Other: 'Dobar dan'},
{Other: 'Hrana'}, {Other: 'Jaja'}, {Other: 'Mlijeko'}, {Other: 'Kruh'}, {Other: 'Cips'}, {Other: 'Riba'}, 
{Other: 'Cokolada'}, {Other: 'Pizza'}, {Other: 'Voda'}, {Other: 'Pivo'}, {Other: 'Vino'},
{Other: 'Restoran'}, {Other: 'Kuca'}, {Other: 'Plaza'}, {Other: 'Ducan'}, {Other: 'Grad'}, 
{Other: 'Bazen'}, {Other: 'Park'}, {Other: 'Toalet'},
{Other: 'Racun'}, {Other: 'Novac'}, {Other: 'Telefon'}, {Other: 'Vegetarijanski'}, {Other: 'Vlak'}, {Other: 'Auto'},
{Other: "Jedan"}, {Other: "Dva"}, {Other: "Tri"}, {Other: "Cetiri"}, {Other: "Pet"}, {Other: "Sest"}, {Other: "Sedam"}, 
{Other: "Osam"}, {Other: "Devet"}
        ]);
        break;
        case 'czech':
        setCountries([
          {Other: 'Ahoj'}, {Other: 'Nazdar'}, {Other: 'Dekuji'}, {Other: 'Prosim'}, {Other: 'A'},
{Other: 'Ta'}, {Other: 'Ano'}, {Other: 'Ne'}, {Other: 'Dobre rano'}, {Other: 'Dobre odpoledne'},
{Other: 'Jidlo'}, {Other: 'Vejce'}, {Other: 'Mleko'}, {Other: 'Chleb'}, {Other: 'Chipsy'}, {Other: 'Ryba'},
{Other: 'Cokolada'}, {Other: 'Pizza'}, {Other: 'Voda'}, {Other: 'Pivo'}, {Other: 'Vino'},
{Other: 'Restaurace'}, {Other: 'Dum'}, {Other: 'Plaz'}, {Other: 'Trh'}, {Other: 'Obchod'},
{Other: 'Mesto'}, {Other: 'Bazen'}, {Other: 'Park'}, {Other: 'Toaleta'},
{Other: 'Ucet'}, {Other: 'Penize'}, {Other: 'Telefon'}, {Other: 'Vegetarian'}, {Other: 'Pas'}, {Other: 'Vlak'}, {Other: 'Auto'},
{Other: "Jeden"}, {Other: "Dva"}, {Other: "Tri"}, {Other: "Ctyri"}, {Other: "Pet"}, {Other: "Sest"}, {Other: "Sedm"},
{Other: "Osm"}, {Other: "Devet"}
        ]);
        break;
        case 'danish':
          setCountries([
            {Other: 'Hej'}, {Other: 'Hej'}, {Other: 'Tak'}, {Other: 'Vær venlig'}, {Other: 'Og'}, {Other: 'Det'}, 
{Other: 'Ja'}, {Other: 'Nej'}, {Other: 'God morgen'}, {Other: 'God eftermiddag'},
{Other: 'Mad'}, {Other: 'Aeg'}, {Other: 'Maelk'}, {Other: 'Brod'}, {Other: 'Chips'}, {Other: 'Fisk'}, 
{Other: 'Chokolade'}, {Other: 'Pizza'}, {Other: 'Vand'}, {Other: 'Ol'}, {Other: 'Vin'},
{Other: 'Restaurant'}, {Other: 'Hus'}, {Other: 'Strand'}, {Other: 'Butik'}, {Other: 'By'}, 
{Other: 'Svommebassin'}, {Other: 'Park'}, {Other: 'Toilet'},
{Other: 'Regningen'}, {Other: 'Penge'}, {Other: 'Telefon'}, {Other: 'Vegetar'}, {Other: 'Tog'}, {Other: 'Bil'},
{Other: 'En'}, {Other: 'To'}, {Other: 'Tre'}, {Other: 'Fire'}, {Other: 'Fem'}, 
{Other: 'Seks'}, {Other: 'Syv'}, {Other: 'Otte'}, {Other: 'Ni'}
          ]);
          break;
          case 'dutch':
            setCountries([
              {Other: 'Hallo'}, {Other: 'Hoi'}, {Other: 'Dank u'}, {Other: 'Alstublieft'}, {Other: 'En'},
 {Other: 'De'}, {Other: 'Ja'}, {Other: 'Nee'}, {Other: 'Goedemorgen'}, {Other: 'Goedemiddag'},
{Other: 'Eten'}, {Other: 'Eieren'}, {Other: 'Melk'}, {Other: 'Brood'}, {Other: 'Chips'}, 
{Other: 'Vis'}, {Other: 'Chocolade'}, {Other: 'Pizza'}, {Other: 'Water'}, 
{Other: 'Bier'},{Other: 'Wijn'},
{Other: 'Restaurant'}, {Other: 'Huis'}, {Other: 'Strand'}, {Other: 'Winkel'}, 
{Other: 'Stad'}, {Other: 'Zwembad'}, {Other: 'Park'}, {Other: 'Toilet'},
{Other: 'De rekening'}, {Other: 'Geld'}, {Other: 'Telefoon'}, {Other: 'Vegetarisch'}, 
{Other: 'Trein'}, {Other: 'Auto'},
{Other: 'Een'}, {Other: 'Twee'}, {Other: 'Drie'}, {Other: 'Vier'}, 
{Other: 'Vijf'}, {Other: 'Zes'}, {Other: 'Zeven'}, {Other: 'Acht'}, {Other: 'Negen'},
            ]);
            break;
            case 'finnish':
              setCountries([
                {Other: "Hei"}, {Other: "Moi"}, {Other: "Kiitos"}, {Other: "Ole hyva"}, {Other: "Ja"}, {Other: "Se"}, {Other: "Kylla"}, 
            {Other: "Ei"}, {Other: "Hyvaa aamua"}, {Other: "Hyvaa iltapaivaa"},
            {Other: "Ruoka"}, {Other: "Munat"}, {Other: "Maito"}, {Other: "Leipa"}, {Other: "Chipsit"}, {Other: "Kala"}, 
            {Other: "Suklaa"}, {Other: "Pizza"}, {Other: "Vesi"}, {Other: "Olut"}, {Other: "Viini"},
            {Other: "Ravintola"}, {Other: "Talo"}, {Other: "Ranta"}, {Other: "Marketti"},
            {Other: "Kaupunki"}, {Other: "Uima-allas"}, {Other: "Puisto"}, {Other: "WC"},
            {Other: "Lasku"}, {Other: "Raha"}, {Other: "Puhelin"}, {Other: "Kasvissyoja"}, 
            {Other: "Juna"}, {Other: "Auto"},
            {Other: "Yksi"}, {Other: "Kaksi"}, {Other: "Kolme"}, {Other: "Nelja"}, {Other: "Viisi"}, {Other: "Kuusi"}, 
            {Other: "Seitsemän"}, {Other: "Kahdeksan"}, {Other: "Yhdeksan"}
              ]);
              break;
              case 'french':
              setCountries([
                {Other: 'Bonjour'}, {Other: 'Salut'}, {Other: 'Merci'}, {Other: 'S il vous plait'}, {Other: 'Et'}, {Other: 'La'}, {Other: 'Oui'}, 
              {Other: 'Non'}, {Other: 'Bonjour'}, {Other: 'Bon apres-midi'},
              {Other: 'Nourriture'}, {Other: 'Oeufs'}, {Other: 'Lait'}, {Other: 'Pain'}, {Other: 'Chips'},
               {Other: 'Poisson'}, {Other: 'Chocolat'}, {Other: 'Pizza'}, {Other: 'Eau'}, {Other: 'Biere'}, {Other: 'Vin'},
              {Other: 'Restaurant'}, {Other: 'Maison'}, {Other: 'Plage'}, {Other: 'Magasin'}, {Other: 'Ville'},
               {Other: 'Piscine'}, {Other: 'Parc'}, {Other: 'Toilette'},
              {Other: 'L addition'}, {Other: 'Argent'}, {Other: 'Telephone'}, {Other: 'Vegetarien'}, {Other: 'Train'}, 
              {Other: 'Voiture'},
              {Other: 'Un'}, {Other: 'Deux'}, {Other: 'Trois'}, {Other: 'Quatre'}, {Other: 'Cinq'},
              {Other: 'Six'}, {Other: 'Sept'}, {Other: 'Huit'}, {Other: 'Neuf'}
              ]);
              break; 
      case 'german':
        setCountries([
          {Other: 'Hallo'},{Other: 'Hallo'},{Other: 'Danke'},{Other: 'Bitte'},
{Other: 'Und'},{Other: 'Das'},{Other: 'Ja'},{Other: 'Nein'},{Other: 'Guten Morgen'},{Other: 'Guten Nachmittag'},
{Other: 'Essen'},{Other: 'Eier'},{Other: 'Milch'},
{Other: 'Brot'},{Other: 'Chips'},{Other: 'Fisch'},{Other: 'Schokolade'},{Other: 'Pizza'},
{Other: 'Wasser'},{Other: 'Bier'},{Other: 'Wein'},
{Other: 'Restaurant'},
{Other: 'Haus'},{Other: 'Strand'},{Other: 'Geschaft'},{Other: 'Stadt'},
{Other: 'Schwimmbad'},{Other: 'Park'},{Other: 'Toilette'},
{Other: 'Die Rechnung'},
{Other: 'Geld'},{Other: 'Telefon'},{Other: 'Vegetarisch'},{Other: 'Zug'},
{Other: 'Auto'},
{Other: 'Einer'},{Other: 'Zwei'},{Other: 'Drei'},
{Other: 'Vier'},{Other: 'Funf'},{Other: 'Sechs'},{Other: 'Sieben'},
{Other: 'Acht'},{Other: 'Neun'},
        ]);
        break;
        case 'greek':
        setCountries([
          {Other: "geia"},{Other: "geia"}, {Other: "Sas efcharisto"}, {Other: "Sas parakaloume"}, {Other: "Kai"}, {Other: "o"}, 
{Other: "Nai"}, {Other: "Ochi"}, {Other: "Kalimera"}, {Other: "Kalo apogevma"},
 {Other: "Fagito"}, {Other: "Avga"}, 
{Other: "Gala"}, {Other: "Psomi"}, {Other: "Tsip's"}, {Other: "Psari"}, {Other: "Sokolata"}, {Other: "Pitsa"}, 
{Other: "Nero"}, {Other: "Byra"}, {Other: "Krasi"}, 
{Other: "Estiatorio"}, {Other: "Spiti"}, {Other: "Paralia"}, 
{Other: "Katastima"}, {Other: "Poli"},{Other: "Pisina"}, {Other: "Parko"}, {Other: "Toualeta"}, 
{Other: "O logariasmos"},
 {Other: "Chrimata"}, {Other: "Tilefono"}, {Other: "Chortofagos"}, {Other: "Treno"}, 
 {Other: "Aftokinito"},
  {Other: "Enas"}, {Other: "Dyo"}, {Other: "Tria"}, {Other: "Tessera"}, {Other: "Pente"},
 {Other: "Exi"}, {Other: "Epta"}, {Other: "Okto"}, {Other: "Ennea"}
        ]);
        break;
        case 'hungarian':
        setCountries([
          {Other: "Hello"}, {Other: "Szia"}, {Other: "Koszonom"}, {Other: "Kerlek"}, {Other: "Es"}, 
          {Other: "Az"}, {Other: "Igen"}, {Other: "Nem"}, {Other: "Jo reggelt"}, {Other: "Jo napot"},
          {Other: "Etel"}, {Other: "Tojas"}, {Other: "Tej"}, {Other: "Kenyer"}, {Other: "Chipsek"}, {Other: "Hal"}, 
          {Other: "Csokolade"}, {Other: "Pizza"}, {Other: "Viz"}, {Other: "Sor"}, {Other: "Bor"},
          {Other: "Etterem"}, {Other: "Haz"}, {Other: "Part"}, {Other: "Piac"}, {Other: "Bolt"}, {Other: "Varos"}, 
          {Other: "Uszomedence"}, {Other: "Park"}, {Other: "WC"},
          {Other: "A szamla"}, {Other: "Penz"}, {Other: "Telefon"}, {Other: "Vegetarianus"}, {Other: "Utlevel"}, 
          {Other: "Vonat"}, {Other: "Auto"},
          {Other: "Egy"}, {Other: "Ketto"}, {Other: "Harom"}, {Other: "Negy"}, {Other: "Ot"}, {Other: "Hat"}, 
          {Other: "Het"}, {Other: "Nyolc"}, {Other: "Kilenc"}
        ]);
        break;
        case 'italian':
        setCountries([
          {Other: 'Ciao'}, {Other: 'Ciao'}, {Other: 'Grazie'}, {Other: 'Per favore'}, {Other: 'E'}, {Other: 'La'},
 {Other: 'Si'}, {Other: 'No'}, {Other: 'Buongiorno'}, {Other: 'Buon pomeriggio'},
{Other: 'Cibo'}, {Other: 'Uova'}, {Other: 'Latte'}, {Other: 'Pane'}, {Other: 'Patatine'}, {Other: 'Pesce'}, 
{Other: 'Cioccolato'}, {Other: 'Pizza'}, {Other: 'Acqua'}, {Other: 'Birra'}, {Other: 'Vino'},
{Other: 'Ristorante'}, {Other: 'Casa'}, {Other: 'Spiaggia'}, {Other: 'Negozio'}, {Other: 'Citta'}, {Other: 'Piscina'}, 
{Other: 'Parco'}, {Other: 'Bagno'},
{Other: 'Il conto'}, {Other: 'Soldi'}, {Other: 'Telefono'}, {Other: 'Vegetariano'}, {Other: 'Treno'}, {Other: 'Auto'},
{Other: 'Uno'}, {Other: 'Due'}, {Other: 'Tre'}, {Other: 'Quattro'}, {Other: 'Cinque'}, {Other: 'Sei'}, {Other: 'Sette'},
 {Other: 'Otto'}, {Other: 'Nove'}
        ]);
        break;
        case 'polish':
        setCountries([
          {Other: 'Witaj'}, {Other: 'Czesc'}, {Other: 'Dziekuje'}, {Other: 'Prosze'}, {Other: 'I'}, {Other: 'Ta'}, 
{Other: 'Tak'}, {Other: 'Nie'}, {Other: 'Dzien dobry'}, {Other: 'Dobry wieczor'},
{Other: 'Jedzenie'}, {Other: 'Jajka'}, {Other: 'Mleko'}, {Other: 'Chleb'}, {Other: 'Chipsy'}, {Other: 'Ryba'}, 
{Other: 'Czekolada'}, {Other: 'Pizza'}, {Other: 'Woda'}, {Other: 'Piwo'}, {Other: 'Wino'},
{Other: 'Restauracja'}, {Other: 'Dom'}, {Other: 'Plaza'}, {Other: 'Sklep'}, {Other: 'Miasto'}, {Other: 'Basen'}, 
{Other: 'Park'}, {Other: 'Toaleta'},
{Other: 'Rachunek'}, {Other: 'Pieniadze'}, {Other: 'Telefon'}, {Other: 'Wegetarianin'}, {Other: 'Pociag'},
 {Other: 'Samochod'},
{Other: 'Jeden'}, {Other: 'Dwa'}, {Other: 'Trzy'}, {Other: 'Cztery'}, {Other: 'Piec'}, {Other: 'Szesc'}, 
{Other: 'Siedem'}, {Other: 'Osiem'}, {Other: 'Dziewiec'}
        ]);
        break;

        case 'portuguese':
          setCountries([
            {Other: 'Ola'}, {Other: 'Oi'}, {Other: 'Obrigado'}, {Other: 'Por favor'}, {Other: 'E'}, {Other: 'OA'}, {Other: 'Sim'},
            {Other: 'Nao'}, {Other: 'Bom dia'}, {Other: 'Boa tarde'},
           {Other: 'Comida'}, {Other: 'Ovos'}, {Other: 'Leite'}, {Other: 'Pao'}, {Other: 'Batatas fritas'}, {Other: 'Peixe'}, 
           {Other: 'Chocolate'}, {Other: 'Pizza'}, {Other: 'Agua'}, {Other: 'Cerveja'}, {Other: 'Vinho'},
           {Other: 'Restaurante'}, {Other: 'Casa'}, {Other: 'Praia'}, {Other: 'Loja'}, {Other: 'Cidade'}, {Other: 'Piscina'}, 
           {Other: 'Parque'}, {Other: 'Banheiro'},
           {Other: 'A conta'}, {Other: 'Dinheiro'}, {Other: 'Telefone'}, {Other: 'Vegetariano'}, {Other: 'Trem'}, {Other: 'Carro'},
           {Other: 'Um'}, {Other: 'Dois'}, {Other: 'Tres'}, {Other: 'Quatro'}, {Other: 'Cinco'}, {Other: 'Seis'}, {Other: 'Sete'}, 
           {Other: 'Oito'}, {Other: 'Nove'}
          ]);
          break;
          case 'romanian':
          setCountries([
            {Other: "Salut"}, {Other: "Salut"} ,{Other: "Multumesc"}, {Other: "Te rog"}, {Other: "Si"} ,{Other: "Aceasta"},
 {Other: "Da"}, {Other: "Nu"}, {Other: "Buna dimineata"}, {Other: "Buna ziua"},
{Other: "Mancare"} ,{Other: "Oua"} ,{Other: "Lapte"} ,{Other: "Paine"}, {Other: "Chips uri"} ,{Other: "Peste"} ,{Other: "Ciocolata"} ,
{Other: "Pizza"} ,{Other: "Apa"} ,{Other: "Bere"} ,{Other: "Vin"},
{Other: "Restaurant"} ,{Other: "Casa"}, {Other: "Plaja"} ,{Other: "Magazin"} ,{Other: "Oras"},
 {Other: "Piscina"} ,{Other: "Parc"} ,{Other: "Toaleta"},
{Other: "Contul"} ,{Other: "Bani"}, {Other: "Telefon"} ,{Other: "Vegetarian"} ,{Other: "Tren"} ,{Other: "Masina"},
{Other: "Unu"} ,{Other: "Doi"} ,{Other: "Trei"} ,{Other: "Patru"}, {Other: "Cinci"}, {Other: "Sase"} ,
{Other: "Sapte"}, {Other: "Opt"}, {Other: "Noua"}
          ]);
          break;
          case 'russian':
          setCountries([
            {Other: "Privet"}, {Other: "Privet"}, {Other: "Spasibo"}, {Other: "Pozhaluysta"}, {Other: "I"}, {Other: "v"}, 
{Other: "da"}, {Other: "Net"}, {Other: "Dobroye utro"}, {Other: "Dobryy den"},
{Other: "Yeda"}, {Other: "yaytsa"}, {Other: "Moloko"}, {Other: "Khleb"}, {Other: "Chipsy"}, {Other: "Ryby"}, 
{Other: "Shokolad"}, {Other: "Pitstsa"}, {Other: "Voda"}, {Other: "Pivo"}, {Other: "Vino"},
{Other: "Restoran"}, {Other: "Dom"}, {Other: "Plyazh"}, {Other: "Rynok"}, {Other: "Magazin"}, {Other: "Gorod"},
 {Other: "Plavatel'nyy basseyn"}, {Other: "Park"}, {Other: "Tualet"},
{Other: "Schet"}, {Other: "Den'gi"}, {Other: "Telefon"}, {Other: "vegetarianets"}, {Other: "Pasport"}, 
{Other: "Trenirovat'sya"}, {Other: "Mashina"},
{Other: "Odin"}, {Other: "Dva"}, {Other: "Tri"}, {Other: "Chetyre"}, {Other: "pyat"}, {Other: "Shest"}, 
{Other: "Sem"}, {Other: "Vosem"}, {Other: "Devyat"}
          ]);
          break;
          case 'spanish':
          setCountries([
            {Other: "Hola"}, {Other: "Hola"}, {Other: "Gracias"}, {Other: "Por favor"}, {Other: "Y"}, {Other: "La"}, {Other: "Si"},
 {Other: "No"}, {Other: "Buenos dias"},{Other: "Buenas tardes"},
{Other: "Comida"}, {Other: "Huevos"},{ Other: "Leche"}, {Other: "Pan"},{ Other: "Papas fritas"}, {Other: "Pescado"},
{ Other: "Chocolate"},{ Other: "Pizza"},
 {Other: "Agua"}, {Other: "Cerveza"}, {Other: "Vino"},
{Other: "Restaurante"}, {Other: "Casa"}, {Other: "Playa"}, {Other: "Tienda"}, {Other: "Ciudad"}, {Other: "Piscina"}, {Other: "Parque"}, {Other: "Bano"},
{Other: "La cuenta"},{ Other: "Dinero"}, {Other: "Telefono"}, {Other: "Vegetariano"}, {Other: "Tren"}, {Other: "Coche"},
{Other: "Uno"}, {Other: "Dos"}, {Other: "Tres"}, {Other: "Cuatro"},{ Other: "Cinco"}, {Other: "Seis"},{ Other: "Siete"},
{Other: "Ocho"}, {Other: "Nueve"}
          ]);
          break;
          case 'swedish':
          setCountries([
            {Other: "Halla"}, {Other: "Hej"}, {Other: "Tack"}, {Other: "Vanligen"}, {Other: "Och"}, {Other: "Den"}, 
{Other: "Ja"}, {Other: "Nej"}, {Other: "God morgon"}, {Other: "God eftermiddag"},
{Other: "Mat"}, {Other: "Agg"}, {Other: "Mjolk"}, {Other: "Brod"}, {Other: "Chips"}, {Other: "Fisk"}, {Other: "Choklad"}, 
{Other: "Pizza"}, {Other: "Vatten"}, {Other: "Ol"}, {Other: "Vin"},
{Other: "Restaurang"}, {Other: "Hus"}, {Other: "Strand"}, {Other: "Butik"}, {Other: "Stad"}, {Other: "Simbassang"}, {Other: "Park"}, {Other: "Toalett"},
{Other: "Notan"}, {Other: "Pengar"}, {Other: "Telefon"}, {Other: "Vegetarian"}, {Other: "Tag"}, {Other: "Bil"},
{Other: "Ett"}, {Other: "Tva"}, {Other: "Tre"}, {Other: "Fyra"}, {Other: "Fem"}, {Other: "Sex"}, {Other: "Sju"}, {Other: "Atta"}, {Other: "Nio"}
          ]);
          break;
          case 'turkish':
          setCountries([      
{ Other: 'Merhaba' }, { Other: 'Selam' }, { Other: 'Tesekkur ederim' }, { Other: 'Lutfen' }, { Other: 'Ve' },
{ Other: 'O' }, { Other: 'Evet' }, { Other: 'Hayir' }, { Other: 'Gunaydin' }, { Other: 'Iyi gunler' },
{ Other: 'Yiyecek' }, { Other: 'Yumurta' }, { Other: 'Sut' }, { Other: 'Ekmek' }, { Other: 'Cips' }, { Other: 'Balik' },
{ Other: 'Cikolata' }, { Other: 'Pizza' }, { Other: 'Su' }, { Other: 'Bira' }, { Other: 'Sarap' },
{ Other: 'Restoran' }, { Other: 'Ev' }, { Other: 'Plaj' }, { Other: 'Magaza' }, { Other: 'Sehir' }, { Other: 'Yuzme havuzu' }, 
{ Other: 'Park' }, { Other: 'Tuvalet' },
{ Other: 'Hesap' }, { Other: 'Para' }, { Other: 'Telefon' }, { Other: 'Vejetaryen' }, { Other: 'Tren' }, { Other: 'Araba' },
{ Other: "Bir" }, { Other: "Iki" }, { Other: "Uc" }, { Other: "Dort" }, { Other: "Bes" }, { Other: "Alti" }, { Other: "Yedi" }, 
{ Other: "Sekiz" }, { Other: "Dokuz" }
          ]);
          break;
      default:
        setCountries([]);
        break;
    }
  }, [newStr]);

  return (
    <div className="LAoutsideFront">
      <div className="LAmainBox">


<div className='LArightbox'>
        <div className='LAbottomBox'>

          <div className='LATopBox'>
            {/* <div><button className='LATopBoxArrow' onClick={returnHome}><AiOutlineArrowLeft /></button></div> */}
            <div><h3>fourty four words for {newStr}</h3></div>
          </div>

          <div className='LATopMiddleFirst'>
            <img className="LATopMiddleDivFirst" src={theFlag} alt="logo"></img>
          </div>

          <div className='LATopMiddle'>
            <div className='LATopMiddleDiv' >English</div>
            <div className='LATopMiddleDiv' >{newStr}</div>
          </div>


          <div className='LATable'>

    <table className='LATableInsideLeft'>
      <tbody className='LATableInsideBody'>
        {England.map((England, index) => (
          <tr key={index} className={index % 2 === 0 ? 'LAlight-grey' : 'LAlight-white'}>
            <td className="LAtableLeft-cell">{England.english}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <table className='LATableInsideRight'>
      <tbody className='LATableInsideBody'>
        {countries.map((country, index) => (
          <tr key={index} className={index % 2 === 0 ? 'LAlight-grey' : 'LAlight-white'}>
            <td className="LAtableRight-cell">{country.Other}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>



  
        </div>
        </div>
      </div>  
    </div>
  )
}

export default LanguageAnswers























    {/* <div className='CACATable'>
    <table className='CACATableInside'>
      <tbody className='CACATableInsideBody'>
        {countries.map((country, index) => (
          <tr key={index}>
            <td className="CACAtable-cell">{country.name}</td>
            <td className="CACAtable-cell">{country.capital}</td>
            <td className="CACAtable-cell">
              <img className="CACATableFlag" src={country.flag}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div> */}





{/* <div className='LATable'>
<table className='LATableInside'>
  <tbody className='LATableInsideBody'>
    {countries.map((country, index) => (
      <tr key={index} className={index % 2 === 0 ? 'LAlight-grey' : ''}>
        <td className="LAtable-cell">{country.english}</td>
        <td className="LAtable-cell">{country.other}</td>
      </tr>
    ))}
  </tbody>
</table>
</div> */}




// const [countries, setCountries] = useState([]);
// useEffect(() => {
//   switch (newStr) {
//     case 'german':
//       setCountries([
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//       ]);
//       break;
//     case 'italy':
//       setCountries([
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//         { english: 'Andorra', other: 'Andorra la Vella' },
//         { english: 'Armenia', other: 'Yerevan'},
//       ]);
//       break;
//     default:
//       setCountries([]);
//       break;
//   }
// }, [newStr]);