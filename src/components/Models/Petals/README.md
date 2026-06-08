# 💍 Wedding Invite Template

Template de invitación de boda digital — React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Cómo empezar

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar en modo desarrollo
npm run dev

# 3. Build para producción
npm run build
```

---

## ✏️ Personalización

**Todo lo que necesitás editar está en un solo archivo:**

```
src/config.js
```

### Qué podés cambiar desde config.js

| Campo | Descripción |
|-------|-------------|
| `couple` | Nombres de los novios y hashtag |
| `event` | Fecha, hora, lugar, link a Maps |
| `music` | URL del audio, nombre de la canción |
| `schedule` | Ítems del itinerario (hora, título, descripción, ícono) |
| `dresscode` | Título, nota, colores (como array de HEX) |
| `photos` | Foto hero, fotos separadoras, fotos de galería |
| `sections` | Habilitar/deshabilitar cada sección opcional |
| `footer` | Frase final |
| `palette` | **Todos los colores del template** |

---

## 🎨 Paletas de colores

Cambiando el objeto `palette` en `config.js` el template toma una identidad completamente diferente.

### Verde Salvia (default)
```js
palette: {
  bgDark: "#1C1917", bgLight: "#FAF7F2",
  accent: "#8A9E85", accentAlt: "#C4A882",
  textDark: "#1C1917", textLight: "#FAF7F2", textMuted: "#9a8e86",
}
```

### Navy & Gold
```js
palette: {
  bgDark: "#0D1B2A", bgLight: "#F8F5EE",
  accent: "#C9A84C", accentAlt: "#8B6914",
  textDark: "#0D1B2A", textLight: "#F8F5EE", textMuted: "#8a7a5a",
}
```

### Blanco & Negro dramático
```js
palette: {
  bgDark: "#111111", bgLight: "#FAFAFA",
  accent: "#999999", accentAlt: "#555555",
  textDark: "#111111", textLight: "#FAFAFA", textMuted: "#888888",
}
```

### Rosa & Champagne
```js
palette: {
  bgDark: "#2D1F22", bgLight: "#FDF6F0",
  accent: "#C9837A", accentAlt: "#D4B483",
  textDark: "#2D1F22", textLight: "#FDF6F0", textMuted: "#a08070",
}
```

---

## 📸 Agregar fotos

1. Copiá tus fotos a la carpeta `/public/photos/`
2. En `config.js`, actualizá las rutas:

```js
photos: {
  hero: "/photos/mi-foto-principal.jpg",
  fullscreen: [
    "/photos/full1.jpg",
    "/photos/full2.jpg",
    "/photos/full3.jpg",
  ],
  gallery: [
    "/photos/gallery1.jpg",
    // ...
  ],
},
```

**Recomendaciones de tamaño:**
- Hero: 1200×800px mínimo
- Fullscreen separators: 1200×800px
- Gallery: cuadradas o 4:3, mínimo 600px

---

## 🎵 Música

Reemplazá la URL en `config.js`:

```js
music: {
  enabled: true,
  url: "https://tu-audio.mp3",  // o ruta local: "/musica/cancion.mp3"
  songName: "Nombre — Artista",
  autoplay: false,
},
```

> **Nota:** Los navegadores modernos bloquean el autoplay. Dejá `autoplay: false` y el invitado activa la música tocando el botón flotante.

---

## 🗂 Estructura del proyecto

```
src/
├── config.js          ← Editar todo acá
├── App.jsx            ← Layout principal
├── index.css          ← Estilos globales
├── components/
│   ├── FadeIn.jsx     ← Animación de entrada reutilizable
│   ├── MusicPlayer.jsx ← Reproductor flotante
│   ├── Ornament.jsx   ← Divisor decorativo
│   ├── PhotoDivider.jsx ← Foto separadora full-screen
│   └── SectionLabel.jsx ← Etiqueta de sección
└── sections/
    ├── Hero.jsx
    ├── Countdown.jsx
    ├── WhenWhere.jsx
    ├── Schedule.jsx
    ├── DressCode.jsx
    ├── Gallery.jsx
    ├── Lodging.jsx
    ├── Honeymoon.jsx
    ├── SharedAlbum.jsx
    ├── RSVP.jsx
    └── Footer.jsx
```

---

## 🌐 Deploy

Funciona con cualquier host estático:

- **Vercel**: conectá el repo y listo
- **Netlify**: arrastrá la carpeta `dist` tras `npm run build`
- **GitHub Pages**: usá `gh-pages` con el directorio `dist`
