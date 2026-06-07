import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, EQUIPO } from '../theme';

// Fila reutilizable para mostrar un dato del equipo (etiqueta + valor)
function DatoEquipo({ etiqueta, valor }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

// Pantalla principal (Home).
export default function HomeScreen({ onVerDetalle }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
    >
      {/* Encabezado con el nombre del equipo */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>{EQUIPO.nombre}</Text>
        <Text style={styles.headerSubtitulo}>"{EQUIPO.apodo}"</Text>
      </View>

      {/* Escudo de la Selección */}
      <Image
        source={require('../assets/escudo.png')}
        style={styles.escudo}
        resizeMode="contain"
      />

      {/* Tarjeta con los datos básicos del equipo */}
      <View style={styles.tarjeta}>
        <DatoEquipo etiqueta="Confederación" valor={EQUIPO.confederacion} />
        <DatoEquipo etiqueta="Entrenador" valor={EQUIPO.entrenador} />
        <DatoEquipo etiqueta="Estadio" valor={EQUIPO.estadio} />
        <DatoEquipo etiqueta="Fundación" valor={EQUIPO.fundacion} />
      </View>

      {/* Botón interactivo que lleva a la pantalla de Detalle */}
      <TouchableOpacity style={styles.boton} onPress={onVerDetalle}>
        <Text style={styles.botonTexto}>Ver más sobre La Tri ⚽</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blanco,
  },
  contenido: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    backgroundColor: COLORS.azul,
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitulo: {
    color: COLORS.amarillo,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitulo: {
    color: COLORS.blanco,
    fontSize: 16,
    marginTop: 4,
  },
  escudo: {
    width: 160,
    height: 160,
    marginVertical: 24,
  },
  tarjeta: {
    width: '88%',
    backgroundColor: '#F5F7FA',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.amarillo,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E5EA',
  },
  etiqueta: {
    color: COLORS.azul,
    fontWeight: 'bold',
    fontSize: 15,
  },
  valor: {
    color: COLORS.textoOscuro,
    fontSize: 15,
    flexShrink: 1,
    textAlign: 'right',
    marginLeft: 12,
  },
  boton: {
    marginTop: 28,
    backgroundColor: COLORS.amarillo,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  botonTexto: {
    color: COLORS.azul,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
