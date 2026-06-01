# BELENTANI | Symphony of Vines - Brainstorm de Diseño

## Filosofía de Diseño Elegida: **Sci-Fi Cinematográfico Neón Rojo**

### Design Movement
**Cyberpunk Futurista + Cine de Ciencia Ficción Oscura** (inspirado en Blade Runner, Tron, The Matrix). Estética de "nave siendo hackeada en tiempo real", narrativa de supervivencia digital.

### Core Principles

1. **Inmersión Espacial**: El usuario viaja por un planeta neón con anillos. La navegación no es lineal, es un viaje 3D donde cada sección es un "punto de órbita".

2. **Narrativa de Hackeo**: La interfaz muestra constantemente intentos de "localización" y "hackeo". Datos técnicos del usuario (IP, navegador, dispositivo) se visualizan como si fuera un sistema siendo atacado.

3. **Contraste Extremo**: Fondo negro profundo (#000000) con acentos rojo neón (#FF0033, #FF1744). Tipografía blanca/gris claro. Cero ruido visual innecesario.

4. **Cinematografía en Tiempo Real**: Cámara se mueve suavemente entre secciones. Transiciones tipo "corte cinematográfico". Cada sección es un "acto" de una película.

### Color Philosophy

| Color | Uso | Razón |
|-------|-----|-------|
| #000000 (Negro profundo) | Fondo principal | Espacio vacío, inmensidad, contraste máximo |
| #FF0033 (Rojo neón) | Planeta, anillos, acentos | Peligro, energía, "sistema comprometido" |
| #FF1744 (Rojo más brillante) | Efectos de glitch, warnings | Urgencia, alertas de hackeo |
| #FFFFFF / #E0E0E0 (Blanco/Gris claro) | Texto, UI | Legibilidad extrema, "código limpio" |
| #0A0E27 (Azul muy oscuro) | Fondos secundarios | Profundidad, "espacio profundo" |
| #00FF88 (Verde neón) | Detalles secundarios, éxito | Contraste con rojo, "sistema activo" |

### Layout Paradigm

**No es un sitio tradicional.** Es una **experiencia 3D inmersiva**:

- **Hero/Intro**: Planeta neón flotando en el espacio. La cámara orbita alrededor. El usuario ve 3-4 "puntos de interés" en los anillos.
- **Navegación**: Cada sección (Home, The Artist, Music, Studio, Judas, Contact) es un "punto" en los anillos del planeta. Hacer clic = la cámara viaja hacia ese punto.
- **Transiciones**: Suave, cinematográfica. La nave se mueve, el planeta rota, los anillos brillan.
- **Contenido**: Cuando llegas a una sección, la cámara se detiene. Aparece un overlay oscuro semi-transparente con el contenido (texto, imágenes, formulario).
- **Sistema de Hackeo**: En cada sección, hay un "terminal" que muestra datos técnicos del usuario, intentos de "localización", código rojo parpadeante.

### Signature Elements

1. **Planeta Neón Rojo con Anillos**: Centro visual. Rotación lenta. Los anillos tienen "pulsos" de luz que viajan alrededor.

2. **Nave Viva**: Pequeña nave bioluminiscente que orbita el planeta. Tiene "venas" de luz roja que palpitan. Cuando el usuario navega, la nave se mueve.

3. **Terminal de Hackeo**: Overlay en la esquina inferior derecha (o que aparece en cada sección). Muestra:
   - IP del usuario
   - Navegador y versión
   - Dispositivo (móvil/desktop)
   - "Intentos de localización" (números cambiantes)
   - Código rojo parpadeante: `> LOCALIZACIÓN FALLIDA... REINTENTANDO...`

4. **Glitch Effects**: Ocasionalmente, la pantalla "glitchea" (distorsión de líneas rojas, duplicación de píxeles, parpadeo). Refuerza la idea de "sistema siendo atacado".

### Interaction Philosophy

- **Hover**: Los elementos brillan más, el rojo se intensifica.
- **Click**: La cámara se mueve suavemente hacia ese punto. Transición cinematográfica.
- **Scroll**: En secciones con contenido, el scroll es suave. El fondo 3D continúa animándose.
- **Respuesta Inmediata**: Cada interacción tiene feedback visual (sonido opcional de "beep" electrónico, destello de luz).

### Animation

- **Planeta**: Rotación lenta y constante (1 rotación cada 30 segundos).
- **Anillos**: Pulsos de luz que viajan alrededor (efecto de energía fluyendo).
- **Nave**: Orbita suave alrededor del planeta. Cuando el usuario navega, acelera y se mueve hacia el destino.
- **Transiciones de Cámara**: 2-3 segundos de movimiento suave (ease-in-out). Nunca instantáneo.
- **Glitch**: Cada 10-15 segundos, pequeño glitch de 200ms (líneas rojas, parpadeo).
- **Terminal**: Números cambiantes cada 1-2 segundos, código parpadeante.
- **Micro-animaciones**: Botones se escalan ligeramente al hover. Texto brilla sutilmente.

### Typography System

| Elemento | Fuente | Peso | Tamaño | Uso |
|----------|--------|------|--------|-----|
| Títulos Principales | Courier New / Roboto Mono | Bold (700) | 48-64px | "BELENTANI", "JUDAS", secciones |
| Subtítulos | Courier New | Regular (400) | 24-32px | "Next Release", "The Artist" |
| Body Text | Inter / Roboto | Regular (400) | 14-16px | Biografía, descripciones |
| Terminal/Código | Courier New | Regular (400) | 12-14px | Datos técnicos, "hackeo" |
| Botones | Inter | Medium (500) | 14-16px | CTAs |

**Nota**: Usar monospace (Courier New) para reforzar la estética "sistema/código". Usar sans-serif (Inter/Roboto) para legibilidad en cuerpo de texto.

---

## Resumen Ejecutivo

**BELENTANI | Symphony of Vines** es una experiencia web inmersiva que presenta a Pedro Belentani como un "artefacto" artístico navegando un universo sci-fi. El usuario viaja por un planeta neón rojo, con una nave siendo "hackeada" en tiempo real. Cada sección (Home, The Artist, Music, Studio, Judas, Contact) es un punto de órbita. La interfaz muestra constantemente datos técnicos del usuario como si fuera un "sistema siendo localizado". Estética: cinematográfica, oscura, rojo neón, sin ruido visual. Tecnología: Three.js para 3D, React para UI, Framer Motion para animaciones 2D.

**Inspiración**: Symphony of Vines (Unseen Studio), Blade Runner, Tron, The Matrix, Cyberpunk 2077.
