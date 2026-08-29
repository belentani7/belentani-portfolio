# Preparación para Entrevistas — Pedro Belentani
## AI Engineer & Creative Technologist

---

## 1. Preguntas Comunes de AI Engineer + Respuestas

### Q: ¿Qué es un agente de IA y cómo lo implementarías?
**Respuesta modelo:**
> Un agente de IA es un sistema autónomo que perceibe su entorno, toma decisiones y ejecuta acciones para alcanzar un objetivo. Lo implementaría con: (1) un LLM como cerebro de razonamiento, (2) un sistema de herramientas (tool-use) para interactuar con el mundo, (3) memoria persistente (corto y largo plazo), y (4) un bucle de reflexión para auto-corregirse. En mi proyecto "Los Hermanos" usé CrewAI para orquestar 4 agentes colaborativos — cada uno con un rol especializado (composición, mastering, distribución, gestión de contenido) que coordinan mediante un protocolo de mensajería.

### Q: ¿Cómo manejas la alucinación en modelos de IA?
**Respuesta modelo:**
> Tres estrategias complementarias: (1) **RAG** — anclar respuestas a documentos verificados, (2) **prompt engineering** — instrucciones explícitas como "Si no estás seguro, di 'no tengo información suficiente'", y (3) **validación en cadena** — usar un segundo modelo o reglas para verificar output. En mi sistema de salud mental (Cassandra Complex), implementé RAG con base de conocimiento clínica + validación cruzada entre agentes para minimizar errores en un contexto donde la precisión es crítica.

### Q: ¿Cuál es la diferencia entre fine-tuning y RAG?
**Respuesta modelo:**
> **Fine-tuning** modifica los pesos del modelo para adaptarlo a un dominio específico — útil cuando el modelo necesita "aprender" un estilo o comportamiento nuevo. **RAG** inyecta contexto relevante en el prompt sin modificar el modelo — ideal para datos que cambian frecuentemente o que el modelo no conoce. En la práctica, uso RAG como primera opción (más barato, más flexible, más rápido de iterar) y considero fine-tuning solo cuando necesito comportamiento consistente que no se logra con prompting solo.

### Q: ¿Cómo evalúas la calidad de un sistema de IA?
**Respuesta modelo:**
> Métricas clave: (1) **Precisión/Recall/F1** para tareas de clasificación, (2) **latencia P95** para experiencia de usuario, (3) **tasa de alucinación** midiendo contra ground truth, (4) **costo por consulta** para viabilidad económica, y (5) **evaluación humana** con evaluadores independientes. En TELUS Digital, desarrollé sistemas de detección de contenido dañino con >95% de precisión usando estas métricas combinadas.

### Q: ¿Qué es el MCP (Model Context Protocol)?
**Respuesta modelo:**
> MCP es un protocolo que estandariza cómo los modelos de IA se conectan con herramientas y fuentes de datos externas. Funciona como un "USB-C para IA" — un interface universal que permite a cualquier LLM usar cualquier herramienta. Lo uso en mi ecosistema AI para conectar agentes con APIs externas, bases de datos y servicios de forma modular y reutilizable.

### Q: ¿Cómo optimizas el costo de llamadas a APIs de IA?
**Respuesta modelo:**
> Estrategias: (1) **Caching semántico** — guardar respuestas preguntas similares, (2) **Routing por complejidad** — usar modelos baratos (GPT-4o-mini) para tareas simples y potentes (Claude Opus) para razonamiento complejo, (3) **Compresión de contexto** — resumir historial en vez de enviar todo, (4) **Batch processing** — agrupar consultas. En mi ecosistema AI, implementé routing inteligente que reduce costos ~60% manteniendo calidad.

### Q: ¿Qué experiencia tienes con sistemas multi-agente?
**Respuesta modelo:**
> He construido 3 sistemas multi-agente en producción: (1) **Belentani AI Ecosystem** — 4 agentes para composición musical usando LangChain + CrewAI, (2) **Cassandra Complex** — 7 agentes para salud mental con RAG clínico, (3) **Los Hermanos** — agentes colaborativos para producción de contenido. Patrones que uso: orquestación centralizada (supervisor), comunicación por eventos, memoria compartida vía Redis, y dead-letter queues para tolerancia a fallos.

