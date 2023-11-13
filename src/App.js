import React, { useState } from 'react';
import './App.css';

const App = () => {

  const caracteristicasRaza_objeto = {

    humano: {
      caracRaza: `Stats Por Humano`,
      HA: 20,
      HP: 20,
      F: 20,
      R: 20,
      Ag: 20,
      Int: 20,
      FV: 20,
      Em: 20,
    },

    enano: {
      caracRaza: "Stats Por Enano",
      HA: 30,
      HP: 20,
      F: 20,
      R: 30,
      Ag: 10,
      Int: 20,
      FV: 20,
      Em: 10,
    },

    halfling: {
      caracRaza: "Stats Por Halfling",
      HA: 10,
      HP: 30,
      F: 10,
      R: 10,
      Ag: 30,
      Int: 20,
      FV: 20,
      Em: 30,
    },

    elfo: {
      caracRaza: "Stats Por Elfo",
      HA: 20,
      HP: 30,
      F: 20,
      R: 20,
      Ag: 30,
      Int: 20,
      FV: 20,
      Em: 20,
    }
  };

  const movimientoRaza_objeto = {
    
    humano: 4,

    elfo: 5,

    enano: 3,

    halfling: 4,
  }


  const elementosElfo__objeto = {

    elfo1: ["Aed", "Ael", "Aelf", "Aen", "Aeth", "Alth", "An", "And", "Ar", "Arg", "Ast", "Ath", "Ay", "Ban", "Bel", "Beth", "Cad", "Cael", "Caem", "Caeth", "Cal", "Cam", "Cel", "Cir", "El", "Eld", "Elth", "End", "Er", "Ers", "Fand", "Ferg", "Fim", "Fin", "Gal", "Gald", "Gaen", "Gaes", "Ged", "Gen", "Ges", "Geth", "Glor", "Has", "Hath", "Hel", "Heth", "Hith", "Ill", "Ind", "Ist", "Ith", "Iy", "Kor", "Ky", "Kyr", "La", "Lan", "Lil", "Lim", "Loth", "Mal", "Mar", "Math", "Men", "Meth", "Mor", "Mort", "Nal", "Nar", "Nen", "Nor", "Norl", "Ri", "Riabb", "Riann", "Rid", "Rien", "Riell", "Ruth", "Ryn", "Tab", "Tal", "Tan", "Tar", "Teth", "Tel", "Tor", "Ty", "Ul", "Um", "Ur", "Yr", "Yv"],

    elfo2: ["A", "Al", "An", "Ar", "As", "E", "El", "En", "Er", "Es", "Fan", "Fen", "Fin", "I", "Il", "In", "Ir", "Is", "O", "Ol", "On", "Or", "Os", "Ra", "Ral", "Ran", "Re", "Rel", "Ren", "Ril", "Rin", "Ro", "Rol", "Ron", "Ry", "Sa", "Sal", "San", "Se", "Sel", "Sen", "Si", "Sil", "Sin", "So", "Sol", "Son", "U", "Ul"],

    elfo3: ["Baen", "Baine", "Baire", "Bar", "Bhir", "Brier", "Brior", "Brin", "Daen", "Daine", "Daire", "Dar", "Dhil", "Dhir", "Drel", "Drir", "Dror", "Eorl", "Eos", "Eoth", "Fil", "Fin", "Fir", "Hil", "Hin", "Hor", "Il", "In", "Ion", "Ir", "Ith", "Is", "Laen", "Laer", "Laine", "Lan", "Las", "Len", "Les", "Lil", "Lin", "Lir", "Lis", "Lor", "Los", "Mael", "Maen", "Main", "Mal", "Mair", "Mar", "Mil", "Min", "Mir", "Nael", "Naen", "Nael", "Naer", "Nair", "Nail", "Nal", "Nan", "Nar", "Nel", "Nir", "Nir", "Nis", "Nis", "Nis", "Nil", "Nin", "Nir", "Ran", "Ran", "Rea", "Rel", "Rea", "Rel", "Ril", "Ril", "Rin", "Rin", "Ril", "Ril", "Rin", "Rin", "Rir", "Rion", "Rir", "Rior", "Riorl", "Rior", "Riorl", "Riorn", "Ryel", "Taen", "Tain", "Tair", "Thain", "Than", "Thar", "Thel", "Thil", "Thir", "Thir", "Thrin", "Thrin", "Thwe", "Til", "Tin", "Tin", "Tin", "Tis", "Thrill", "Thril", "We", "Yan"],
  }

  const elementosHalfling_objeto = {
    
    halfling1: ["Bag", "Balf", "Berc", "Bill", "Bobb", "Bodg", "Bog", "Bom", "Bonn", "Brog", "Bulc", "Bull", "Bust", "Cam", "Cap", "Ced", "Chund", "Clog", "Clof", "Cob", "Cog", "Crum", "Crump", "Curl", "Dod", "Dog", "Dott", "Drog", "Dron", "Durc", "Elm", "Enn", "Ermin", "Ethan", "Falc", "Fald", "Far", "Falm", "Fild", "Flac", "Fogg", "Frit", "Ful", "Func", "Gaff", "Galb", "Gamm", "Gert", "Giff", "Gild", "Gon", "Grop", "Gudd", "Gump", "Gu", "Hal", "Ham", "Hart", "Harp", "Jac", "Jas", "Jasp", "Joc", "Lac", "Lil", "Lob", "Lott", "Lud", "Lurc", "Mad", "Mag", "Man", "May", "Mer", "Mul", "Murc", "Murd", "Nag", "Nell", "Nobb", "Nob", "Od", "Og", "Old", "Pipp", "Podd", "Porc", "Riff", "Rip", "Rob", "Sam", "Supp", "Taff", "Talb", "Talc", "Tay", "Tom", "Wald", "Watt", "Will"],

    halfling2: ["Belly", "Er", "Fast", "In", "It", "Mutch", "O", "Odoc", "Riadoc", "Regar", "Wick", "Wise", "Wit", "Y"],
  }

  const apellidoRaza_objeto = {
    
    humano: ["Adelhof", "Adelhof", "Albrecht", "Altmann", "Atzwig", "Bacher", "Baer", "Baumann", "Becker", "Behn", "Betz", "Beyer", "Bischof", "Boehm", "Breitenbach", "Breuer", "Dahmbach", "Delfholt", "Drakenhof", "Drauwulf", "Durrbein", "Ehrhard", "Eisenhauer", "Eschlimann", "Falkenheim", "Fehr", "Fiegler", "Fleischer", "Frohlich", "Frueh", "Fuchs", "Gaertner", "Gaffwig", "Gebauer", "Godtgraf", "Grunenwald", "Guth", "Haintz", "Herz", "Herzog", "Hirtzel", "Hoch", "Hoefer", "Jaeger", "Jochutz", "Kalb", "Kaltenbach", "Kalb", "Konig", "Kraemer", "Krebs", "Konigsamen", "Konig", "Kuhn", "Kummel", "Lang", "Lankdorf", "Liess", "Lebengut", "Lutzen", "Machholt", "Meusmann", "Meyer", "Mohr", "Nachtmann", "Naubhof", "Netzhoch", "Neumann", "Niederlitz", "Nuhr", "Oberholtzer", "Ohrsten", "Otzlowe", "Reichert", "Reifsneider", "Riese", "Rohrig", "Reiss", "Schwalb", "Steiner", "Tabbeck", "Teuber", "Tolzen", "Trachsel", "Weber", "Wechsler", "Wirtz", "Widmann", "Widmer", "Veit", "Schaumer", "Vogt", "Vogel", "Zumwald"],

    elfo: ["Blackbough", "Blackcairn", "Blackwood", "Bluefeather", "Bluewing", "Boldheart", "Boldspear", "Bravehelm", "Bravestar", "Brightcrown", "Brightcrown", "Brightwand", "Coolstream", "Coolwater", "Darkeagle", "Darkmane", "Darkmoon", "Eldenkin", "Eldendrake", "Fairowl", "Fastblade", "Fastspear", "Fastwing", "Fellhand", "Fellblade", "Fleetfoot", "Fleet-though", "Fleetwing", "Gladheart", "Gladshore", "Gladwind", "Goldenbrook", "Goldencloud", "Goldenhair", "Goodroot", "Goodwood", "Greendale", "Greenfeather", "Greenglade", "Hawkhelm", "Hawkstar", "Hawkwood", "Hawkstar", "Hawkwood", "Hawkstar", "Keeneye", "Keengaze", "Keensight", "Kindheart", "Kindwater", "Lightfoot", "Lightwing", "Longleap", "Longroad", "Oldmane", "Oldtower", "Palemoon", "Palewand", "Purelight", "Puresky", "Seagleam", "Seamist", "Shadowhelm", "Shadowseer", "Shadowstar", "Sharpblade", "Shiningmoon", "Shininghelm", "Silverdawn", "Silverhair", "Silverleaf", "Sure-eye", "Surehand", "Swiftbow", "Swifthand", "Swiftwing", "Slendertree", "Slenderwand", "Soaringleaf", "Soaringsun", "Starbrow", "Starfire", "Stargaze", "Strongarrow", "Stronghand", "Strongtower", "Tallbeam", "Tallhelm", "Tallhelm", "Tallhelm", "Tallhelm", "Tenderheart", "Tendersong", "Truefriend", "Trueseer", "Wiseheart", "Wisewind", "Whitelock", "Whitereed", "Whitetor", "Youngleaf", "Youngstar", "Youngwood"],

    halfling: ["Abrojo", "Acreverde", "Aguaoscura", "Alacaída", "Altocolina", "Alubia", "Amentos", "Anatinos", "Anca", "Árbolalto", "Árbolgrueso", "Árgana", "Barricaseta", "Bayamocha", "Bayasaúco", "Blancopuro", "Bolloculto", "Cachazudo", "Cándido", "Campolejano", "Cachazudo", "Cachazudo", "Ceñidor", "Charcamolino", "Chirimoya", "Cintalarga", "Cochiquera", "Colinaceniza", "Colinaverde", "Conejitos", "Cornejo", "Cubocola", "Cubrecuello", "Cuestabajo", "Dintel", "Duna", "Enaguas", "Espino", "Espolón", "Establogallo", "Exaltado", "Fajatrenzada", "Florblanca", "Florviento", "Florápida", "Flores", "Gancho", "Garañón", "Garrafón", "Gorrión", "Granocebada", "Hebillamiga", "Hojalaurel", "Jalalibros", "Lenteja", "Madriguera", "Manduca", "Manzana", "Manzanaverde", "Matacardo", "Mecehierba", "Montículo", "Panzatirante", "Pastafácil", "Pavaalegre", "Pieloco", "Pieraro", "Piesduros", "Piesencrespados", "Piesesquivos", "Pradobajo", "Riba", "Refunfuño", "Rompetochos", "Rocaraíz", "Sacoespino", "Sacrifición", "Sacolleno", "Sinculo", "Sonajahueso", "Soplacuerno", "Surcos", "Telapétalo", "Tiemblapanza", "Tizalarga", "Tonel", "Tripagrog", "Tropezíon", "Trotehermoso", "Tuétano", "Ulmaria", "Varasauce", "Vejete", "Vino-fuerte", "Zagamanzano", "Zampatartas", "Zarza"],

    enano: ["Al", "Ala", "Ath", "Athran", "Bal", "Bala", "Bara", "Bel", "Bela", "Bok", "Bor", "Bur", "Da", "Dam", "Dora", "Drok", "Drong", "Dur", "Dwal", "Ela", "Elda", "Elan", "Fa", "Far", "Fara", "Fima", "Firen", "Fur", "Fura", "Ga", "Gim", "Gol", "Gollen", "Got", "Gota", "Grim", "Gro", "Grun", "Hak", "Haka", "Har", "Hega", "Hur", "Kad", "Kar", "Kata", "Kaz", "Kaza", "Krag", "Logaz", "Lok", "Lun", "Mo", "Mola", "Mor", "Mora", "Nola", "Nor", "Noran", "Nun", "Oda", "Oka", "Olla", "Olf", "Oth", "Othra", "Ro", "Ror", "Roran", "Ska", "Skalla", "Skalf", "Skar", "Skor", "Skora", "Snor", "Snora", "Sven", "Thar", "Thor", "Thora", "Thron", "Thrun", "Thura", "Un", "Ulla", "Utha", "Vala", "Var", "Vara", "Zak", "Zaka", "Zakan", "Zam", "Zama", "Zara"]
  }

  const nombreRaza_objeto = {

    humano: ["Abelhard", "Abelhelm", "Admund", "Adred", "Adric", "Agis", "Alaric", "Alberic", "Albrecht", "Aldebrand", "Aldred", "Aldric", "Alfreid", "Altmar", "Alric", "Andre", "Andred", "Andric", "Anshelm", "Anton", "Arne", "Arnulf", "Axel", "Axelbrand", "Baldred", "Baldric", "Balthasar", "Barnabas", "Bart", "Bartolf", "Bartomar", "Bernolt", "Bertolf", "Boris", "Bruno", "Burgolf", "Calvin", "Casimir", "Caspar", "Cedred", "Conrad", "Corvin", "Dagmar", "Dankmar", "Dankred", "Diebold", "Diel", "Dietfried", "Dietmar", "Dietmund", "Dietrich", "Dirk", "Donat", "Eber", "Eckel", "Eckhart", "Edgar", "Emil", "Engel", "Engelbert", "Eustasius", "Ewald", "Faber", "Faustus", "Felix", "Ferdinand", "Gerber", "Gerhart", "Gerlach", "Gernar", "Gerolf", "Gilbrecht", "Gisbert", "Giselbrecht", "Gismar", "Goran", "Gosbert", "Goswin", "Gotfried", "Gothard", "Gottolf", "Gotwin", "Gregor", "Greimold", "Grimwold", "Griswold", "Guido", "Gundolf", "Gundred", "Gunnar", "Gunter", "Gustaf", "Hadred", "Hadwin", "Hagar", "Hagen", "Haldred", "Halman", "Hamlyn", "Hans", "Harbrand", "Harman", "Hartmann", "Haug", "Heidric", "Heimar", "Heinfried", "Heinman", "Heinrich", "Helmur", "Henlyn", "Hermann", "Herwin", "Hildebart", "Hildebrand", "Hildemar", "Hildemund", "Hildred", "Hildric", "Horst", "Hugo", "Igor", "Ingwald", "Ingwald", "Jander", "Jekil", "Jodokus", "Johann", "Jonas", "Jorg", "Jorn", "Josef", "Jost", "Jurgen", "Jurgen", "Karl", "Kaspar", "Klaus", "Kleber", "Konrad", "Konradin", "Kurt", "Lamprecht", "Lanfried", "Lanric", "Lanwin", "Leo", "Levin", "Liebert", "Liebrecht", "Liebwin", "Lienhart", "Linus", "Lodwig", "Lothar", "Lucius", "Ludwig", "Luitpold", "Lukas", "Lupold", "Lupus", "Luther", "Lutolf", "Leopold", "Madred", "Magnus", "Mandred", "Manfred", "Mathias", "Max",
      "Maximillian", "Meiner", "Meinhart", "Meinolf", "Mekel", "Merkel", "Nat", "Nathandar", "Nicodemus", "Odamar", "Odric", "Odwin", "Olbrecht", "Oldred", "Oldric", "Ortlieb", "Ortolf", "Orwin", "Oswald", "Osric", "Oswin", "Otfried", "Otto", "Otwin", "Paulus", "Prospero", "Ragen", "Ralf", "Rambrecht", "Randulf", "Ranulf", "Ranald", "Reikhard", "Rein", "Reiner", "Reinhard", "Reinolt", "Reuban", "Rigo", "Roderic", "Rolf", "Rudel", "Rudgar", "Rudolf", "Rudolf", "Rufus", "Ruprecht", "Ruprecht", "Sebastian", "Semund", "Sepp", "Sieger", "Siegfried", "Siegfried", "Siegmund", "Siegfried", "Siegmund", "Sigismund", "Sigric", "Sigric", "Sigismund", "Sigric", "Steffan", "Tankred", "Tankred", "Tilmann", "Tilmann", "Tomas", "Theodoric", "Theodoric", "Valdred", "Valdric", "Valdred", "Valdric", "Varl", "Viggo", "Viktor", "Werner", "Wolkhard", "Wolkhard", "Wolfram", "Wolfhart", "Wolfram", "Wolfram", "Wolfgang", "Wolfgang", "Wolfgang", "Wulf", "Xavier", "Xavier", "Xavier", "Xavier"],

    elfo: NombreElfo(),

    halfling: NombreHalfling(),

    enano: ["Bin", "Bor", "Dil", "Din", "Dok", "Dor", "Drin", "Fin", "Gan", "Gar", "Gil", "Gin", "Gni", "Grom", "Grond", "Grund", "Grunt", "Gul", "Gund", "Gun", "Ki", "Kin", "Krag", "Kri", "Krin", "Li", "Lin", "Lik", "Lok", "Lun", "Min", "Mir", "Nin", "Nir", "Rag", "Rik", "Rin", "Rin", "Rik", "Rik", "Rin", "Rin", "Rin", "Rin", "Rin", "Rin", "Ri", "Rig", "Run", "Rok", "Ror", "Skin", "Tin", "Tok", "Trek", "Trok", "Zin", "Zor"]
  }

  const talentosAleatorios_array = ["Ambidiestro", "Cortés", "Genio aritmético", "Guerrero nato", "Imperturbable", "Imitador", "Intelectual", "Muy fuerte", "Muy resistente", "Oído aguzado", "Pies ligeros", "Puntería", "Recio", "Reflejos rápidos", "Resistencia a enfermedades", "Resistencia a la magia", "Resistencia a venenos", "Robusto", "Sangre fría", "Sexto sentido", "Suerte", "Vista excelente"]

  const habilidadesRaza_objeto = {

    humano: ["Cotilleo", "Hablar idioma(Reikspiel)", "Sabiduría popular (el Imperio)"],

    elfo: ["Hablar idioma (Eltharin)", "Hablar idioma (Reikspiel)", "Sabiduría popular (Elfos)"],

    enano: ["Hablar idioma (Khazalid)", "Hablar idioma (Reikspiel)", "Oficio (Minero, Herrero o Cantero)", "Sabiduría popular (Enanos)"],

    halfling: ["Cotilleo", "Hablar idioma (Halfling)", "Hablar idioma (Reikspiel)", "Oficio (Cocinero o Granjero)", "Sabiduría académica (Genealogía/Heráldica)", "Sabiduría popular (Halfling)"]
  }


  const talentosRaza_objeto = {

    humano: [TalentoAleatorio(), TalentoAleatorio()],

    elfo: ["Afinidad con el Aethyr o Especialista en armas (arco largo)", "Sangre fría o Intelectual", "Visión nocturna", "Vista exelente"],

    enano: ["Artesanía enana", "Audaz", "Odio visceral", "Resistencia a la magia", "Robusto", "Visión nocturna"],

    halfling: ["Especialidad en armas (honda)", "Resistencia al Caos", "Visión nocturna", TalentoAleatorio()]
  }


  function TalentoAleatorio() {

    const talento = talentosAleatorios_array[Math.floor(Math.random() * talentosAleatorios_array.length)]
    return talento;
  }

  function DosDeDiez() {

    const num1 = (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1);
    return num1;
  };

  function NombreElfo() {

    const parte1 = elementosElfo__objeto.elfo1[[Math.floor(Math.random() * elementosElfo__objeto.elfo1.length)]]

    const parte2 = elementosElfo__objeto.elfo2[[Math.floor(Math.random() * elementosElfo__objeto.elfo2.length)]]

    const parte3 = elementosElfo__objeto.elfo3[[Math.floor(Math.random() * elementosElfo__objeto.elfo3.length)]]

    const nombreElfo = parte1 + parte2 + parte3
    return [nombreElfo]
  }

  function NombreHalfling() {

    const parte1 = elementosHalfling_objeto.halfling1[[Math.floor(Math.random() * elementosHalfling_objeto.halfling1.length)]]

    const parte2 = elementosHalfling_objeto.halfling2[[Math.floor(Math.random() * elementosHalfling_objeto.halfling2.length)]]

    const nombreHalfling = parte1 + parte2
    return [nombreHalfling]
  }

  // Define las profesiones para cada raza
  const profesionesRaza_objeto = {

    humano: ["Alborotador", "AprendizDeHechicero", "Alguacil", "BarberoCirujano", "Batelero", "Guardaespaldas", "Osamentero", "Cazarrecompensas", "Burgues", "MiembroDeSequito", "Carbonero", "Cochero", "Artista", "EspadachinEstaliano", "Barquero", "Pescador", "LadronDeTumbas", "HechiceroVulgar", "Cazador", "Iniciado", "Carcelero", "KossarKislevita", "GuardiaMarina", "Mercenario", "Mensajero", "Miliciano", "Minero", "Noble", "BerserkerNordico", "Forajido", "Escolta", "Campesino", "Gladiador", "Sicario", "Cazarratas", "PatrullaDeCaminos", "Bribon", "Escriba", "Marinero", "Sirviente", "Contrabandista", "Soldado", "Escudero", "Estudiante", "Ladron", "Maton", "Peajero", "SaqueadorDeTumbas", "Menestral", "Vagabundo", "AyudaDeCamara", "Vigilante", "Leñador", "Fanatico"],

    enano: ["Alborotador", "Guardaespaldas", "Burgues", "Cochero", "Artista", "Cazador", "Carcelero", "GuardiaMarina", "Mercenario", "Miliciano", "Minero", "Noble", "Forajido", "Gladiador", "Sicario", "Cazarratas", "PortadorDeRunas", "Escriba", "Marinero", "Sirviente", "Rompescudos", "Contrabandista", "Soldado", "Estudiante", "Ladron", "Peajero", "SaqueadorDeTumbas", "Menestral", "Matatrolls", "Vigilante"],

    halfling: ["Alborotador", "BarberoCirujano", "Osamentero", "Cazarrecompensas", "Burgues", "MiembroDeSequito", "Carbonero", "Artista", "Barquero", "PatrullaFronteriza", "Pescador", "LadronDeTumbas", "Cazador", "Mercenario", "Mensajero", "Miliciano", "Forajido", "Campesino", "Cazarratas", "Bribon", "Sirviente", "Contrabandista", "Soldado", "Estudiante", "Ladron", "Peajero", "SaqueadorDeTumbas", "Menestral", "Vagabundo", "AyudaDeCamara", "Vigilante"],

    elfo: ["AprendizDeHechicero", "Artista", "Embajador", "Cazador", "GuerreroDeCamarilla", "Mercenario", "Mensajero", "Forajido", "Escolta", "Bribon", "Escriba", "Marinero", "Estudiante", "Ladron", "Menestral", "Vagabundo"],
  };

  const profesiones_objeto = {

    Alborotador: {
      Nombre: "Alborotador",
      HA: "+5%",
      HP: "+5%",
      F:  "---",
      R:  "+5%",
      Ag: "+5%",
      Int:"+10%",
      FV: "---",
      Em: "+10%",
      A:  "---",
      H:  "2",
      M:  "---",
      Mag:"---",
      Habilidades: "Carisma, Esconderse, Hablar idioma (Bretón o Tileano), Hablar idioma (Reikspiel), leer y escribir, Persepcion, Sabiduria academica (Historia) o Cotilleo,Sabiduría académicica (Leyes) o Sabiduría popular (el Imperio)",
      Talentos: "!A correr!, Don de gentes, Sangre fría o Pelea callejera",
      Enseres: "Armadura ligera (chaqueta de cuero), una muda de ropa de buena artesania, 2d10 octavillas para causas diversas",
      Accesos: "Burges, capitán, escriba, estudiante, fanatico, heraldo, salteador de camínos, sirviente",
      Salidas: "Bribon, charlatán, demagogo, fanatico, forajido, politico",
    },

    Alguacil: {
      Nombre: "Alguacil",
      HA: "+5%",
      HP: "+5%",
      F: "+5%",
      R: "---",
      Ag: "---",
      Int: "+10%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Criar animales o Cotilleo, Intimidar o Sabiduría popular (el Imperio), Leer/escribir, Mando u Orientación, Montar, Percepción, Sabiduría académica (Leyes)",
      Talentos: "Don de gentes, Etiqueta o Genio aritmético",
      Enseres: "Armadura ligera (chaqueta de cuero y gorro de cuero), caballo de monta con silla y arreos, una muda de ropa de buena artesania",
      Accesos: "Carcelero, guardaespaldas",
      Salidas: "Contrabandista, extorsionador, miliciano, peajero, político, sicario"
    },

    AprendizDeHechicero: {
      Nombre: "Aprendiz de hechizero",
      HA: "---",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+5%",
      Int: "+10%",
      FV: "15",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "+1",
      Habilidades: "Buscar, Canalización, Hablar idioma (Clásico), Leer/escribir, Lengua arcana (Magia), Percepción, Sabiduría académica (Magia), Sentir magia Talentos: Afinidad con d Acthyr o Manos rápidas, Intelectual",
      Talentos: "Afinidad con d Acthyr o Manos rápidas, Intelectual o Muy resistente, Magia pueril (Arcana)",
      Enseres: "Báculo, mochila, libro impreso",
      Accesos: "Erudito, escriba, estudiante, hechicero vulgar",
      Salidas: "Erudito, escriba, hechictro adepto"
    },

    Artista: {
      Nombre: "",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Actuar (dos cualquiera) Carisma, Criar animales o Nadar,Hablar idioma (Reikspiel), Percepción, Sabiduría popular (el Imperio),Tasar o Cotilleo. Una cualquiera de las siguientes: Adiestrar animales, Carisma animal, Charlatanería, Escalar, Hipnotismo, Montar, Prestidigitacion, Ventriloquia, Contorcionismo",
      Talentos: "Dos cualesquiera de los siguientes: Certero, Desenvainado rápido, Don de gentes, Actútación acrobática, Especialista en armas (Arrojadizas) , lmítador, Lucha, Muy fuerte, Reflejos rápidos, Contorcionista",
      Enseres: "Armadura ligera (justillo de cuero), uno cualquiera de los siguientes: instrumento musical (cualquiera), herramientas del oficio (actor), cuchillos arrojadizos, 2 hachas arrojadizas. uno cualquiera de los siguientes: disfraz, una muda de ropa de buena anesanía",
      Accesos: "Bribón, heraldo, ladrón, vagabundo",
      Salidas: "Bribón, charlatán, juglar, ladrón, vagabundo"
    },

    AyudaDeCamara: {
      Nombre: "AyudaDeCamara",
      HA: "---",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Charlataneria, Cotilleo o Hablar idioma (Bretón o Reikspiel), Leer/escribir, Percepción, Regatear, Sabiduria académica (Genealogía/Heráldica), Tasar",
      Talentos: "Etiqueta, Negociador o Viajero curtido, Sangre fria o cortéz",
      Enseres: "Colonia , monedero, dos mudas de ropa de la mejor artesania, uniforme",
      Accesos: "Burgués, sirviente",
      Salidas: "Administrador, bribon, escudero, estudiante, heraldo"
    },

    BarberoCirujano: {
      Nombre: "Barbero cirujano",
      HA: "+5%",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+10%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Conducir o Nadar, Hablar idioma (Bretón, Reikspiel o Tileano), Leer/escribir, Oficio (Boticario), Percepción, Regatear, Sanar",
      Talentos: "Cirugía, Cortés o Muy resistente, Resistencia a enfermedades o Intelectual",
      Enseres: "Herramientas del oficio (barbero cirujano)",
      Accesos: "Estudiante, Iniciado",
      Salidas: "Galeno, interrogador, ladrón de tumbas, menestral, vagabundo"
    },

    Barquero: {
      Nombre: "Barquero",
      HA: "+5%",
      HP: "+5%",
      F: "+10%",
      R: "+5%",
      Ag: "+5%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Cotilleo o Intimidar, Nadar, Percepción, Regatear, Remar, Sabiduría popular (el Imperio), Tasar o Lengua secreta (Gerga montaraz)",
      Talentos: "Especialista en armas (Pólvora) o Pelea callejera, Punteria o Cortés",
      Enseres: "Ballesta con 10 virotes o trabuco con suficiente pólvora y munición para 10 disparos, armadura ligera (chaqueta de cuero)",
      Accesos: "Cochero, contrabandista, peajero",
      Salidas: "Batelero, contrabandista, marinero, patrulla de caminos, salteador de caminos"
    },

    Batelero: {
      Nombre: "Batelero",
      HA: "+10%",
      HP: "+5%",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Conrumir alcohol o Cotilleo,Lengua secreta (jerga montaraz) o Hablar idioma (Kisleviano), Nadar, Navegar, Orientación, Percepción, Remar, Sabidurla popular (el Imperio o Kislev), Supervivencia",
      Talentos: "Orientación, Viajero curtido",
      Enseres: "Armadura ligera (chaqueta de cuero), bote de remos",
      Accesos: "Barquero, contrabandista",
      Salidas: "Contrabandista, guardia marina, marinero, navegante, pescador"
    },

    BerserkerNordico: {
      Nombre: "Berserker nordico",
      HA: "+5%",
      HP: "---",
      F: "+10%",
      R: "+10%",
      Ag: "---",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Actuar (Narrador), Consumir alcohol, Hablar idioma (Nórdico), Intimidar, Nadar, Sabiduría popular (Norsca)",
      Talentos: "Amenazador, Desenvainado rápido, Especialista en armas (A dos manos), Frenesi",
      Enseres: "Armadura ligera (justillo de cuero), botella de licor, arma grande o escudo",
      Accesos: "Ninguno",
      Salidas: "Gladiador, marinero, mercenario, sargento, veterano"
    },

    Bribon: {
      Nombre: "Bribon",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+5%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Actuar (Actor o Narrador), Buscar o Lengua secreta (Jerga de ladrones), Carisma, Charlataneria, cotilleo o Regatear, Hablar idioma (Reikspiel), Jugar o Código secreto (Ladrón), Percepción, Tasar",
      Talentos: "!A correr! o Callejeo, Don de gentes, Suerte o Sexto sentido",
      Enseres: "Una muda de ropa de la mejor artesanía o dados o baraja de cartas, 1d10 co.",
      Accesos: "Alborotador, artista, asesino,ayudante de cámara, duelista, embajador, espadachin estaliano, ladrón, marinero, noble",
      Salidas: "Artista, charlatán, demagogo, forajido, ladrón,sirviente"
    },

    Burgues: {
      Nombre: "Burgues",
      HA: "+5%",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+5%",
      Int: "+10%",
      FV: "+5%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Conducir, Cotilleo o Leer/escribir, Hablar idioma (Bretón, Kisleviano o Tileano), Hablar idioma (Reikspiel) , Percepción , Regatear, Sabiduría popular (el Imperio) o Consumir alcohol,Tasar",
      Talentos: "lntelectual o Cortés, Negociador",
      Enseres: "Abaco, lámpara, una muda de ropa de buena artesania",
      Accesos: "Forastero, sirviente",
      Salidas: "Alborotador, ayuda de cámara, menestral, mercader, miliciano, perista, posadero"
    },

    Campesino: {
      Nombre: "Campesino",
      HA: "+5%",
      HP: "+5%",
      F: "+5%",
      R: "+10%",
      Ag: "+5%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Adiestrar animales o Nadar, Carisma animal u Oficio (Cocinero),Conducir u Oficio(Arquero), Criar animales o Carisma, Escalar o Movimiento silencioso, Esconderse, Jugar o Actuar (bailarín o Cantante), Remar o Poner trampas, Supervivencia u Oficio (Granjero)",
      Talentos: "!A correr! o Especialista en armas (Honda), Recio o Errante",
      Enseres: "Honda o báculo, redoma de cuero",
      Accesos: "Ninguno",
      Salidas: "Carbonero, fanático, forajido, menestral, miliciano, osamentero, pescador, político, sirviente"
    },

    Carbonero: {
      Nombre: "Carbonero",
      HA: "+5%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+5%",
      Int: "+5%",
      FV: "+5%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Código secreto (Montaraz), Conducir o Cotilleo, Escalar, Percepción, Regatear, Sabiduría popular (el Imperio) o Esconderse, Supervivencia",
      Talentos: "!A correr!,Intelectual o Muy fuerte",
      Enseres: "3 antorchas, yesquero, arma de mano (hacha)",
      Accesos: "Campesino, cazador, miembro de séquito, minero",
      Salidas: "Batidor, cazador, leñador, minero, vagabundo"
    },

    Carcelero: {
      Nombre: "Carcelero",
      HA: "+10%",
      HP: "---",
      F: "+10%",
      R: "+10%",
      Ag: "---",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Consumir alcohol, Esquivar, Intimidar, Mando, percepción, Sanar o prestidigitación",
      Talentos: "Especialista en armas (Presa), Lucha, Resistencia a enfermedades, Resistencia a venenos",
      Enseres: "Botella de vino común, pichel, uno cualquiera de los siguientes:boleadoras, mangual,red",
      Accesos: "Cazarratas, guardaespaldas",
      Salidas: "Alguacil, cazarratas, guardaespaldas, interrogador, vigilante"
    },

    Cazador: {
      Nombre: "Cazador",
      HA: "---",
      HP: "15",
      F: "---",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "---",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar o Nadar, Código secreto (Montaraz), Esconderse, Movimiento silencioso o Poner trampas, percepción, Rastrear, Supervivencia",
      Talentos: "Puntería o Errante, Recarga rápida, Recio o Especialista en annas (arco largo), Reflejos rápidos o Muy resistente",
      Enseres: "Arco largo con 10 flechas, 2 trampas para animales, material de contraveneno",
      Accesos: "Carbonero, guerrero de camarilla, leñador",
      Salidas: "Batidor, carbonero, cazarrecompensas, guerrero de camarilla, minero, patrulla fronteriza, soldado, tirador"
    },

    Cazarratas: {
      Nombre: "Cazarratas",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "+5%",
      Ag: "+10%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Adiestrar animales , Buscar, Criar animales, Esconderse, Movimienro silencioso, Percepción , Poner trampas",
      Talentos: "Especialista en armas (Honda), Pericia subterránea, Resistencia a enfermedades, Resistencia a venenos",
      Enseres: "Honda con munición, 4 trampas para animales, vara larga con 1d10 ratas muertas, perro pequeño pero fiero",
      Accesos: "Carcelero, ladrón de tumbas, portador de runas, saqueador de tumbas",
      Salidas: "Carcelero, ladrón, ladrón de guante blanco, Ladrón de tumbas, osamentero, rompescudos"
    },

    Cazarrecompensas: {
      Nombre: "Cazarrecompensas",
      HA: "+5%",
      HP: "+10%",
      F: "+5%",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Intimidar, Movimiento silencioso, Percepción, Rastrear, Seguimiento, Supervivencía",
      talentos: "Certero o Golpe poderoso, Errante, Especialista en armas (Presa) , Puntería o Golpe conmocionador",
      Enseres: "Ballesta con 10 virotes, red , armadura ligera (justillo de cuero y gorro de cuero), grilletes, 10 metros de cuerda",
      Accesos: "Cazador, gladiador, guardaespaldas,  kossar kislevita, mercenario, patrulla fronteriza",
      Salidas: "Batidor, cazavampiros, mercenario, sicario, tirador"
    },

    Cochero: {
      Nombre: "Cochero",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+5%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Código secreto (Montaraz), Conducir, Cotilleo o Regatear, Criar animales, Hablar idioma (Bretón, Kisleviano o Tileano), Orientación, Percepción, Sanar o Montar",
      Talentos: "Desenvainado rápido o Viajero curtido, Especialista en armas (Pólvora)",
      Enseres: "Trabuco con pólvora y munición suficieme para 10 disparos,annadura media (camisa de mallas y chaqueta de cuero), instrumento (corneta de carruaje)",
      Accesos: "Forajido, mensajero",
      Salidas: "Barquero, batidor, contrabandista, forajido, patrulla de caminos, peajero, salteador de caminos"
    },

    Contrabandista: {
      Nombre: "Contrabandista",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "---",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Conducir, Cotilleo o Lengua secreta (Jerga de ladrones), Hablar idioma (Bretón o Kisleviano) o Código secreto (ladrón), Movimiento silencioso, Nadar, Percepción, Regatear, Remar, Tasar",
      Talentos: "Negociador o Callejeo",
      Enseres: "Armadura ligera (chaqueta de cuero), 2 antorchas,caballo de tiro y carreta o bote de remos",
      Accesos: "Alguacil, barquero, batelero, cochero, guardia marina, ingeniero, marinero, miembro de séquito, minero, osamentero, posadero,  rompescudos",
      Salidas: "Barquero, batelero, charlatán, ladrón, marinero, perista,  rompescudos"
    },

    Embajador: {
      Nombre: "Embajador",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "+5%",
      Int: "+10%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Cotilleo, leer/escribir, lengua secreta (jerga gremial), Nadar, Oficio (Mercader), Percepción, Regatear, Sabiduría popular (el Imperio o las Tierras Desoladas), Tasar",
      Talentos: "Negociador o viajero curtido",
      Enseres: "Armadura ligera (chaqueta de cuero), 2 mudas de ropa de buena artesanía, material de escritura",
      Accesos: "Estudiante, menestral",
      Salidas: "Bribón, charlatán, estudiante, marinero, mercader, vagabundo"
    },

    Escolta: {
      Nombre: "Escolta",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Criar animales, Montar, Movimiento silencioso, Orientación, Percepción, Rastrear, Supervivencia",
      Talentos: "Especialista en armas (Presa), Orientación, Sangre fria o Muy fuerte",
      Enseres: "arco o ballesta con 10 flechas o virotes, red, látigo o lazo, armadura ligera (chaqueta de cuero), escudo, 10 metros de cuerda, caballo de monta con silla y arreos",
      Accesos: "Guerrero de camarilla, mensajero, patrulla de caminos, soldado",
      Salidas: "Batidor, cochero, mercenario, parrulla de caminos, salteador de caminos"
    },

    Escriba: {
      Nombre: "Escriba",
      HA: "---",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+10%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Hablar idioma (Bretón), Hablar idioma (Clásico), Hablar idioma (Reikspiel o Tileano), Leer/escribir, Lengua secreta (Jerga gremial), Oficio (Calígrafo), Percepción, Sabiduría acadéinica (una cualquiera), Sabiduría popular (el Imperio) o Cotilleo",
      Talentos: "Lingüística",
      Enseres: "Cuchillo, un par de velas, cera, s cerillas, libro con ilustraciones, material de escritura",
      Accesos: "Aprendiz de hechizero, iniciado",
      Salidas: "Alborotador, aprendiz de hechicero, erudito, iniciado,navegante"
    },

    Escudero: {
      Nombre: "Escudero",
      HA: "+10%",
      HP: "+5%",
      F: "+5%",
      R: "+5%",
      Ag: "+5%",
      Int: "---",
      FV: "---",
      Em: "+5%",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Adiestrar animales, Carisma o Cotilleo, Criar animales, Esquivar, Hablar idioma (Bretón o Reikspiel), Montar, Sabiduña académica (Genealogía/Heráldica) o Sabiduría popular (Bretonia)",
      Talentos: "Especialista en armas (Caballeria), Etiqueta, Golpe poderoso",
      Enseres: "Pica de jinete, armadura media (camisa de malla, cofia de malla, chaqueta de cuero), escudo, caballo con silla y arreos",
      Accesos: "Ayuda de cámara, heraldo, noble",
      Salidas: "Caballero, forajido, noble, sargento, veterano"
    },

    EspadachinEstaliano: {
      Nombre: "Espadachin estaliano",
      HA: "15",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Esquivar, Hablar idioma (Estaliano), Leer/escribir, Sabiduría académica (Ciencia) , Sabiduría popular (Estalia)",
      Talentos: "Desenvainado rápido o Golpe letal, Especialista en annas (Esgrima), Golpe poderoso, Reflejos rápidos o Brioso",
      Enseres: "florete o estoque, una muda de ropa de la mejor artesanía, perfume o colonia, poción curativa",
      Accesos: "Ninguno",
      Salidas: "Bribón, duelista, guardaespaldas, salteador de caminos, sicario"
    },

    Estudiante: {
      Nombre: "Estudiante",
      HA: "---",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma o Consumir alcohol, Hablar idioma (clásico),Hablar idioma (Reikspiel), Leer/escribir, Percepción, Sabiduría académica (una cualquiera), Sabiduría académica (una cualquiera) o Cotilleo, Sanar o Buscar",
      Talentos: "Etiqueta o Lingüistica, intelectual o Cortes, Viajero curtido o Genio aritmético",
      Enseres: "Dos libros de texto correspondientes a las habilidades de Sabiduría, material de escritura",
      Accesos: "Ayuda de cámara, embajador, juglar, ladrón de tumbas,noble",
      Salidas: "Alborotador, aprendiz de hechicero, barbero cirujano, embajador, erudito, galeno, ingeniero, iniciado"
    },

    Fanatico: {
      Nombre: "Fanatico",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+10%",
      Ag: "---",
      Int: "---",
      FV: "+10%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Intimidar, Leer/escribir, Sabiduría académica (Teología), Sabiduría popular (el Imperio)",
      Talentos: "Don de gentes, Especialista en armas (Mangual), Recio o cortés, Sangre fría o Muy fuerte",
      Enseres: "Mangual o maza de armas, armadura ligera (chaqueta de cuero), botella de licor de buena artesania",
      Accesos: "Alborotador, campeón judicial, campesino, iniciado, menestral",
      Salidas: "Alborotador, flagelante, forajido, fraile, iniciado"
    },

    Forajido: {
      Nombre: "Forajido",
      HA: "+10%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Conducir o Montar, Cotilleo o Código secreto (Ladrón), Criar animales o Sabiduría popular (el Imperio), Escalar, Esconderse, Esquivar, Movimiento silencioso, percepción, poner trampas o Nadar",
      Talentos: "Certero o Golpe conmocionador, Errante o Callejeo",
      Enseres: "Arco con 10 flechas, armadura ligera (justillo de cuero), escudo",
      Accesos: "Alborotador, bribón, campesino, charlatán, cochero, escudero, fanático, guardia marina, hechizero vulgar, leñador, mercenario, miliciano, patrulla de caminos, peajero, posadero",
      Salidas: "Demagogo, ladrón, salteador de caminos, vagabundo, veterano"
    },

    Gladiador: {
      Nombre: "Gladiador",
      HA: "15",
      HP: "---",
      F: "---",
      R: "+10%",
      Ag: "+10%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Esquivar, Intimidar",
      Talentos: "Desarmar o Lucha, Desenvainado rápido o Golpe letal, Especialista en armas (A dos manos), Especialista en armas (Mangual),Especialista en armas (Parada), Golpe poderoso, Muy fuerte o Imperturbable",
      Enseres: "Mangual o arma grande, cesto, escudo o rodela, armadura media (camisa de mallas y chaqueta de cuero)",
      Accesos: "Bersérker nórdico, matón, rompescudos, sicario",
      Salidas: "Cazarrccompensas,  matatrolls, mercenario, sicario, veterano"
    },

    GuerreroDeCamarilla: {
      Nombre: "Guerrero de camarilla",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Escalar, Esconderse, Esquivar, Movimiento silencioso, Percepción, Rastrear , Sanar o Buscar, Supervivencia",
      Talentos: "Punteria o Errante, Recarga rápida o Guerrero nato",
      Enseres: "Arco elfico con 10 flechas, armadura ligera chaqueta de cuero)",
      Accesos: "Cazador, mensajero",
      Salidas: "Batidor, cazador, escolta, vagabundo, Veterano"
    },

    Guardaespaldas: {
      Nombre: "Guardaespaldas",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+5%",
      Int: "---",
      FV: "---",
      Em: "---",
      A: "+1",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Esquivar, Intimidar, Percepción, Sanar",
      Talentos: "Desarmar o Desenvainado rápido, Especialista en armas (Arrojadizas), Especialista en armas (Parada), Golpe conmocionador , Muy fuerte o muy resistente, Pelea callejera",
      Enseres: "Rodela, cesto, un par de hachas arrojadizas o cuchillos arrojadizos, armadura ligera (chaqueta de cuero)",
      Accesos: "Carcelero, espadachin estaliano, matón, mercenario",
      Salidas: "Alguacil, carcelero, cazarrecompensas, extorsionador, interrogador, mercenario, sicario"
    },

    GuardiaMarina: {
      Nombre: "Guardia marina",
      HA: "+10%",
      HP: "+10%",
      F: "+10%",
      R: "---",
      Ag: "+5%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "+1",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Consumir alcohol,Cotilleo o Lengua secreta (Jerga militar), Esquivar, Intimidar, Nadar, Remar, Sabiduría popular (la Tierras Desoladas) o Jugar",
      Talentos: "Desarmar o Desenvainado rápido, Golpe conmocionador, Golpe poderoso",
      Enseres: "Arco o ballesta con 10 flechas o virotes, armadura ligera (chaqueta de cuero), escudo, gancho de escalada, 10 metros de cuerda",
      Accesos: "Batelero, marinero, pescador",
      Salidas: "Contrabandista, forajido, matón, sargento,segundo de a bordo"
    },

    HechiceroVulgar: {
      Nombre: "Hechicero vulgar",
      HA: "---",
      HP: "---",
      F: "---",
      R: "+5%",
      Ag: "+5%",
      Int: "+5%",
      FV: "+10%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "+1",
      Habilidades: "Buscar, Canalización, Carisma o lntimidar,carisma animal u Oficio (Boticario), Criar animales o Regatear, Percepción, Sanar o Hipnotismo, Sentir magia",
      Talentos: "Magia pueril (Vulgar), Magia vulgar",
      Enseres: "Poción curativa , capucha",
      Accesos: "Ninguno",
      Salidas: "Aprendiz de hechicero, charlatán, forajido, iniciado, vagabundo"
    },

    Iniciado: {
      Nombre: "Iniciado",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "+5%",
      Ag: "---",
      Int: "+10%",
      FV: "+10%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma , Hablar idioma (Clásico), Hablar idioma (Reikspiel), Leer/escribir, Percepción, Sabiduria académica (Astronomia o Historia), Sabiduña académica (Teología), Sanar",
      Talentos: "Córtes o Guerrero nato, Don de gentes, Reflejos rápido o Muy fuerte",
      Enseres: "Túnica símbolo religioso (consultar Capítulo 8: Religión y creencias para ver los tipos que hay)",
      Accesos: "Caballero, cazador de brujas, cazavampiros, escriba, estudiante, fantico, hechicero vulgar",
      Salidas: "Barbero cirujano, demagogo, escriba, fanático, fraile, sacerdote"
    },

    KossarKislevita: {
      Nombre: "Kossar kislevita",
      HA: "+10%",
      HP: "+10%",
      F: "---",
      R: "+10%",
      Ag: "---",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Consumir alcohol, Esquivar, Hablar idioma (Kisleviano), Jugar o Cotilleo, Percepción, Sabiduría popular (Kislev), Supervivencia",
      Talentos: "Especialista en armas (A dos manos), Golpe letal",
      Enseres: "Arco con 10 flechas, arma grande (hacha de dos manos), armadura media (cota de malla, chaqueta de cuero y grebas de cuero)",
      Accesos: "Ninguno",
      Salidas: "Cazarreconpensas, mercenario, rompescudos, sargento, veterano"
    },

    Ladron: {
      Nombre: "Ladron",
      HA: "+5%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "15",
      Int: "+5%",
      FV: "---",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Carisma o Escalar, Esconderse o Forzar cerraduras, Leer/escribir o Prestidigitación, Lengua secreta (Jerga de ladrones) o Código secreto (Ladron), Movimiento silencioso, Percepción, Tasar o Disfraz",
      Talentos: "Gato callejero o callejeo, Genio aritmético o experto en trampas",
      Enseres: "Armadura ligera (justillo de cuero), saca, ganzúas, 10 metros de cuerda",
      Accesos: "Artista, bribón, cazarratas, contrabandista, forajido, interrogador, ladron de tumbas, miliciano, peajero, saqueador de tumbas, sicario, sirviente, vagabundo",
      Salidas: "Artista, bribón, charlatán, ladrón de guante blanco, perista, saqueador de tumbas"
    },

    LadronDeTumbas: {
      Nombre: "Ladron de tumbas",
      HA: "+5%",
      HP: "+5%",
      F: "+5%",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Codigo secreto (Ladron), Conducir, Cotilleo o Regatear, Escalar, Movimiento silencioso, Percepción",
      Talentos: "!A correr!, Callejeo o Imperturbable, Resistencia a enfermedades",
      Enseres: "Lámpara, aceite para lamparas, pico, saca, pala",
      Accesos: "Barbero cirujano, cazarratas, osamentero",
      Salidas: "Cazarratas, estudiante, ladrón, ladrón de guante blanco, perista"
    },

    Leñador: {
      Nombre: "Leñador",
      HA: "+10%",
      HP: "---",
      F: "+10%",
      R: "---",
      Ag: "+5%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Codigo secreto (Montaraz), Escalar, Esconderse, Lengua secreta (Jerga montaraz), Movimiento silencioso, Percepción, Rastrear o Poner trampas",
      Talentos: "Errante, Especialista en armas (A dos manos), Pies ligeros o Muy resistente",
      Enseres: "Arma grande (hacha de dos manos), armadura ligera (chaqueta de cuero), material de contraveneno",
      Accesos: "Carbonero, vagabundo",
      Salidas: "Batidor, cazador, forajido, miliciano, vagabundo"
    },

    Marinero: {
      Nombre: "Marinero",
      HA: "+10%",
      HP: "+5%",
      F: "+10%",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "---",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Consumir alcohol o Percepción, Escalar, Esquivar, Hablar idioma (Breton, Nórdico o Tileano), Nadar, Navegar, Remar, Sabiduria popular (Bretonia, Norsca,Tileas, Tierras desoladas)",
      Talentos: "Golpe poderoso o Brioso, Recio o Pelea callejera, Viajero curtido",
      Enseres: "Armadura ligera (justillo de cuero), botella de licor de mala artesania",
      Accesos: "Barquero, batelero, berserker nórdico, contrabandista, embajador, pescador",
      Salidas: "Bribon, contrabardista, guardia marina, navegante, segundo de a bordo"
    },

    Matatrolls: {
      Nombre: "Matatrolls",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+5%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "+1",
      H: "3",
      M: "---",
      Mag: "---",
      Habilidades: "Consumir alcohol, Esquivar, Intimidar",
      Talentos: "Desarmar o Desenvainado rápido, Especialista en annas (A dos manos), Golpe paderoso, Pelea callejera, Recio, Reflejos rápidos o Muy resistente",
      Enseres: "Arma grande, armadura ligera (justillo de cuero), una botella de licor de mala artesanía",
      Accesos: "Gladiador",
      Salidas: "Matagigantes"
    },

    Maton: {
      Nombre: "Maton",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "---",
      Int: "---",
      FV: "+5%",
      Em: "+5%",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Consumir alcohol, Esquivar, Intimidar, Jugar, Lengua secreta (Jerga de ladrones)",
      Talentos: "Desarmar, Golpe conmocionador, Golpe letal o Lucha, Resistencia a venenos o Desenvainado rápido, Sangre fria o Reflejos rápidos",
      Enseres: "Cesto, armadura media (camisa de mallas y justillo de cuero)",
      Accesos: "Guardia marina, sicario",
      Salidas: "Extorsionador, gladiador, guardaespaldas,  interrogador, mercenario"
    },

    Menestral: {
      Nombre: "Menestral",
      HA: "---",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Conducir, Criar animales o Cotilleo, Leer/ escribir, Lengua secreta (Jerga gremial) , Oficio (dos cualesquiera) , Percepción, Regatear, Tasar",
      Talentos: "Negociador o lntelectual",
      Enseres: "Armadura ligera (justillo de cuero), 1d10 co",
      Accesos: "Barbero cirujano, burgués, campesino, miembro de séquito, vigilante",
      Salidas: "Artesano, embajador, fanático, ingeniero, mercader, miliciano"
    },

    Mensajero: {
      Nombre: "Mensajero",
      HA: "---",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Codigo secreto (Batidor), Criar animales, Hablar idioma (Reikspiel), Montar, Nadar, Orientación, Percepción, Sabiduría popular (el Imperio o las Tierras Desoladas) o Cotilleo, Supervivencia",
      Talentos: "Orientación, Viajero curtido",
      Enseres: "Armadura ligera (chaqueta de cuero), estuche con mapas, caballo de monta con silla y arreos o poni (para los halflings), escudo",
      Accesos: "Miliciano, patrulla de caminos, sirviente",
      Salidas: "Batidor, cochero, escolta, guerrero de camarilla, heraldo, patrulla de caminos, soldado"
    },

    Mercenario: {
      Nombre: "Mercenario",
      HA: "+10%",
      HP: "+10%",
      F: "+5%",
      R: "+5%",
      Ag: "+5%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Conducir o Montar, Cotilleo o Regatear, Criar animales o Jugar, Esquivar, Hablar idioma (Tileano) o Nadar, Lengua secreta (Jerga militar), Percepción o Buscar, Sabiduría popular (Bretonia, Kislev o Tilea)",
      Talentos: "Certero o Golpe conmocionador, Desarmar o Desenvainado rápido, Recarga rápida o Golpe poderoso",
      Enseres: "Ballesta con 10 virotes, escudo, armadura media (camisa de mallas y chaqueta de cuero), poción curativa",
      Accesos: "Bersérker nórdico, cazarrecompensas, demagogo, escolta, gladiador, guardaespaldas, kossar kislevita, matón, miliciano, minero, patrulla fronteriza, soldado, vigilante",
      Salidas: "cazarrecompensas, forajido, guardaespaldas, rompescudos, sargento, veterano"
    },

    MiembroDeSequito: {
      Nombre: "Miembro de sequito",
      HA: "---",
      HP: "---",
      F: "---",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Carisma o Tasar, Cotilleo, Criar animales o Conducir, Percepción, Regatear, una cualquiera de las siguientes: Oficio (Arcabucero, Armero,Arquero,Cartógrafo, Cocinero, Forjador de armaduras, Herbolario, Herrero, Mercader o Sastre) , Hablar idioma (Bretón, Kisleviano o Tileano), prestidigitación",
      Talentos: "!A correr!, Negociador o Pelea callejera, Recio o Cortés, Resistencia a enfermedades o Viajero curtido",
      Enseres: "Amuleto de buena suerte o herramientas del oficio, bolsa, tienda",
      Accesos: "Osarnentero,sirviente",
      Salidas: "Carbonero,contrabandista, charlatán, espía, menestral, sirviente, vagabundo"
    },

    Miliciano: {
      Nombre: "Miliciano",
      HA: "+10%",
      HP: "+5%",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "---",
      FV: "---",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Conducir o Nadar, Criar animales, Esquivar,Jugar o Cotilleo, Oficio (cualquiera), Percepción, Supervivencia",
      Talentos: "Especialista en armas (A dos manos) o Recarga rápida, Golpe poderoso",
      Enseres: "Alabarda o arco con 10 flechas, armadura ligera (chaqueta de cuero y gorro de cuero), uniforme",
      Accesos: "Alguacil, artesano, burgués, campesino, leñador, menestral, mercader, pescador",
      Salidas: "Artesano, forajido, ladrón, mensajero, mercenario, patrulla fronteriza, sargento"
    },

    Minero: {
      Nombre: "Minero",
      HA: "+5%",
      HP: "+5%",
      F: "+10%",
      R: "+5%",
      Ag: "---",
      Int: "+5%",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Criar animales, Escalar, Esconderse o Conducir, Oficio (Minero o Prospector), Orientación, Percepción, Tasar o Supervivencia",
      Talentos: "Especialista en armas (A dos manos), Muy resistente o Guerrero nato, Orientación",
      Enseres: "Arma grande (Pico de dos manos), armadura ligera (chaqueta de cuero), pico, pala, lámpara de seguridad, aceite de lámpara",
      Accesos: "Carbonero, cazador",
      Salidas: "Batidor, carbonero, contrabandista, ingeniero, mercenario, rompescudos"
    },

    Noble: {
      Nombre: "Noble",
      HA: "+10%",
      HP: "+5%",
      F: "---",
      R: "---",
      Ag: "+5%",
      Int: "+5%",
      FV: "+5%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Carisma, Charlatanería o Mando, Consumir alcohol o Actuar (Músico), Hablar idioma (Reikspiel), Jugar o Cotilleo, Leer/escribir, Montar, Sabiduria popular (el Imperio)",
      Talentos: "Etiqueta, lntelectual o especialista en armas (Esgrima), Intrigante o Especialista en armas (Parada), Suerte o Don de gentes",
      Enseres: "Florote, main gauche, atuendo de noble, caballo de monta con silla y arreos, 1d10 co, joyas por valor de 6d10 co",
      Accesos: "Administrador, escudero",
      Salidas: "Bribón, cortesano, escudero, estudiante, herreruelo, político"
    },

    Osamentero: {
      Nombre: "Osamentero",
      HA: "+5%",
      HP: "---",
      F: "+5%",
      R: "+10%",
      Ag: "+5%",
      Int: "---",
      FV: "+5%",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Carisma o Cotilleo, Conducir, Criar animales, Percepción, Regatear, Sabiduría popular (el Imperio), Tasar",
      Talentos: "Recio o Resistencia a enfermedades, Sangre fría o Callejeo",
      Enseres: "Carreta, 3 sacas",
      Accesos: "Campesino, cazarratas,vagabundo",
      Salidas: "Contrabandista, ladrón de guante blanco, ladrón de tumbas, miembro de séquito, perista"
    },

    PatrullaDeCaminos: {
      Nombre: "Patrulla de camino",
      HA: "+10%",
      HP: "+10%",
      F: "+5%",
      R: "---",
      Ag: "+10%",
      Int: "+5%",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Conducir, Criar animales, Montar, Orientación, Percepción, Rastrear o Codigo secreto (Batidor), Sabiduría popular (el Imperio) o Cotilleo, Supervivencia",
      Talentos: "Desenvainado rápido o Recarga rápida, Especialista en armas (Pólvora)",
      Enseres: "Pistola con 10 balas y pólvora, armadura media (camisa de mallas y chaqueta de cuero),escudo, 10 metros de cuerda,caballo de guerra ligero con silla y arreos (o poni para los halflings)",
      Accesos: "Barquero, cochero, escolta, mensajero, vigilante",
      Salidas: "Batidor, escolta, forajido, mensajero, peajero, salteador de caminos, sargento"
    },

    PatrullaFronteriza: {
      Nombre: "PatrullaFronteriza",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "+5%",
      Ag: "+10%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Esconderse, Movimiento silencioso, Percepción, Rastrear, Sabiduría académica (Nigromancia) o Sabiduria popular (el Imperio), Supervivencia",
      Talentos: "Disparo infalible o Recarga rápida, Errante o Desenvainado rápido, Pies ligeros o Intelectual",
      Enseres: "Honda con munición, lámpara, aceite de lámpara, pala, poni con silla y arreos",
      Accesos: "Cazador, miliciano, peajero",
      Salidas: "Batidor, cazarrecompensas, cazavampiros, mercenario, vagabundo"
    },

    Peajero: {
      Nombre: "Peajero",
      HA: "+10%",
      HP: "+5%",
      F: "+5%",
      R: "+10%",
      Ag: "+5%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Cotilleo o Regatear, Esquivar, Hablar idioma (Bretón, Kisleviano o Tileano) , Leer/escribir, Percepción, Tasar",
      Talentos: "Reflejos rápidos o Puntería",
      Enseres: "Cofre, ballesta con 10 virotes, armadura media (camisa de mallas y justillo de cuero), escudo, 1d10 co",
      Accesos: "Alguacil, cochero,patrulla de caminos",
      Salidas: "Barquero, forajido, ladrón, patrulla fronteriza, político, salteador de caminos, soldado"
    },

    Pescador: {
      Nombre: "Pescador",
      HA: "---",
      HP: "+5%",
      F: "+10%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Consumir alcohol o Regatear, Hablar idioma (Reikspiel o Nórdico), Nadar, Navegar, Orientación u Oficio (Mercader), Percepción, Remar, Sabiduría popular (el Imperio o las Tierras Desoladas), Supervivencia",
      Talentos: "Orientación o Pelea callejera , Recio o Intelectual",
      Enseres: "Anzuelo y sedal, lanza",
      Accesos: "Batelero,  campesino",
      Salidas: "Guardia marina, marinero, mercader, miliciano, navegante"
    },

    PortadorDeRunas: {
      Nombre: "Portador de runas",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "+5%",
      FV: "+5%",
      Em: "---",
      A: "---",
      H: "2",
      M: "+1",
      Mag: "---",
      Habilidades: "Código secreto (Batidor), Esquivar, Nadar, Orientación, Percepción,  Supervivencia",
      Talentos: "!Acorrer!,Muy resistente o Muy fuerte, Orientación, Pies ligeros o Sexto sentido, Recarga rápida",
      Enseres: "Ballesta con 10 virotes, armadura ligera (justillo de cuero), poción curativa, amuleto de buena suerte",
      Accesos: "Rompescudos",
      Salidas: "Batidor, cazarratas,rompescudos, saqueador de tumbas, veterano"
    },

    Rompescudos: {
      Nombre: "Rompescudos",
      HA: "+10%",
      HP: "---",
      F: "+5%",
      R: "+5%",
      Ag: "+10%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Escalar, Esquivar, Orientación, Percepción, Seguimiento",
      Talentos: "Golpe conmocionador, Golpe letal, Golpe poderoso, Oído aguzado o Sangre fría, Orientación",
      Enseres: "Ballesta con 10 virotes, armadura media (cota de malla, chaqueta de cuero y grebas de cuero), escudo, gancho de escalada, 10 metros de cuerda, odre",
      Accesos: "Cazarratas, contrabandista, kossar kislevita, mercenario, minero, portador de runas, saqueador de tumbas",
      Salidas: "Contrabandista, gladiador, portador de runas, saqueador de tumbas, sargento, veterano"
    },

    SaqueadorDeTumbas: {
      Nombre: "Saqueador de tumbas",
      HA: "+10%",
      HP: "---",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+10%",
      FV: "+10%",
      Em: "+10%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Escalar, esconderse o Supervivencia, Forzar cerradura o Movimiento silencioso, Hablar idioma (Oásico, Khazalid o Eltharin), Percepción, Leer/escribir, Sabiduría popular (el Imperio) o Código secreto (Ladrón), Tasar",
      Talentos: "Experto en trampas o Pericia subterránea, Suerte o Sexto sentido",
      Enseres: "Armadura ligera (chaqueta de cuero), palanca, lámpara, aceite de lámpara, 10 metros de cuerda, 2 sacas",
      Accesos: "Ladrón, portador de runas, rompescudos",
      Salidas: "Cazarracas, cazavampiros , ladrón, perista , rompescudos"
    },

    Sicario: {
      Nombre: "Sicario",
      HA: "+10%",
      HP: "---",
      F: "+10%",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+10%",
      Em: "---",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Cotilleo o Regatear, Esquivar, Intimidar, Montar",
      Talentos: "Amenazador o Conés, Desarmar o Desenvainado rápido, Golpe conmocionador, Golpe letal, Golpe poderoso, Pelea callejera",
      Enseres: "Armadura media (camisa de mallas y chaqueta de cuero), escudo, caballo de monta con silla y arreos",
      Accesos: "Alguacil, cazarrecompensas, espadachín estaliano, gladiador, guardaespaldas",
      Salidas: "Duelista, extorcionador, gladiador, ladrón, matón"

    },

    Sirviente: {
      Nombre: "Sirviente",
      HA: "+5%",
      HP: "---",
      F: "+5%",
      R: "---",
      Ag: "+10%",
      Int: "+5%",
      FV: "+10%",
      Em: "+5%",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Charlatanería, Conducir o Buscar, Cotilleo, Criar animales u Oficio (Cocinero), Esquivar, Leer/escribir o Prestidigitación, Percepción, Tasar o Regatear",
      Talentos: "!A correr! u Oído aguzado, Etiqueta o Recio, Reflejos rápidos o Muy resistente",
      Enseres: "Una muda de ropa de buena artesanía, pichel de estaño, yesquero, lámpara de seguridad, aceite de lámpara",
      Accesos: "Bribón, campesino, miembro de séquito",
      Salidas: "Alborotador, ayuda de cámara, burgués, espia, ladrón, mensajero, miembro de séquito, posadero"
    },

    Soldado: {
      Nombre: "Soldado",
      HA: "+10%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "---",
      FV: "+5%",
      Em: "---",
      A: "+1",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Conducir o Montar, Criar animales o Sanar, Esquivar , Intimidar, Jugar o Cotilleo, Sabiduría popular (el Imperio) o Percepción",
      Talentos: "Certero o Golpe poderoso, Desarmar o Desenvainado rápido, Especialista en armas (Pólvora o A dos manos), Golpe conmocionador o Disparo infalible, Golpe letal o Recarga rapida",
      Enseres: "Arma grande (alabarda) o arma de fuego con munición para 10 disparos, escudo, armadura ligera (armadura de cuero completa), uniforme",
      Accesos: "cazador, flagelante, mensajero, peajero, vigilante",
      Salidas: "Escolta, mercenario, sargento, vagabundo, veterano, vigilante"
    },

    Vagabundo: {
      Nombre: "Vagabundo",
      HA: "+5%",
      HP: "+10%",
      F: "---",
      R: "---",
      Ag: "+10%",
      Int: "+5%",
      FV: "---",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Actuar (Bailarín ,Cantante o Narrador) o Codigo secreto (Montaraz o Ladron)' Cotilleo o Lengua secreta (Jerga montaraz o Jerga de ladrones), Movimiento silencioso, Orientacion, Regatear o Nadar, Sabiduría popular (Breconia, Estalia, Kislev o Tilea), sanar o Percepción, Supervivencia",
      Talentos: "Pies ligeros o Errante, Punteria u Orientación, Viajero curtído",
      Enseres: "Mochila, raciones (1 semana), tienda, odre",
      Accesos: "Artista, barbero cirujano, carbonero, embajador, forajido, guerrero de camarilla, hechizero vulgar, ladrón de guante blanco, leñador, miembro de séquito, patrulla fronteriza, soldado",
      Salidas: "Artista, batidor, fraile, ladrón, leñador, osamentero"
    },

    Vigilante: {
      Nombre: "Vigilante",
      HA: "+10%",
      HP: "+5%",
      F: "+5%",
      R: "---",
      Ag: "+5%",
      Int: "+10%",
      FV: "---",
      Em: "+5%",
      A: "---",
      H: "2",
      M: "---",
      Mag: "---",
      Habilidades: "Buscar, Cotilleo, Esquivar, Intimidar, Percepción , Rastrear, Sabiduria académica (Leyes)",
      Talentos: "Desarmar o Pelea callejera, Golpe conmocionador, Golpe poderoso, Sangre fría o Intelectual",
      Enseres: "Armadura ligera (chaqueta de cuero), vara larga con aceite de lámpara, uniforme",
      Accesos: "Carcelero, soldado",
      Salidas: "Extorsionador, menestral, mercenario, patrulla de caminos, sargento, soldado"
    },

  }

  const heridasRaza_objeto = {

    humano: [10, 10, 10, 11, 11, 11, 12, 12, 12, 13],
    
    enano: [11, 11, 11, 12, 12, 12, 13, 13, 13, 14],
    
    halfling: [8, 8, 8, 9, 9, 9, 10, 10, 10, 11],
    
    elfo: [9, 9, 9, 10, 10, 10, 11, 11, 11, 12],
  }

  const alturaRaza_objeto = {

    humano: 165 + DosDeDiez(),
    
    enano: 135 + DosDeDiez(),
    
    halfling: 105 + DosDeDiez(),
    
    elfo: 170 + DosDeDiez()

  }
  const pesoRaza_objeto = {

    humano: [47, 50, 52, 54, 56, 59, 61, 63, 65, 68, 70, 72, 74, 77, 79, 81, 86, 90, 95, 100],

    enano: [40, 43, 45, 47, 50, 52, 54, 56, 59, 61, 63, 65, 68, 70, 72, 74, 77, 79, 81, 84],

    halfling: [34, 34, 36, 36, 38, 38, 40, 43, 45, 45, 47, 50, 52, 54, 56, 59, 61, 63, 65],

    elfo: [36, 38, 40, 43, 45, 47, 50, 51, 56, 59, 61, 63, 65, 68, 70, 72, 74, 77, 79]
  }

  const colorDePelo_objeto = {

    humano: ["Rubio ceniza", "Rubio oscuro", "Rubio", "Cobrizo", "Rojo", "Castaño claro", "Castaño", "Castaño", "Castaño oscuro", "Negro"],

    enano: ["Rubio ceniza", "Rubio", "Rojo", "Cobrizo", "Castaño claro", "Castaño", "Castaño", "Castaño oscuro", "Negro azulado", "Negro"],

    halfling: ["Rubio ceniza", "Rubio oscuro", "Rubio", "Rubio", "Cobrizo", "Rojo", "Castaño claro", "Castaño", "Castaño oscuro", "Negro"],

    elfo: ["Plateado", "Rubio ceniza", "Rubio oscuro", "Rubio", "Cobrizo", "Castaño claro", "Castaño claro", "Castaño", "Castaño oscuro", "Negro"]
  }

  const colorDeOjos_objeto = {

    humano: ["Gris claro", "Gris azulado", "Azules", "Verdes", "Cobrizos", "Marrón claro", "Marrones", "Marrónes oscuro", "Violetas", "Negros"],

    enano: ["Gris claro", "Azules", "Cobrizos", "Marrón claro", "Marrón claro", "Marrones", "Marrones", "Marrón oscuro", "Marrón oscuro", "Violetas"],

    halfling: ["Azules", "Avellana", "Avellana", "Marrón claro", "Marrón claro", "Marrones", "Marrones", "Marrón oscuro", "Marrón oscuro", "Marrón oscuro"],

    elfo: ["Zarco", "Azules", "Verdes", "Cobrizos", "Marrón claro", "Marrones", "Marrón oscuro", "Plateados", "Violetas", "Negros"]
  }

  const destinoRaza_objeto = {

    humano: [2, 2, 2, 2, 3, 3, 3, 3, 3, 3],

    enano: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],

    halfling: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    
    elfo: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3],
  }


  const [mensaje, setMensaje] = useState('Bienvenidos al generador de personajes de Warhammer Fantasy 2nd Edition. Toque el botón para iniciar el generador.');

  const [personaje, setPersonaje] = useState(null);

  const generarPersonaje = () => {
    const razas = ['humano', 'enano', 'halfling', 'elfo'];

    const razaAleatoria = razas[Math.floor(Math.random() * razas.length)]
    
    const profesiones = profesionesRaza_objeto[razaAleatoria]

    const profesionAleatoria = profesiones[Math.floor(Math.random() * profesiones.length)];

    const razaStats = caracteristicasRaza_objeto[razaAleatoria]

    const profesion = profesiones_objeto[profesionAleatoria] 

    console.log(profesiones,profesionAleatoria,profesion)

    const heridas = heridasRaza_objeto[razaAleatoria]

    const destino = destinoRaza_objeto[razaAleatoria]

    const nombre = nombreRaza_objeto[razaAleatoria]

    const apellido = apellidoRaza_objeto[razaAleatoria]

    const movimiento = movimientoRaza_objeto[razaAleatoria]

    const peso = pesoRaza_objeto[razaAleatoria]

    const pelo = colorDePelo_objeto[razaAleatoria]

    const ojos = colorDeOjos_objeto[razaAleatoria]

    const habilidadesDeRaza = habilidadesRaza_objeto[razaAleatoria]

    const talentosDeRaza = talentosRaza_objeto[razaAleatoria]

    const destinoAleatorio = destino[Math.floor(Math.random() * destino.length)];

    const heridasAleatorias = heridas[Math.floor(Math.random() * heridas.length)];

    const nombreAleatorio = nombre[Math.floor(Math.random() * nombre.length)]

    const apellidoAleatorio = apellido[Math.floor(Math.random() * apellido.length)]

    const alturaAleatoria = alturaRaza_objeto[razaAleatoria]

    const pesoAleatorio = peso[Math.floor(Math.random() * peso.length)]

    const peloAleatorio = pelo[Math.floor(Math.random() * pelo.length)]

    const ojosAleatorio = ojos[Math.floor(Math.random() * ojos.length)]

    const personajeGenerado = {

      nombre: nombreAleatorio,
      apellido: apellidoAleatorio,
      raza: razaAleatoria,
      heridas: heridasAleatorias,
      destino: destinoAleatorio,
      movimiento: movimiento,
      altura: alturaAleatoria,
      peso: pesoAleatorio,
      pelo: peloAleatorio,
      ojos: ojosAleatorio,
      habilidadesDeRaza: habilidadesDeRaza,
      talentosDeRaza: talentosDeRaza,
      caracteristicas: {

        Caracteristica: "Stats aleatorias",
        HA: DosDeDiez(),
        HP: DosDeDiez(),
        F: DosDeDiez(),
        R: DosDeDiez(),
        Ag: DosDeDiez(),
        Int: DosDeDiez(),
        FV: DosDeDiez(),
        Em: DosDeDiez(),
      },
      caracteristicasDeRaza: {

        titulo: razaStats.caracRaza,
        HA: razaStats.HA,
        HP: razaStats.HP,
        F: razaStats.F,
        R: razaStats.R,
        Ag: razaStats.Ag,
        Int: razaStats.Int,
        FV: razaStats.FV,
        Em: razaStats.Em
      },

      profesion: {
        Nombre: profesion.Nombre,
        HA:  profesion.HA,
        HP:  profesion.HP,
        F:   profesion.F,
        R:   profesion.R,
        Ag:  profesion.Ag,
        Int: profesion.Int,
        FV:  profesion.FV,
        Em:  profesion.Em,
        A:   profesion.A,
        H:   profesion.H,
        M:   profesion.M,
        Mag: profesion.Mag,
        Habilidades: profesion.Habilidades,
        Talentos: profesion.Talentos,
        Enseres: profesion.Enseres,
        Accesos: profesion.Accesos,
        Salidas: profesion.Salidas
      }
    };

    setPersonaje(personajeGenerado);
  };

  return (
    <div className="App">
      <div className="center-container">
        <h2>{mensaje}</h2>
        <button onClick={generarPersonaje}>Generar Personaje</button>
        {personaje && (
          <div>
            <h2>Personaje Generado:</h2>
            <p><b>Nombre:</b> {personaje.nombre} {personaje.apellido}</p>
            <p><b>Raza:</b> {personaje.raza}</p>
            <p><b>Heridas:</b> {personaje.heridas}</p>
            <p><b>Puntos de Destino:</b> {personaje.destino}</p>
            <p><b>Movimiento:</b> {personaje.movimiento}</p>
            <p><b>Habilidades por raza:</b></p>
            <p>{personaje.habilidadesDeRaza.join(', ')}</p>
            <p><b>Talentos por raza:</b></p>
            <p>{personaje.talentosDeRaza.join(', ')}</p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Nombre Caracteristicas</th>
                    <th>HA</th>
                    <th>HP</th>
                    <th>F</th>
                    <th>R</th>
                    <th>Ag</th>
                    <th>Int</th>
                    <th>FV</th>
                    <th>Em</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{personaje.caracteristicas.Caracteristica}</td>
                    <td>{personaje.caracteristicas.HA}</td>
                    <td>{personaje.caracteristicas.HP}</td>
                    <td>{personaje.caracteristicas.F}</td>
                    <td>{personaje.caracteristicas.R}</td>
                    <td>{personaje.caracteristicas.Ag}</td>
                    <td>{personaje.caracteristicas.Int}</td>
                    <td>{personaje.caracteristicas.FV}</td>
                    <td>{personaje.caracteristicas.Em}</td>
                  </tr>
                  <tr>
                    <td>{personaje.caracteristicasDeRaza.titulo}</td>
                    <td>{personaje.caracteristicasDeRaza.HA}</td>
                    <td>{personaje.caracteristicasDeRaza.HP}</td>
                    <td>{personaje.caracteristicasDeRaza.F}</td>
                    <td>{personaje.caracteristicasDeRaza.R}</td>
                    <td>{personaje.caracteristicasDeRaza.Ag}</td>
                    <td>{personaje.caracteristicasDeRaza.Int}</td>
                    <td>{personaje.caracteristicasDeRaza.FV}</td>
                    <td>{personaje.caracteristicasDeRaza.Em}</td>
                  </tr>
                  <tr>
                    <td>Stats iniciales</td>
                    <td>{personaje.caracteristicasDeRaza.HA + personaje.caracteristicas.HA}</td>
                    <td>{personaje.caracteristicasDeRaza.HP + personaje.caracteristicas.HP}</td>
                    <td>{personaje.caracteristicasDeRaza.F + personaje.caracteristicas.F}</td>
                    <td>{personaje.caracteristicasDeRaza.R + personaje.caracteristicas.R}</td>
                    <td>{personaje.caracteristicasDeRaza.Ag + personaje.caracteristicas.Ag}</td>
                    <td>{personaje.caracteristicasDeRaza.Int + personaje.caracteristicas.Int}</td>
                    <td>{personaje.caracteristicasDeRaza.FV + personaje.caracteristicas.FV}</td>
                    <td>{personaje.caracteristicasDeRaza.Em + personaje.caracteristicas.Em}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Profesión: {personaje.profesion.Nombre}</h2>
            <h3>Rasgos fisicos</h3>
            <p>Altura: {personaje.altura} cm</p>
            <p>Peso: {personaje.peso} kg</p>
            <p>Color de pelo: {personaje.pelo}</p>
            <p>Color de ojos: {personaje.ojos}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

