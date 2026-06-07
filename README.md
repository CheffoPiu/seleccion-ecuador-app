# 🇪🇨 Ecuador - La Tri (App móvil)

Aplicación móvil básica desarrollada con **React Native + Expo Go** sobre la Selección
Ecuatoriana de Fútbol. Incluye una pantalla de bienvenida (Splash), una pantalla
principal (Home) con datos del equipo y una pantalla de detalle.

## 📱 Pantallas

1. **Splash Screen** — Logo de la FEF centrado sobre fondo azul, texto *"Ecuador - La Tri"*
   y navegación automática al Home tras 2.5 segundos.
2. **Home Screen** — Encabezado con el nombre del equipo, escudo, datos básicos
   (Confederación, Entrenador, Estadio, Fundación) y un botón interactivo.
3. **Detail Screen** — Información ampliada y un botón que muestra un mensaje (Alert).

## 🎨 Colores oficiales de la Tri

| Color    | Hex       |
|----------|-----------|
| Amarillo | `#FFCC00` |
| Azul     | `#003DA5` |
| Rojo     | `#ED1C24` |

## 🗂️ Estructura del proyecto

```
seleccion/
├── App.js                 # Controla la navegación entre pantallas
├── theme.js               # Colores y datos del equipo (constantes)
├── screens/
│   ├── SplashScreen.js    # Pantalla de bienvenida
│   ├── HomeScreen.js      # Pantalla principal
│   └── DetailScreen.js    # Pantalla de detalle
├── assets/
│   └── escudo.png         # Escudo oficial de la FEF
├── app.json               # Configuración de Expo
└── package.json
```

## ▶️ Cómo ejecutar

Requisitos: Node.js 20+, la app **Expo Go** instalada en tu celular.

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de Expo
npx expo start
```

Luego escanea el código QR con la app **Expo Go** (Android) o con la cámara (iOS).

## 🛠️ Tecnologías

- React Native 0.85
- Expo SDK 56
- JavaScript (componentes funcionales y Hooks: `useState`, `useEffect`)

---

*Proyecto académico — Desarrollo de Aplicaciones Móviles.*