### Q: ¿Cómo garantizas la seguridad en sistemas de IA?
**Respuesta modelo:**
> Capas de seguridad: (1) **Input sanitization** — validar y filtrar todo input del usuario, (2) **Output filtering** — detectar contenido dañino antes de entregarlo, (3) **Rate limiting** — prevenir abuso, (4) **RBAC** — control de acceso por roles, (5) **Audit logging** — trazabilidad completa. Mi experiencia en Trust & Safety de Google me enseñó que la seguridad no es un feature — es un requisito arquitectónico desde el día 1.

---

## 2. Preguntas de System Design

### Diseña un sistema de chatbot con memoria a largo plazo
**Estructura de respuesta:**
1. **Requisitos:** Conversaciones persistentes, latencia <2s, 10K usuarios concurrentes
2. **Componentes:**
   - **API Gateway** → rate limiting, auth, routing
   - **Chat Service** → FastAPI + WebSocket para tiempo real
   - **Memory Store** → Redis (corto plazo) + PostgreSQL/Vector DB (largo plazo)
   - **LLM Router** → seleccionar modelo por complejidad
   - **RAG Pipeline** → embeddings + retrieval para contexto
3. **Flujo:** User message → context assembly (memory + RAG) → LLM → response + store in memory
4. **Trade-offs:** Consistencia vs disponibilidad, costo vs latencia, privacidad vs funcionalidad

**Mi experiencia aplicada:** En "Los Hermanos", implementé memoria persistente con Redis para contexto de sesión y PostgreSQL para historial a largo plazo, con un sistema de compresión automática del contexto que reduce tokens un 70%.

### Diseña un sistema de procesamiento de documentos con IA
**Estructura de respuesta:**
1. **Ingesta:** Upload → OCR/Parsing → Chunking semántico
2. **Indexación:** Embeddings → Vector DB (pgvector/Pinecone) + metadata en PostgreSQL
3. **Retrieval:** Query → hybrid search (vectorial + keyword) → reranking
4. **Generación:** Contexto recuperado + prompt → LLM → respuesta con citations
5. **Escalabilidad:** Colas de mensajes (Redis/BullMQ) para procesamiento async

**Mi experiencia aplicada:** En "Noia Core v3", implementé pipeline de procesamiento de contenido con FastAPI + Redis queues + PostgreSQL, procesando documentos de forma async con reintentos automáticos.

### Diseña un sistema de recomendación con IA
**Estructura de respuesta:**
1. **Data Pipeline:** Eventos de usuario → ETL → features
2. **Modelos:** Collaborative filtering + content-based + hybrid
3. **Serving:** Feature store → modelo en inference → ranking → cache
4. **Feedback Loop:** A/B testing → métricas → retraining automático
5. **Cold Start:** Contenido popular + metadata-based para nuevos usuarios

### Diseña un sistema de monitoreo de contenido en tiempo real
**Estructura de respuesta:**
1. **Ingesta de contenido** →消息队列 (Kafka/Redis Streams)
2. **Clasificación multilayer:** Reglas → ML modelo → revisión humana
3. **Acciones:** Bloquear, escalar, alertar, archivar
4. **Dashboard:** Métricas en tiempo real, alertas, auditoría
5. **Escalabilidad:** Processamiento distribuido, modelos edge para baja latencia

**Mi experiencia aplicada:** Directamente de mi trabajo en TELUS Digital/Google — sistemas de detección de contenido dañino con >95% de precisión procesando millones de interacciones diarias.

---

## 3. Preguntas Comportamentales (Método STAR)

### Cuéntame sobre un momento en que tuviste que resolver un problema complejo bajo presión.

