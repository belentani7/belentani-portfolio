# Dirección de diseño — BELENTANI | Judas Orbit

## Tres rutas exploradas

| Tema | Introducción breve | Probabilidad |
|---|---|---:|
| **Archivo Litúrgico** | Una interfaz editorial de archivo oscuro, en la que los textos se descubren como documentos recuperados. La emoción nace de la tipografía y del silencio, no del espectáculo. | 0.04 |
| **Órbita de Judas** | Un viaje espacial de neón rojo sobre una esfera distante: cada sección es una coordenada del anillo y el contenido aparece como una transmisión recuperada. | 0.07 |
| **Escenario de Ceniza** | Un portfolio de contraste mineral con fotografía monocroma, grano y grandes titulares recortados. El tono es humano, físico y casi teatral. | 0.02 |

## Dirección seleccionada: Órbita de Judas

### Movimiento de diseño

La propuesta combina el **diseño editorial cinematográfico** con una interfaz espacial de precisión. No es un dashboard ni una interfaz cyberpunk genérica: el rojo funciona como una señal de transmisión, y la astronomía como estructura narrativa.

### Principios rectores

1. **Una escena, una función.** El planeta acompaña y orienta; nunca tapa el texto ni sustituye la navegación.
2. **La narrativa es un recorrido.** Cada punto del anillo corresponde a un capítulo identificable y accesible, con su propio ritmo y jerarquía.
3. **Señal antes que decoración.** Las líneas, coordenadas y estados técnicos explican la interfaz o sostienen el tono; se elimina cualquier gráfico sin función.
4. **Calma bajo tensión.** La amenaza de “interferencia” es una ficción visual, contenida por mucho espacio negativo, copy conciso y transiciones legibles.

### Filosofía de color

El fondo es negro tinta y gris profundo para absorber ruido visual. El rojo de señal `#FF3B44` pertenece a BELENTANI y marca ruta, selección y energía; el marfil cálido `#F4EFEA` devuelve humanidad al contenido largo. Un tono ámbar apagado se reserva para advertencias estéticas, nunca para una falsa alerta del sistema.

### Paradigma de layout

La página no se organiza como una cuadrícula de tarjetas. Se articula en una **columna narrativa desplazada**, con una órbita SVG fija a la izquierda en escritorio y una línea de ruta horizontal compacta en móvil. El planeta se mantiene como masa visual al fondo y cambia de posición con el capítulo activo.

### Elementos de firma

1. Un planeta rojo compuesto por capas CSS y una sombra de eclipse, acompañado de anillos SVG discontinuos.
2. Marcadores de capítulo que viajan por los anillos y dejan una estela mínima.
3. Una señal de “interferencia” abstracta —no un hackeo real— con líneas de exploración y fragmentos de texto breves.

### Filosofía de interacción

La interacción convierte la visita en exploración sin encerrar al usuario. Los botones de órbita realizan scroll suave; el foco de teclado revela etiquetas; el estado activo se lee por color, texto y posición. El panel técnico revela el navegador y las preferencias de movimiento únicamente en local, sin IP, geolocalización ni recolección de información sensible.

### Animación

Los anillos rotan con cadencia muy lenta; la nave es un punto luminoso con estela, no un sprite. Las entradas de capítulos combinan opacidad y traslación vertical inferior a 18 px, con `cubic-bezier(0.23, 1, 0.32, 1)` y duraciones de 180–320 ms. Todo movimiento no esencial se desactiva mediante `prefers-reduced-motion`.

### Sistema tipográfico

`Space Grotesk` aporta precisión contemporánea a la interfaz y titulares; `DM Mono` se reserva para coordenadas y microcopy. Los titulares mezclan mayúscula abierta, gran tamaño y tracking negativo; el cuerpo mantiene una medida de lectura máxima de 62 caracteres y generosa interlínea.

### Esencia de marca

**BELENTANI transforma voz, imagen y mito en un mapa sonoro para quien busca una experiencia artística sin plantilla.** Personalidad: **ritual, preciso, magnético**.

### Voz de marca

Los titulares son breves, sensoriales y afirmativos. Los CTAs no presionan: invitan a entrar o escuchar.

> “La señal no llegó desde lejos. La construimos aquí.”

> “Entra en la órbita. Escucha lo que queda fuera del archivo.”

### Wordmark y logo

El wordmark se construye como `B / BELENTANI`, donde la barra del corte funciona como una línea de órbita. El símbolo es una B geométrica abierta, atravesada por un eje de señal; no utiliza el nombre de marca como logotipo por defecto.

### Color de firma

**Orbit Red — `#FF3B44`**.

## Arquitectura de contenido

| Capítulo | Propósito | Acción principal |
|---|---|---|
| Home | Presentar la próxima etapa “Judas” y abrir el viaje. | Entrar en la órbita |
| The Artist | Exponer una bio editorial comprobable y la mezcla de R&B, pop y electrónica. | Leer el manifiesto |
| Music | Ordenar títulos y plataformas como archivo sonoro. | Abrir plataformas |
| Studio | Presentar la práctica creativa y la colaboración como proceso, sin prometer herramientas inexistentes. | Ver el proceso |
| Judas | Presentar la mitología como ficción artística, sin acusaciones ni diagnósticos. | Abrir el archivo |
| Contact | Ofrecer una vía de contacto accesible. | Escribir un mensaje |

## Style Decisions

- Cada capítulo conserva al menos un artefacto orbital visible: fragmento de anillo, marcador de coordenada, línea de transmisión o sombra de planeta.
- **Orbit Red `#FF3B44`** solo funciona como señal activa: ruta, selección, CTA, marcador de capítulo, advertencia o interferencia.
- La marca se presenta siempre como **`B / BELENTANI`**, donde la barra funciona como eje de órbita; no se utilizará como etiqueta genérica junto a un icono cuadrado.
