import { View, Text, Image, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { COLORS, EQUIPO } from '../theme';

// Pantalla de detalle simple, a la que se llega desde el botón del Home.
export default function DetailScreen({ onVolver }) {
  const mostrarMensaje = () => {
    Alert.alert('¡Ecuador! 🇪🇨', '¡Sí se puede, vamos La Tri!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contenido}>
      <Image
        source={require('../assets/escudo.png')}
        style={styles.escudo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Sobre la Selección</Text>

      <Text style={styles.parrafo}>
        La Selección de Ecuador, conocida como "{EQUIPO.apodo}", representa al país en
        las competiciones de la {EQUIPO.confederacion}. Fue fundada en {EQUIPO.fundacion} y
        disputa sus partidos de local en el {EQUIPO.estadio}.
      </Text>

      <Text style={styles.parrafo}>
        Actualmente es dirigida por {EQUIPO.entrenador} y se mantiene como una de las
        selecciones más competitivas de Sudamérica ({EQUIPO.fifaRanking}).
      </Text>

      {/* Botón que muestra un mensaje (Alert) */}
      <TouchableOpacity style={styles.botonAmarillo} onPress={mostrarMensaje}>
        <Text style={styles.botonAmarilloTexto}>¡Apoya a La Tri! 📣</Text>
      </TouchableOpacity>

      {/* Botón para volver al Home */}
      <TouchableOpacity style={styles.botonVolver} onPress={onVolver}>
        <Text style={styles.botonVolverTexto}>⬅ Volver al inicio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.azul,
  },
  contenido: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  escudo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  titulo: {
    color: COLORS.amarillo,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  parrafo: {
    color: COLORS.blanco,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  botonAmarillo: {
    marginTop: 16,
    backgroundColor: COLORS.amarillo,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  botonAmarilloTexto: {
    color: COLORS.azul,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonVolver: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.amarillo,
  },
  botonVolverTexto: {
    color: COLORS.amarillo,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