**S (Situación):** En TELUS Digital, estábamos manejando una crisis de contenido viralo que requería análisis inmediato de patrones de comportamiento a escala de millones de interacciones.

**T (Tarea):** Identificar patrones de manipulación y proponer soluciones automatizadas en menos de 24 horas.

**A (Acción):**
- Analicé datos de múltiples fuentes en paralelo
- Desarrollé un script de Python para detectar anomalías en patrones de engagement
- Comunicé hallazgos al equipo de Google con visualizaciones claras
- Propuse un sistema automatizado de detección

**R (Resultado):** Redujimos el tiempo de respuesta en 40% y el sistema automatizado fue adoptado permanentemente. El sistema logró >95% de precisión en detección.

---

### Describe una situación en que tuviste que aprender una tecnología nueva rápidamente.

**S:** Mi transición de analyst a AI Engineer requirió aprender Python, APIs de IA y arquitectura de sistemas de agentes en paralelo.

**T:** Construir 3 sistemas de agentes de IA funcionales en 6 meses mientras mantenía mi rol actual.

**A:**
- Dediqué 2-3 horas diarias a learning práctico
- Construí proyectos reales (no tutoriales) para aprender haciendo
- Usé la metodología "learn by building" — cada concepto se aplicaba inmediatamente
- Comuniqué mi progreso y aprendizaje al equipo

**R:** Desplegué 3 sistemas multi-agente en producción, completé el Master en AI for Creative Industries, y mi enfoque de "aprendizaje aplicado" se convirtió en mi marca personal.

---

### Cuéntame sobre un proyecto donde fallaste y qué aprendiste.

**S:** En mi primer intento de construir un agente musical, intenté crear un sistema demasiado ambicioso con 8 agentes simultáneos.

**T:** Construir un sistema de composición musical autónoma.

**A:**
- El sistema era demasiado complejo — los agentes entraban en loops infinitos
- Di un paso atrás y simplifiqué a 4 agentes con roles claros
- Implementé un supervisor central que orquestaba las comunicaciones
- Aprendí que la simplicidad > complejidad en sistemas distribuidos

**R:** El sistema simplificado funcionó mejor, fue más mantenible, y aprendí la lección valuable: "start simple, add complexity only when needed." Esta filosofía aplica a todo mi trabajo actual.

---

### Describe cómo manejas conflictos en un equipo.

**S:** En un proyecto de equipo, había desacuerdo sobre la arquitectura del sistema de IA — algunos querían microservicios, otros monolito.

**T:** Encontrar una solución técnica que satisficiera las preocupaciones de todos.

**A:**
- Escuché las preocupaciones de cada parte (no solo la técnica, también las de mantenimiento)
- Propuse una arquitectura modular (monolito bien estructurado que podía dividirse después)
- Hice un PoC rápido para demostrar que funcionaba
- Documenté la decisión y el rationale para el equipo

**R:** El equipo adoptó la solución, y la documentación se convirtió en referencia para futuras decisiones. Aprendí que escuchar > imponer.

---

### Cuéntame sobre un logro del que estás especialmente orgulloso.

**S:** Mi sistema "Cassandra Complex" — un portal de salud mental con 7 agentes de IA para población vulnerable.

**T:** Crear una herramienta de IA que pudiera proporcionar apoyo inicial de salud mental de forma responsable.

**A:**
- Diseñé 7 agentes especializados (triage, empathetic listener, resource finder, etc.)
- Implementé RAG con base de conocimiento clínica verificada
- Añadí guardrails de seguridad: detección de crisis, derivación a profesionales
- Integré mecanismos de feedback humano para mejora continua

**R:** Un sistema que demuestra cómo la IA puede ser beneficiosa en contextos sensibles cuando se diseña con responsabilidad. Este proyecto define mi enfoque: tecnología con propósito.

---

## 4. Desafíos Técnicos de Código

