import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

// App principal: controla qué pantalla se muestra usando un estado simple.
// Flujo: 'splash' -> (automático) 'home' -> (botón) 'detail' -> (botón) 'home'
export default function App() {
  const [pantalla, setPantalla] = useState('splash');

  return (
    <>
      <StatusBar style="light" />

      {pantalla === 'splash' && (
        <SplashScreen onFinish={() => setPantalla('home')} />
      )}

      {pantalla === 'home' && (
        <HomeScreen
          onVerDetalle={() => setPantalla('detail')}
          onVerSplash={() => setPantalla('splash')}
        />
      )}

      {pantalla === 'detail' && (
        <DetailScreen onVolver={() => setPantalla('home')} />
      )}
    </>
  );
}
