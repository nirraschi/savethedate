# Quince — Template de invitación de 15 años

## Estructura de archivos

```
src/components/Models/quince/
├── Quince.jsx              ← componente raíz (importá este en tu router)
├── config.js               ← TODO el contenido editable está acá
├── hooks.js                ← countdown + inyección de CSS vars
├── components.jsx          ← átomos UI compartidos
└── sections/
    ├── HeroSection.jsx     ← pantalla principal con nombre y XV
    ├── CountdownSection.jsx← cuenta regresiva
    ├── EventSection.jsx    ← fecha, hora, lugar + botón Maps
    ├── CarouselSection.jsx ← galería de fotos con swipe táctil
    ├── DressCodeSection.jsx← dress code
    ├── InstagramSection.jsx← IG de la cumpleañera + hashtag
    ├── GiftSection.jsx     ← transferencia con botón copiar alias
    └── RSVPSection.jsx     ← confirmar asistencia → Google Form
```

---

## Setup rápido

### 1. Dependencias

```bash
npm install framer-motion lucide-react
```

### 2. Tailwind — agregar font-display

En `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-display)"],
    },
  },
},
```

O en `src/index.css`:
```css
@layer utilities {
  .font-display {
    font-family: var(--font-display);
  }
}
```

### 3. Router

En tu archivo de rutas (React Router v6):
```jsx
import Quince from "@/components/Models/quince/Quince";

// Dentro de createBrowserRouter o <Routes>:
<Route path="/modelos/quince" element={<Quince />} />
```

---

## Personalización — solo editá `config.js`

| Qué querés cambiar         | Campo en config.js             |
|----------------------------|-------------------------------|
| Nombre de la chica          | `girl.name`                   |
| Fecha del evento            | `girl.date` + `girl.dateISO`  |
| Fotos del carrusel          | `carousel.images[].src`       |
| Link de Google Form         | `rsvp.googleFormUrl`          |
| Instagram                   | `instagram.handle` + `.url`   |
| Alias de transferencia      | `gift.alias`                  |
| Colores del tema            | `theme.*`                     |
| Ocultar una sección         | `sections.<nombre>: false`    |

---

## Imagen hero

El hero usa `config.images.hero`. Si no definís `images` en el config,
el hero muestra solo el fondo degradado.

Para agregar la imagen:
```js
// en config.js
images: {
  hero: "/fotos/mi-foto.jpg",  // ruta relativa a /public
},
```