### Challenge 1: Implementa un sistema de caché semántico
```python
import hashlib
from typing import Optional
from sentence_transformers import SentenceTransformer
import numpy as np

class SemanticCache:
    def __init__(self, similarity_threshold=0.85):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.cache = {}
        self.threshold = similarity_threshold

    def _embed(self, text: str) -> np.ndarray:
        return self.model.encode(text)

    def get(self, query: str) -> Optional[str]:
        query_embedding = self._embed(query)
        for cached_query, (embedding, response) in self.cache.items():
            similarity = np.dot(query_embedding, embedding) / (
                np.linalg.norm(query_embedding) * np.linalg.norm(embedding)
            )
            if similarity >= self.threshold:
                return response
        return None

    def set(self, query: str, response: str):
        embedding = self._embed(query)
        self.cache[query] = (embedding, response)
```

### Challenge 2: Implementa un rate limiter con sliding window
```python
import time
from collections import defaultdict

class SlidingWindowRateLimiter:
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window = window_seconds
        self.requests = defaultdict(list)

    def is_allowed(self, client_id: str) -> bool:
        now = time.time()
        self.requests[client_id] = [
            t for t in self.requests[client_id]
            if now - t < self.window
        ]
        if len(self.requests[client_id]) < self.max_requests:
            self.requests[client_id].append(now)
            return True
        return False
```

### Challenge 3: Diseña un pipeline de procesamiento de documentos
```python
from dataclasses import dataclass
from typing import List
import asyncio

@dataclass
class Document:
    content: str
    metadata: dict
    chunks: List[str] = None

class DocumentPipeline:
    def __init__(self, chunk_size=500, overlap=50):
        self.chunk_size = chunk_size
        self.overlap = overlap

    async def process(self, doc: Document) -> Document:
        # 1. Limpiar texto
        cleaned = self._clean(doc.content)
        # 2. Chunking semántico
        doc.chunks = self._semantic_chunk(cleaned)
        # 3. Embeddings (mock)
        doc.metadata['embeddings'] = await self._get_embeddings(doc.chunks)
        return doc

    def _clean(self, text: str) -> str:
        import re
        text = re.sub(r'\s+', ' ', text)
        return text.strip()

    def _semantic_chunk(self, text: str) -> List[str]:
        words = text.split()
        chunks = []
        for i in range(0, len(words), self.chunk_size - self.overlap):
            chunk = ' '.join(words[i:i + self.chunk_size])
            chunks.append(chunk)
        return chunks

    async def _get_embeddings(self, chunks: List[str]):
        # Mock — en producción usar OpenAI/Cohere embeddings
        return [{"text": c, "embedding": [0.1]*384} for c in chunks]
```

### Challenge 4: Implementa un circuit breaker para llamadas a API
```python
import time
from enum import Enum

class State(Enum):
    CLOSED = "closed"
    OPEN = "open"
    HALF_OPEN = "half_open"

class CircuitBreaker:
    def __init__(self, failure_threshold=5, recovery_timeout=30):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.state = State.CLOSED
        self.failure_count = 0
        self.last_failure_time = 0

    def call(self, func, *args, **kwargs):
        if self.state == State.OPEN:
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = State.HALF_OPEN
            else:
                raise Exception("Circuit is OPEN")

        try:
            result = func(*args, **kwargs)
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise

    def _on_success(self):
        self.failure_count = 0
        self.state = State.CLOSED

    def _on_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        if self.failure_count >= self.failure_threshold:
            self.state = State.OPEN
```

### Challenge 5: Implementa un sistema de eventos simple
```python
from typing import Callable, Dict, List, Any
from collections import defaultdict

class EventBus:
    def __init__(self):
        self._handlers: Dict[str, List[Callable]] = defaultdict(list)

    def subscribe(self, event: str, handler: Callable):
        self._handlers[event].append(handler)

    def publish(self, event: str, data: Any = None):
        for handler in self._handlers[event]:
            handler(data)

    def unsubscribe(self, event: str, handler: Callable):
        self._handlers[event].remove(handler)

# Uso
bus = EventBus()
bus.subscribe("user.created", lambda u: print(f"Welcome {u['name']}!"))
bus.publish("user.created", {"name": "Pedro"})
```

