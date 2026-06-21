# DARVO: detectar manipulación en texto escrito — de la experiencia al caso de uso profesional

*Trust & Safety · Análisis forense de texto · NLP aplicado*
*~1.200 palabras · 7 min*

---

DARVO es un acrónimo propuesto por la psicóloga Jennifer Freyd en 1997 para describir un patrón de respuesta específico ante la confrontación directa: Deny (negar), Attack (atacar), Reverse Victim and Offender (invertir los roles de víctima y agresor). Freyd lo identificó originalmente en el contexto del abuso y la traición institucional, pero su estructura tiene aplicabilidad directa en el análisis de comportamiento en plataformas digitales, en investigaciones de recursos humanos, y en el diseño de clasificadores de abuso para sistemas de moderación de contenido.

Lo que hace al patrón especialmente relevante para el análisis de texto es que sus marcadores lingüísticos son suficientemente específicos para ser detectados de forma sistemática, sin necesitar evaluación clínica del individuo. El patrón está en la estructura del texto, no en el diagnóstico del autor.

---

## Los tres componentes y sus señales observables en texto

**Deny (Negación)**

La negación en el patrón DARVO tiene características específicas que la distinguen de la negación informativa estándar. No es simplemente "eso no ocurrió" — es una negación que evita sistemáticamente el contenido específico de la acusación.

Señales observables:
- Respuestas a preguntas directas que abordan la pregunta de forma oblicua sin responderla. "¿Hiciste X?" → "Siempre estás buscando problemas donde no los hay."
- Uso de lenguaje absoluto ("nunca", "jamás", "siempre has hecho lo mismo") que expande la conversación más allá del incidente específico.
- Demanda de evidencia que supera un estándar razonable para el contexto. "Demuéstramelo con pruebas" ante afirmaciones de comportamiento observable.
- Reformulación del hecho en disputa como interpretación subjetiva. "Tú lo entendiste mal" en lugar de "eso no ocurrió".

**Attack (Ataque)**

Cuando la negación no produce el efecto de cerrar la conversación, el patrón escala hacia el ataque al carácter, la credibilidad o el estado mental de quien confronta.

Señales observables:
- Cuestionamiento de la estabilidad o la salud mental del confrontante. "Estás exagerando", "necesitas ayuda", "siempre dramatizas todo".
- Recordatorio de faltas pasadas no relacionadas con el incidente actual, con el efecto de ampliar el territorio del conflicto y diluir la acusación específica.
- Descalificación de la fuente. "Claro, siempre que te conviene sacas esto", "lo dices porque estás resentido/a".
- Escalada de tono o de gravedad de las acusaciones, que produce en el confrontante la necesidad de gestionar la nueva acusación en lugar de mantener el foco en la original.

**Reverse Victim and Offender (Inversión de roles)**

El componente más sofisticado del patrón: el autor del comportamiento que generó la confrontación reposiciona la situación como una en la que él es la víctima de la confrontación misma.

Señales observables:
- Declaraciones de daño emocional producido por la confrontación. "No puedo creer que me estés acusando de esto, me duele muchísimo."
- Uso de lenguaje de victimización explícita. "Me estás atacando", "me tratas fatal", "eres muy injusto/a conmigo".
- Demanda de disculpa del confrontante por haber confrontado. "Deberías disculparte por haberme dicho esto."
- Reencuadre de la situación donde el acto original desaparece y la confrontación se convierte en el problema. La narrativa pasa de "hice X" a "tú me estás haciendo sufrir al acusarme de X."

---

## La metodología de detección: lectura retrogresiva

La detección de DARVO en texto requiere más que identificar marcadores individuales — requiere identificar el patrón en la secuencia completa de la conversación.

El método de lectura retrogresiva funciona así:

**Paso 1: Identificar el evento que activó la confrontación.** En el texto, encontrar el momento en que un nodo realizó una pregunta directa, una afirmación sobre comportamiento del otro, o una demanda de explicación. Este es el punto de inicio del análisis.

**Paso 2: Analizar la respuesta inmediata.** ¿La respuesta aborda la pregunta o la demanda de forma directa? Si no, ¿qué estructura tiene la respuesta? ¿Niega de forma oblicua, ataca, o redirige?

**Paso 3: Mapear la secuencia completa.** En conversaciones de más de un intercambio, documentar cómo evoluciona la respuesta. ¿El patrón de negación → ataque → inversión aparece en secuencia? ¿O solo algunos componentes?

**Paso 4: Distinguir el patrón del evento aislado.** El análisis retrogresivo pregunta: ¿esta estructura de respuesta ante confrontación directa aparece también en intercambios anteriores? Si la respuesta es sí, el patrón es consistente y tiene mayor valor diagnóstico. Si es el único intercambio documentado, la evaluación es más incierta.

---

## Diferencias entre comportamiento patológico y situacional

Un riesgo metodológico importante en la detección de DARVO es la sobreidentificación: interpretar como patrón lo que puede ser respuesta situacional.

Las características que distinguen el patrón consistente del evento situacional son:

**Frecuencia.** El patrón DARVO consistente aparece ante cualquier confrontación directa, independientemente de la gravedad del incidente. La respuesta situacional puede producir defensividad ante confrontaciones que el sujeto percibe como injustas, pero no ante toda confrontación.

**Escalada proporcional.** En el patrón consistente, la intensidad del ataque y la inversión de roles tiende a ser desproporcionada respecto a la gravedad de la confrontación. Una pregunta de bajo impacto genera la misma estructura de respuesta que una confrontación grave.

**Ausencia de resolución.** Las conversaciones que siguen el patrón DARVO raramente alcanzan resolución sobre el incidente original — la conversación se termina sobre la meta-conversación (el sufrimiento del atacado por haber sido confrontado) o se abandona sin resolución. El patrón situacional puede producir defensividad temporal seguida de resolución.

---

## Aplicación en Trust & Safety y moderación de contenido

La detección automatizada de DARVO en texto tiene aplicaciones directas en varias áreas:

**Clasificación de conflictos en plataformas de mensajería.** Los sistemas de moderación actuales son efectivos en la detección de contenido explícitamente abusivo (insultos directos, amenazas). El patrón DARVO opera en lenguaje no explícitamente abusivo — produce daño a través de la estructura de la interacción, no a través del vocabulario. La detección requiere análisis de la secuencia de la conversación, no solo del contenido de mensajes individuales.

**Soporte a investigaciones de HR.** En investigaciones de conflictos laborales donde la evidencia es principalmente comunicación escrita (emails, Slack, WhatsApp), la identificación del patrón DARVO en los textos de las partes aporta información estructural que complementa las declaraciones narrativas.

**Evaluación de reportes de abuso.** En plataformas que reciben reportes de usuarios sobre comportamiento de otros usuarios, el análisis DARVO de los textos adjuntos puede aportar indicadores sobre la estructura del conflicto que no son evidentes en la lectura superficial.

**Diseño de datasets de entrenamiento.** La taxonomía de marcadores lingüísticos de DARVO puede usarse para anotar datasets de entrenamiento para clasificadores de abuso relacional que vayan más allá de la detección de hate speech.

---

*Fuentes: Freyd, J.J. (1997), Violations of Power, Adaptive Blindness, and Betrayal Trauma Theory · Veldhuis, C.B. & Freyd, J.J. (1999), Groomed for Silence · Lyon, T.D. (2017), Interviewing Children · MacMartin, C. (2008), Victim Blaming Language in Closing Arguments.*
