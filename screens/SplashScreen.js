import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

// Pantalla de bienvenida (Splash).
// Muestra el escudo y, tras unos segundos, avisa al padre para ir al Home.
export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Espera 2.5 segundos y luego navega automáticamente al Home
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    // Limpia el temporizador si la pantalla se desmonta antes de tiempo
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/escudo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Ecuador - La Tri</Text>
      <Text style={styles.subtitulo}>¡Vamos Ecuador! 🇪🇨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.azul, // fondo azul de la Tri
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  titulo: {
    color: COLORS.amarillo, // texto amarillo
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitulo: {
    color: COLORS.blanco,
    fontSize: 16,
    marginTop: 8,
  },
});