---

## 5. Script de Presentación del Portfolio

### Apertura (30 segundos)
> "Hola, soy Pedro Belentani, AI Engineer & Creative Technologist basado en Barcelona. Tengo 8+ años de experiencia analizando patrones complejos — primero en Trust & Safety de Google/Telus Digital, y ahora construyendo sistemas de IA que van más allá de demos: sistemas que resisten presión real."

### Trayectoria (1 minuto)
> "Mi experiencia se divide en dos mundos que se complementan. Por un lado, 6 años en TELUS Digital/Google analizando comportamiento humano a escala de millones de interacciones diarias — desarrollando sistemas de detección con >95% de precisión y reduciendo tiempos de respuesta en 40%. Por otro, he construido 3 sistemas de agentes de IA desplegados en producción: un sistema musical multi-agente, un portal de salud mental con 7 agentes, y un sistema de productividad con memoria persistente."

### Proyectos estrella (2 minutos)

**Proyecto 1 — Belentani AI Ecosystem:**
> "Mi ecosistema de IA personal — un conjunto de agentes especializados para composición, producción y gestión artística. Usa LangChain y CrewAI para orquestar agentes que colaboran en tiempo real. El resultado: automatización completa del flujo de trabajo creativo, desde la composición hasta la distribución."

**Proyecto 2 — Cassandra Complex:**
> "Un portal de salud mental con 7 agentes de IA para población vulnerable. Cada agente tiene un rol específico — triage, escucha empática, búsqueda de recursos. Integra RAG con base de conocimiento clínica verificada. Este proyecto define mi filosofía: tecnología con propósito, no solo tecnología por tecnología."

**Proyecto 3 — Judas Experience:**
> "Una experiencia web inmersiva cyberpunk que combina Three.js, audio espacial y lore transmedia. No es solo un portfolio — es un demo técnico de lo que puedo construir: interfaces que comunican, que generan impacto, que cuentan historias."

### Diferenciador (30 segundos)
> "Lo que me diferencia no es solo el stack técnico — es la mentalidad. Mi experiencia en Trust & Safety me enseñó cómo la IA falla en el mundo real. No construyo sistemas que solo funcionan en demos. Construyo sistemas que resisten presión, manejan casos borde, y mantienen calidad bajo escala. Esa robustez es exactamente lo que separa una IA de producción de un prototipo frágil."

### Cierre (30 segundos)
> "Busco un equipo donde pueda aplicar esta combinación única de análisis sistémico, experiencia en IA de producción, y pensamiento creativo. Mi disponibilidad es inmediata — remoto o híbrido en Barcelona. ¿Tienen alguna pregunta sobre alguno de mis proyectos?"

---

## Tips Adicionales

### Antes de la entrevista
- [ ] Investiga la empresa — productos, stack, cultura
- [ ] Prepara 2-3 preguntas para el entrevistador
- [ ] Revisa tu portfolio y ten demos listas
- [ ] Practica el script en voz alta (cronómetro: ~4 minutos total)

### Durante la entrevista
- [ ] Usa números concretos (>95% precisión, 40% reducción, 3 agentes)
- [ ] Conecta tu experiencia en TELUS con el rol que aplicas
- [ ] Menciona proyectos específicos, no generalidades
- [ ] Sé honesto sobre lo que no sabes — pero muestra cómo aprenderías

### Preguntas para hacer al entrevistador
1. "¿Cuál es el mayor desafío técnico que el equipo de IA enfrenta actualmente?"
2. "¿Cómo es el proceso de despliegue de modelos a producción?"
3. "¿Qué métricas usan para evaluar el éxito de los sistemas de IA?"
4. "¿Cómo manejan el balance entre experimentación y estabilidad?"
5. "¿Cuál es la composición del equipo de IA?"

---

*Última actualización: 27/06/2026*
*Pedro Belentani — AI Engineer & Creative Technologist*
