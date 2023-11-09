import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Define las características de cada raza
  const caracteristicasRaza = {
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
    },
  };

  const apellidoRaza = {
    humano: ["Adelhof", "Adelhof", "Albrecht", "Altmann", "Atzwig", "Bacher", "Baer", "Baumann", "Becker", "Behn", "Betz", "Beyer", "Bischof", "Boehm", "Breitenbach", "Breuer", "Dahmbach", "Delfholt", "Drakenhof", "Drauwulf", "Durrbein", "Ehrhard", "Eisenhauer", "Eschlimann", "Falkenheim", "Fehr", "Fiegler", "Fleischer", "Frohlich", "Frueh", "Fuchs", "Gaertner", "Gaffwig", "Gebauer", "Godtgraf", "Grunenwald", "Guth", "Haintz", "Herz", "Herzog", "Hirtzel", "Hoch", "Hoefer", "Jaeger", "Jochutz", "Kalb", "Kaltenbach", "Kalb", "Konig", "Kraemer", "Krebs", "Konigsamen", "Konig", "Kuhn", "Kummel", "Lang", "Lankdorf", "Liess", "Lebengut", "Lutzen", "Machholt", "Meusmann", "Meyer", "Mohr", "Nachtmann", "Naubhof", "Netzhoch", "Neumann", "Niederlitz", "Nuhr", "Oberholtzer", "Ohrsten", "Otzlowe", "Reichert", "Reifsneider", "Riese", "Rohrig", "Reiss", "Schwalb", "Steiner", "Tabbeck", "Teuber", "Tolzen", "Trachsel", "Weber", "Wechsler", "Wirtz", "Widmann", "Widmer", "Veit", "Schaumer", "Vogt", "Vogel", "Zumwald"],

    elfo: ["Blackbough", "Blackcairn", "Blackwood", "Bluefeather", "Bluewing", "Boldheart", "Boldspear", "Bravehelm", "Bravestar", "Brightcrown", "Brightcrown", "Brightwand", "Coolstream", "Coolwater", "Darkeagle", "Darkmane", "Darkmoon", "Eldenkin", "Eldendrake", "Fairowl", "Fastblade", "Fastspear", "Fastwing", "Fellhand", "Fellblade", "Fleetfoot", "Fleet-though", "Fleetwing", "Gladheart", "Gladshore", "Gladwind", "Goldenbrook", "Goldencloud", "Goldenhair", "Goodroot", "Goodwood", "Greendale", "Greenfeather", "Greenglade", "Hawkhelm", "Hawkstar", "Hawkwood", "Hawkstar", "Hawkwood", "Hawkstar", "Keeneye", "Keengaze", "Keensight", "Kindheart", "Kindwater", "Lightfoot", "Lightwing", "Longleap", "Longroad", "Oldmane", "Oldtower", "Palemoon", "Palewand", "Purelight", "Puresky", "Seagleam", "Seamist", "Shadowhelm", "Shadowseer", "Shadowstar", "Sharpblade", "Shiningmoon", "Shininghelm", "Silverdawn", "Silverhair", "Silverleaf", "Sure-eye", "Surehand", "Swiftbow", "Swifthand", "Swiftwing", "Slendertree", "Slenderwand", "Soaringleaf", "Soaringsun", "Starbrow", "Starfire", "Stargaze", "Strongarrow", "Stronghand", "Strongtower", "Tallbeam", "Tallhelm", "Tallhelm", "Tallhelm", "Tallhelm", "Tenderheart", "Tendersong", "Truefriend", "Trueseer", "Wiseheart", "Wisewind", "Whitelock", "Whitereed", "Whitetor", "Youngleaf", "Youngstar", "Youngwood"],

    halfling: ["Abrojo", "Acreverde", "Aguaoscura", "Alacaída", "Altocolina", "Alubia", "Amentos", "Anatinos", "Anca", "Árbolalto", "Árbolgrueso", "Árgana", "Barricaseta", "Bayamocha", "Bayasaúco", "Blancopuro", "Bolloculto", "Cachazudo", "Cándido", "Campolejano", "Cachazudo", "Cachazudo", "Ceñidor", "Charcamolino", "Chirimoya", "Cintalarga", "Cochiquera", "Colinaceniza", "Colinaverde", "Conejitos", "Cornejo", "Cubocola", "Cubrecuello", "Cuestabajo", "Dintel", "Duna", "Enaguas", "Espino", "Espolón", "Establogallo", "Exaltado", "Fajatrenzada", "Florblanca", "Florviento", "Florápida", "Flores", "Gancho", "Garañón", "Garrafón", "Gorrión", "Granocebada", "Hebillamiga", "Hojalaurel", "Jalalibros", "Lenteja", "Madriguera", "Manduca", "Manzana", "Manzanaverde", "Matacardo", "Mecehierba", "Montículo", "Panzatirante", "Pastafácil", "Pavaalegre", "Pieloco", "Pieraro", "Piesduros", "Piesencrespados", "Piesesquivos", "Pradobajo", "Riba", "Refunfuño", "Rompetochos", "Rocaraíz", "Sacoespino", "Sacrifición", "Sacolleno", "Sinculo", "Sonajahueso", "Soplacuerno", "Surcos", "Telapétalo", "Tiemblapanza", "Tizalarga", "Tonel", "Tripagrog", "Tropezíon", "Trotehermoso", "Tuétano", "Ulmaria", "Varasauce", "Vejete", "Vino-fuerte", "Zagamanzano", "Zampatartas", "Zarza"],

    enano: ["Al", "Ala", "Ath", "Athran", "Bal", "Bala", "Bara", "Bel", "Bela", "Bok", "Bor", "Bur", "Da", "Dam", "Dora", "Drok", "Drong", "Dur", "Dwal", "Ela", "Elda", "Elan", "Fa", "Far", "Fara", "Fima", "Firen", "Fur", "Fura", "Ga", "Gim", "Gol", "Gollen", "Got", "Gota", "Grim", "Gro", "Grun", "Hak", "Haka", "Har", "Hega", "Hur", "Kad", "Kar", "Kata", "Kaz", "Kaza", "Krag", "Logaz", "Lok", "Lun", "Mo", "Mola", "Mor", "Mora", "Nola", "Nor", "Noran", "Nun", "Oda", "Oka", "Olla", "Olf", "Oth", "Othra", "Ro", "Ror", "Roran", "Ska", "Skalla", "Skalf", "Skar", "Skor", "Skora", "Snor", "Snora", "Sven", "Thar", "Thor", "Thora", "Thron", "Thrun", "Thura", "Un", "Ulla", "Utha", "Vala", "Var", "Vara", "Zak", "Zaka", "Zakan", "Zam", "Zama", "Zara"]
  }

  const nombreRaza = {
    humano: ["Abelhard", "Abelhelm", "Admund", "Adred", "Adric", "Agis", "Alaric", "Alberic", "Albrecht", "Aldebrand", "Aldred", "Aldric", "Alfreid", "Altmar", "Alric", "Andre", "Andred", "Andric", "Anshelm", "Anton", "Arne", "Arnulf", "Axel", "Axelbrand", "Baldred", "Baldric", "Balthasar", "Barnabas", "Bart", "Bartolf", "Bartomar", "Bernolt", "Bertolf", "Boris", "Bruno", "Burgolf", "Calvin", "Casimir", "Caspar", "Cedred", "Conrad", "Corvin", "Dagmar", "Dankmar", "Dankred", "Diebold", "Diel", "Dietfried", "Dietmar", "Dietmund", "Dietrich", "Dirk", "Donat", "Eber", "Eckel", "Eckhart", "Edgar", "Emil", "Engel", "Engelbert", "Eustasius", "Ewald", "Faber", "Faustus", "Felix", "Ferdinand", "Gerber", "Gerhart", "Gerlach", "Gernar", "Gerolf", "Gilbrecht", "Gisbert", "Giselbrecht", "Gismar", "Goran", "Gosbert", "Goswin", "Gotfried", "Gothard", "Gottolf", "Gotwin", "Gregor", "Greimold", "Grimwold", "Griswold", "Guido", "Gundolf", "Gundred", "Gunnar", "Gunter", "Gustaf", "Hadred", "Hadwin", "Hagar", "Hagen", "Haldred", "Halman", "Hamlyn", "Hans", "Harbrand", "Harman", "Hartmann", "Haug", "Heidric", "Heimar", "Heinfried", "Heinman", "Heinrich", "Helmur", "Henlyn", "Hermann", "Herwin", "Hildebart", "Hildebrand", "Hildemar", "Hildemund", "Hildred", "Hildric", "Horst", "Hugo", "Igor", "Ingwald", "Ingwald", "Jander", "Jekil", "Jodokus", "Johann", "Jonas", "Jorg", "Jorn", "Josef", "Jost", "Jurgen", "Jurgen", "Karl", "Kaspar", "Klaus", "Kleber", "Konrad", "Konradin", "Kurt", "Lamprecht", "Lanfried", "Lanric", "Lanwin", "Leo", "Levin", "Liebert", "Liebrecht", "Liebwin", "Lienhart", "Linus", "Lodwig", "Lothar", "Lucius", "Ludwig", "Luitpold", "Lukas", "Lupold", "Lupus", "Luther", "Lutolf", "Leopold", "Madred", "Magnus", "Mandred", "Manfred", "Mathias", "Max",
      "Maximillian", "Meiner", "Meinhart", "Meinolf", "Mekel", "Merkel", "Nat", "Nathandar", "Nicodemus", "Odamar", "Odric", "Odwin", "Olbrecht", "Oldred", "Oldric", "Ortlieb", "Ortolf", "Orwin", "Oswald", "Osric", "Oswin", "Otfried", "Otto", "Otwin", "Paulus", "Prospero", "Ragen", "Ralf", "Rambrecht", "Randulf", "Ranulf", "Ranald", "Reikhard", "Rein", "Reiner", "Reinhard", "Reinolt", "Reuban", "Rigo", "Roderic", "Rolf", "Rudel", "Rudgar", "Rudolf", "Rudolf", "Rufus", "Ruprecht", "Ruprecht", "Sebastian", "Semund", "Sepp", "Sieger", "Siegfried", "Siegfried", "Siegmund", "Siegfried", "Siegmund", "Sigismund", "Sigric", "Sigric", "Sigismund", "Sigric", "Steffan", "Tankred", "Tankred", "Tilmann", "Tilmann", "Tomas", "Theodoric", "Theodoric", "Valdred", "Valdric", "Valdred", "Valdric", "Varl", "Viggo", "Viktor", "Werner", "Wolkhard", "Wolkhard", "Wolfram", "Wolfhart", "Wolfram", "Wolfram", "Wolfgang", "Wolfgang", "Wolfgang", "Wulf", "Xavier", "Xavier", "Xavier", "Xavier"],

    elfo: ["Aed", "Ael", "Aelf", "Aen", "Aeth", "Alth", "An", "And", "Ar", "Arg", "Ast", "Ath", "Ay", "Ban", "Bel", "Beth", "Cad", "Cael", "Caem", "Caeth", "Cal", "Cam", "Cel", "Cir", "El", "Eld", "Elth", "End", "Er", "Ers", "Fand", "Ferg", "Fim", "Fin", "Gal", "Gald", "Gaen", "Gaes", "Ged", "Gen", "Ges", "Geth", "Glor", "Has", "Hath", "Hel", "Heth", "Hith", "Ill", "Ind", "Ist", "Ith", "Iy", "Kor", "Ky", "Kyr", "La", "Lan", "Lil", "Lim", "Loth", "Mal", "Mar", "Math", "Men", "Meth", "Mor", "Mort", "Nal", "Nar", "Nen", "Nor", "Norl", "Ri", "Riabb", "Riann", "Rid", "Rien", "Riell", "Ruth", "Ryn", "Tab", "Tal", "Tan", "Tar", "Teth", "Tel", "Tor", "Ty", "Ul", "Um", "Ur", "Yr", "Yv"],

    // elfo2: ["A", "Al", "An", "Ar", "As", "E", "El", "En", "Er", "Es", "Fan", "Fen", "Fin", "I", "Il", "In", "Ir", "Is", "O", "Ol", "On", "Or", "Os", "Ra", "Ral", "Ran", "Re", "Rel", "Ren", "Ril", "Rin", "Ro", "Rol", "Ron", "Ry", "Sa", "Sal", "San", "Se", "Sel", "Sen", "Si", "Sil", "Sin", "So", "Sol", "Son", "U", "Ul"],

    // elfo3: ["Baen", "Baine", "Baire", "Bar", "Bhir", "Brier", "Brior", "Brin", "Daen", "Daine", "Daire", "Dar", "Dhil", "Dhir", "Drel", "Drir", "Dror", "Eorl", "Eos", "Eoth", "Fil", "Fin", "Fir", "Hil", "Hin", "Hor", "Il", "In", "Ion", "Ir", "Ith", "Is", "Laen", "Laer", "Laine", "Lan", "Las", "Len", "Les", "Lil", "Lin", "Lir", "Lis", "Lor", "Los", "Mael", "Maen", "Main", "Mal", "Mair", "Mar", "Mil", "Min", "Mir", "Nael", "Naen", "Nael", "Naer", "Nair", "Nail", "Nal", "Nan", "Nar", "Nel", "Nir", "Nir", "Nis", "Nis", "Nis", "Nil", "Nin", "Nir", "Ran", "Ran", "Rea", "Rel", "Rea", "Rel", "Ril", "Ril", "Rin", "Rin", "Ril", "Ril", "Rin", "Rin", "Rir", "Rion", "Rir", "Rior", "Riorl", "Rior", "Riorl", "Riorn", "Ryel", "Taen", "Tain", "Tair", "Thain", "Than", "Thar", "Thel", "Thil", "Thir", "Thir", "Thrin", "Thrin", "Thwe", "Til", "Tin", "Tin", "Tin", "Tis", "Thrill", "Thril", "We", "Yan"],

    halfling: ["Bag", "Balf", "Berc", "Bill", "Bobb", "Bodg", "Bog", "Bom", "Bonn", "Brog", "Bulc", "Bull", "Bust", "Cam", "Cap", "Ced", "Chund", "Clog", "Clof", "Cob", "Cog", "Crum", "Crump", "Curl", "Dod", "Dog", "Dott", "Drog", "Dron", "Durc", "Elm", "Enn", "Ermin", "Ethan", "Falc", "Fald", "Far", "Falm", "Fild", "Flac", "Fogg", "Frit", "Ful", "Func", "Gaff", "Galb", "Gamm", "Gert", "Giff", "Gild", "Gon", "Grop", "Gudd", "Gump", "Gu", "Hal", "Ham", "Hart", "Harp", "Jac", "Jas", "Jasp", "Joc", "Lac", "Lil", "Lob", "Lott", "Lud", "Lurc", "Mad", "Mag", "Man", "May", "Mer", "Mul", "Murc", "Murd", "Nag", "Nell", "Nobb", "Nob", "Od", "Og", "Old", "Pipp", "Podd", "Porc", "Riff", "Rip", "Rob", "Sam", "Supp", "Taff", "Talb", "Talc", "Tay", "Tom", "Wald", "Watt", "Will"],

    // halfling2: ["Belly", "Er", "Fast", "In", "It", "Mutch", "O", "Odoc", "Riadoc", "Regar", "Wick", "Wise", "Wit", "Y"],

    enano: ["Bin", "Bor", "Dil", "Din", "Dok", "Dor", "Drin", "Fin", "Gan", "Gar", "Gil", "Gin", "Gni", "Grom", "Grond", "Grund", "Grunt", "Gul", "Gund", "Gun", "Ki", "Kin", "Krag", "Kri", "Krin", "Li", "Lin", "Lik", "Lok", "Lun", "Min", "Mir", "Nin", "Nir", "Rag", "Rik", "Rin", "Rin", "Rik", "Rik", "Rin", "Rin", "Rin", "Rin", "Rin", "Rin", "Ri", "Rig", "Run", "Rok", "Ror", "Skin", "Tin", "Tok", "Trek", "Trok", "Zin", "Zor"]
  }

  const DosDeDiez = () => {
    const num1 = (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1);
    return num1;
  };

  // Define las profesiones para cada raza
  const profesionesRaza = {

    humano: ["Alborotador", "Aprendiz de hechicero", "Alguacil", "Barbero cirujano", "Batelero", "Guardaespaldas", "Osamentero", "Cazarrecompensas", "Burgués", "Miembro de séquito", "Carbonero", "Cochero", "Artista", "Espadachín estaliano", "Barquero", "Pescador", "Ladrón de tumbas", "Hechicero vulgar", "Cazador", "Iniciado", "Carcelero", "Kossar kislevita", "Guardia marina", "Mercenario", "Mensajero", "Miliciano", "Minero", "Noble", "Bersérker nórdico", "Forajido", "Escolta", "Campesino", "Gladiador", "Sicario", "Cazarratas", "Patrulla de caminos", "Bribón", "Escriba", "Marinero", "Sirviente", "Contrabandista", "Soldado", "Escudero", "Estudiante", "Ladrón", "Matón", "Peajero", "Saqueador de tumbas", "Menestral", "Vagabundo", "Ayuda de cámara", "Vigilante", "Leñador", "Fanático"],

    enano: ["Alborotador", "Guardaespaldas", "Burgués", "Cochero", "Artista", "Cazador", "Carcelero", "Guardia marina", "Mercenario", "Miliciano", "Minero", "Noble", "Forajido", "Gladiador", "Sicario", "Cazarratas", "Portador de runas", "Escriba", "Marinero", "Sirviente", "Rompescudos", "Contrabandista", "Soldado", "Estudiante", "Ladrón", "Peajero", "Saqueador de tumbas", "Menestral", "Matatrolls", "Vigilante"],

    halfling: ["Alborotador", "Barbero cirujano", "Osamentero", "Cazarrecompensas", "Burgués", "Miembro de séquito", "Carbonero", "Artista", "Barquero", "Patrulla fronteriza", "Pescador", "Ladrón de tumbas", "Cazador", "Mercenario", "Mensajero", "Miliciano", "Forajido", "Campesino", "Cazarratas", "Bribón", "Sirviente", "Contrabandista", "Soldado", "Estudiante", "Ladrón", "Peajero", "Saqueador de tumbas", "Menestral", "Vagabundo", "Ayuda de cámara", "Vigilante"],

    elfo: ["Aprendiz de hechicero", "Artista", "Embajador", "Cazador", "Guerrero de camarilla", "Mercenario", "Mensajero", "Forajido", "Escolta", "Bribón", "Escriba", "Marinero", "Estudiante", "Ladrón", "Menestral", "Vagabundo"],
  };

  const heridasRaza = {
    humano: [10, 10, 10, 11, 11, 11, 12, 12, 12, 13],
    enano: [11, 11, 11, 12, 12, 12, 13, 13, 13, 14],
    halfling: [8, 8, 8, 9, 9, 9, 10, 10, 10, 11],
    elfo: [9, 9, 9, 10, 10, 10, 11, 11, 11, 12],
  }

  const destinoRaza = {
    humano: [2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
    enano: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    halfling: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    elfo: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3],
  }

  const talentosAleatorios = ["Ambidiestro", "Cortés", "Genio aritmético", "Guerrero nato", "Imperturbable", "Imitador", "Intelectual", "Muy fuerte", "Muy resistente", "Oído aguzado", "Pies ligeros", "Puntería", "Recio", "Reflejos rápidos", "Resistencia a enfermedades", "Resistencia a la magia", "Resistencia a venenos", "Robusto", "Sangre fría", "Sexto sentido", "Suerte", "Vista excelente"]

  const [mensaje, setMensaje] = useState('Bienvenidos al generador de personajes de Warhammer Fantasy 2nd Edition. Toque el botón para iniciar el generador.');

  const [personaje, setPersonaje] = useState(null);

  const generarPersonaje = () => {
    const razas = ['humano', 'enano', 'halfling', 'elfo'];

    const razaAleatoria = razas[Math.floor(Math.random() * razas.length)];

    const razaStats = caracteristicasRaza[razaAleatoria]

    const profesiones = profesionesRaza[razaAleatoria]; // Utiliza profesionesRaza para obtener las profesiones de la raza.

    const heridas = heridasRaza[razaAleatoria]

    const destino = destinoRaza[razaAleatoria]

    const nombre = nombreRaza[razaAleatoria]

    const apellido = apellidoRaza[razaAleatoria]

    const profesionAleatoria = profesiones[Math.floor(Math.random() * profesiones.length)];

    const destinoAleatorio = destino[Math.floor(Math.random() * destino.length)];

    const heridasAleatorias = heridas[Math.floor(Math.random() * heridas.length)];

    const nombreAleatorio = nombre[Math.floor(Math.random() * nombre.length)]

    const apellidoAleatorio = apellido[Math.floor(Math.random() * apellido.length)]

    const personajeGenerado = {
      nombre: nombreAleatorio,
      apellido: apellidoAleatorio,
      raza: razaAleatoria,
      profesion: profesionAleatoria,
      heridas: heridasAleatorias,
      destino: destinoAleatorio,
      caracteristicas: {
        Caracteristica: "caracAleatoria",
        HA: DosDeDiez(),
        HP: DosDeDiez(),
        F: DosDeDiez(),
        R: DosDeDiez(),
        Ag: DosDeDiez(),
        Int: DosDeDiez(),
        FV: DosDeDiez(),
        Em: DosDeDiez(),
      },

      caracteristicasDeRaza: razaStats,

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
            <p>Nombre: {personaje.nombre} {personaje.apellido}</p>
            <p>Raza: {personaje.raza}</p>
            <p>Profesión: {personaje.profesion}</p>
            <p>Heridas: {personaje.heridas}</p>
            <p>Puntos de Destino: {personaje.destino}</p>
            <table>
              <tbody>
                {Object.keys(personaje.caracteristicas).map((caracteristicaNombre) => (
                  <th key={caracteristicaNombre}>
                    <td>{caracteristicaNombre}</td>
                  </th>
                ))}
              </tbody>
              <tbody>
                {Object.keys(personaje.caracteristicas).map((caracteristicaValorAleatorio) => (
                  <td key={caracteristicaValorAleatorio}>
                    <td>{personaje.caracteristicas[caracteristicaValorAleatorio]}</td>
                  </td>
                ))}
              </tbody>
              <tbody>
                {Object.keys(personaje.caracteristicasDeRaza).map((caracteristicaPorRaza) => (
                  <td key={caracteristicaPorRaza}>
                    <td>{personaje.caracteristicasDeRaza[caracteristicaPorRaza]}</td>
                  </td>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

