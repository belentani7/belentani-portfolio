# Investigación de referencia: Symphony of Vines

La dirección elegida no replica código, escenas, textos ni activos de *The Symphony of Vines*. Traslada sus principios verificables a una narrativa original sobre BELENTANI, San Pedro y Judas.

| Hallazgo | Aplicación en BELENTANI |
|---|---|
| Unseen Studio estructura la experiencia como un viaje cinematográfico en capítulos, con texto breve, una acción clara y continuidad entre escenas. [1] | La web se organiza como una sola órbita narrativa: `Home`, `The Artist`, `Judas`, `Works` y `Contact`, enlazadas a puntos del anillo del planeta. |
| El equipo explica que usa Three.js y Theatre.js para componer trayectorias de cámara iterables y sincronizar elementos de escena. [2] | Se utilizará una escena de navegador ligera, con anillos CSS/SVG y motion basado en scroll; se evitará una carga WebGL pesada si no aporta contenido. |
| El estudio evita geometría excesiva usando técnicas como instancing, LOD y batching cuando hay muchos objetos. [2] | El planeta se construirá con gradientes, capas y vectores de bajo coste, sin modelos 3D pesados ni imágenes generadas. |
| La evaluación de Awwwards destaca animación pero muestra menor puntuación relativa en accesibilidad y semántica. [3] | La adaptación priorizará navegación por teclado, contraste, `prefers-reduced-motion`, jerarquía HTML y contenido legible sin animación. |

## Decisión técnica

La opción más viable es una **experiencia editorial inmersiva construida con React, CSS, SVG y Framer Motion**, no una copia literal basada en WebGL. Mantiene el carácter de viaje espacial, permite diseño responsive, reduce el coste de rendimiento y deja la arquitectura lista para añadir una escena Three.js más adelante solo si se dispone de un brief visual, equipo y presupuesto para producirla.

## Requisitos extraídos del contenido del usuario

La marca se presenta como **BELENTANI**, con la próxima etapa creativa titulada **Judas**. Los ejes de navegación requeridos son `Home`, `The Artist`, `Music`, `Studio`, `Judas` y `Contact`. La narrativa debe tratar San Pedro, Judas y los elementos “guardián”, “artefacto”, “voz” y “órbita” como **ficción artística y arquetípica**, nunca como un diagnóstico clínico o una afirmación factual sobre terceros.

La experiencia debe incluir un planeta rojo neón con anillos, una nave como señal visual y un estado de “interferencia” puramente estético. Los datos de navegador se pueden describir de forma local y transparente; la interfaz no afirmará localizar, hackear ni obtener una IP real del visitante.

## Criterios contemporáneos aplicados

El análisis de diseño publicado por Code Barcelona enfatiza que el buen diseño actual equilibra dirección visual, rendimiento, accesibilidad, mensaje claro y narrativa de marca, en lugar de añadir espectáculo que distraiga. [4] Por ello, el proyecto combinará una apertura atmosférica y una navegación inmersiva con rutas claras, controles de animación, copy conciso, un bloque de contacto visible y estructura semántica.

## Referencias

[1]: https://symphonyofvines.unseen.co/ "The Symphony of Vines — Chateau Oublié"
[2]: https://unread.unseen.co/the-symphony-of-vines-dev-insights-c284cc4e8aa0 "The Symphony of Vines: Dev Insights — Unseen Studio"
[3]: https://www.awwwards.com/sites/the-symphony-of-vines "The Symphony of Vines — Awwwards"
[4]: https://codewebbarcelona.com/mejores-disenos-web-2026/ "Mejores diseños web de 2026 — Code Barcelona"
