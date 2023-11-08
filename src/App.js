import React, { useState } from 'react';

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
      caracRaza: "Stats Por enano",
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
      caracRaza: "Stats Por halfling",
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
      caracRaza: "Stats Por elfo",
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

    const profesionAleatoria = profesiones[Math.floor(Math.random() * profesiones.length)];

    const destinoAleatorio = destino[Math.floor(Math.random() * destino.length)];

    const heridasAleatorias = heridas[Math.floor(Math.random() * heridas.length)];




    const personajeGenerado = {
      raza: razaAleatoria,
      profesion: profesionAleatoria,
      heridas:heridasAleatorias,
      destino: destinoAleatorio,
      caracteristicas: {
        Caracteristica : "caracAleatoria",
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
      
      caracteristicasIniciales: {
        caracteristicasIniciales : "Caracteristicas Iniciales",
        
      }
    };

    setPersonaje(personajeGenerado);
  };
  return (
    <div className="App">
      <h2>{mensaje}</h2>
      <button onClick={generarPersonaje}>Generar Personaje</button>
      {personaje && (
        <div>
          <h2>Personaje Generado:</h2>
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
            <tbody>
            
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;

