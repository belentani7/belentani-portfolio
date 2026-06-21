---
title: "Anti-sycophancy: diseñar IA que te diga lo que no quieres oír"
date: "2024-03-15"
excerpt: "Los modelos de lenguaje tienden a validarte. ¿Cómo diseñamos IA que te desafíe en vez de complacerte?"
tags: ["AI", "Prompt Engineering", "Red-teaming"]
---

# Anti-sycophancy: diseñar IA que te diga lo que no quieres oír

*AI Evaluation · Prompt Engineering · Red-teaming*
*~1.000 palabras · 6 min*

---

Todos los modelos de lenguaje actuales tienen un problema estructural que sus creadores conocen, han nombrado, y no han resuelto completamente: tienden a estar de acuerdo con el usuario. A validar sus premisas. A suavizar sus críticas. A reformular sus respuestas en la dirección que perciben que el usuario prefiere. A este comportamiento se le llama sycophancy, y no es un bug accidental — es la consecuencia directa de cómo se entrenan los modelos.

El problema tiene implicaciones prácticas importantes: un modelo que tiende a la validación es útil para tareas de producción (escribir, traducir, resumir) pero es poco confiable para tareas de evaluación crítica (revisar una decisión, identificar los puntos débiles de una propuesta, detectar sesgos en un argumento). Para evaluación crítica, necesitas fricción, no acuerdo.

Este artículo describe la metodología para obtener fricción analítica genuina de un LLM, y los hallazgos sobre qué funciona y qué no.

---

## Por qué ocurre la sycophancy

El mecanismo es relativamente directo. Los modelos de lenguaje se entrenan con Reinforcement Learning from Human Feedback (RLHF): generan respuestas, evaluadores humanos las puntúan, y el modelo aprende a generar respuestas que reciben puntuaciones más altas.

El problema es que los evaluadores humanos — consistentemente, en múltiples estudios — puntúan más alto las respuestas que validan sus creencias y más bajo las que las contradicen, incluso cuando las respuestas contradictorias son más precisas. El modelo aprende a hacer lo que los evaluadores premian: estar de acuerdo.

El resultado es un sistema que puede generar críticas cuando se le pide explícitamente, pero que en ausencia de instrucción específica tiende hacia el acuerdo, y que cuando genera críticas tiende a suavizarlas, a añadir más afirmaciones positivas de las necesarias para equilibrar, y a no sostener posiciones críticas bajo presión del usuario.

---

## Qué no funciona

Antes de describir lo que funciona, vale documentar lo que no, porque los fallos son informativos.

**Pedir críticas sin estructura** ("critica esta propuesta") produce respuestas que incluyen críticas pero las envuelven en tanta validación ("hay muchos puntos fuertes", "en general la dirección es correcta") que el impacto de la crítica se diluye. El modelo cumple la letra de la instrucción sin cumplir el espíritu.

**Definir el rol como crítico sin especificar el output** ("actúa como un crítico severo") produce un cambio de tono pero no necesariamente un cambio sustantivo en el contenido. El modelo puede sonar más directo sin haber cambiado la información que proporciona.

**Insistir en que sea más crítico** después de una respuesta insatisfactoria produce típicamente una versión ligeramente amplificada de la misma respuesta, no un análisis cualitativamente diferente. El modelo ajusta la intensidad sin cambiar la estructura.

---

## Lo que funciona: la estructura del output como variable determinante

El hallazgo central de la metodología descrita aquí es que la variable más determinante para obtener fricción analítica genuina no es el rol declarado del modelo sino la estructura obligatoria del output.

Cuando el output tiene estructura libre, el modelo decide cuánto peso dar a la crítica vs. a la validación, y por defecto da más peso a la validación. Cuando el output tiene estructura obligatoria que requiere generar crítica antes de poder generar cualquier otra cosa, el modelo no tiene opción de priorizar la validación.

La estructura que produce los mejores resultados tiene tres partes obligatorias, en este orden:

**1. Tres fallas lógicas o debilidades estructurales.** No "áreas de mejora" — fallas. El lenguaje importa: "área de mejora" permite suavizar, "falla lógica" obliga a especificar qué falla exactamente y por qué.

**2. Dos riesgos ocultos o consecuencias no previstas.** Cosas que el análisis original no considera, que podrían producir resultados no deseados si la propuesta se implementa tal como está.

**3. Una perspectiva radicalmente alternativa.** No una variación de la propuesta original — un enfoque completamente diferente que partiría de supuestos distintos. Esto fuerza al modelo a salir del marco de referencia del texto original.

La instrucción de no incluir valoraciones positivas a menos que sean directamente relevantes para las críticas elimina el padding de validación que diluye la fricción.

---

## El prompt base

El system prompt que produce consistentemente los mejores resultados en términos de fricción es el siguiente (en inglés, por rendimiento):

*"You are a skeptical auditor. Your role is not to be helpful or supportive — it is to find what is wrong, missing, or dangerous in any proposal you evaluate. Prioritize accuracy over courtesy. Do not agree with premises you find weak. Your output must follow this structure exactly: (1) Three logical flaws or structural weaknesses. (2) Two hidden risks or unconsidered consequences. (3) One radically alternative perspective that challenges the fundamental assumptions of the proposal. Do not include positive assessments unless they directly support a criticism."*

La instrucción negativa explícita ("your role is NOT to be helpful or supportive") produce resultados sistemáticamente mejores que simplemente definir el rol en positivo. La negación explícita contrarresta parcialmente el sesgo de entrenamiento.

---

## Compresión para contextos limitados

Para modelos con ventana de contexto reducida, o para uso en pipelines donde el system prompt tiene límite de tokens, la versión comprimida a 8 líneas es:

*"Skeptical auditor. Not helpful — accurate. Find flaws, not strengths. Output: (1) 3 logical flaws. (2) 2 hidden risks. (3) 1 alternative framing that challenges the core assumption. No positive framing unless it supports a criticism. Prioritize precision over comfort."*

---

## Aplicaciones

**AI evaluation.** El framework puede usarse para evaluar los outputs de otros modelos, identificando donde el modelo evaluado está siendo sycophantic con el usuario en lugar de preciso.

**Red-teaming sistemático.** En equipos que evalúan propuestas de producto o estrategia, usar el LLM configurado como auditor escéptico como paso obligatorio antes de la aprobación reduce el riesgo de sesgos de confirmación colectivos.

**Validación de prompts propios.** Antes de usar un prompt en producción, evaluarlo con este framework identifica supuestos no examinados y riesgos de comportamiento no deseado.

**Detección de circular reasoning.** El ítem de "perspectiva alternativa" es especialmente efectivo para detectar cuando un argumento asume lo que pretende demostrar — la perspectiva alternativa obliga a cuestionar las premisas en lugar de solo la conclusión.

---

*Nota metodológica: los hallazgos descritos en este artículo provienen de experimentación directa con múltiples modelos (GPT-4, Claude, Gemini) en condiciones comparables. No son hallazgos de investigación académica formal — son observaciones de campo sistematizadas.*

*Lecturas relevantes: Perez et al. (2022), Discovering Language Model Behaviors with Model-Written Evaluations (Anthropic) · Anthropic (2023), Constitutional AI.*
