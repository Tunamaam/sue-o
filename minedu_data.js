/**
 * MINEDU_DATA
 * Fuente: CNEB (Currículo Nacional de la Educación Básica - Perú)
 * Estructura oficial para validación y selección en cascada.
 */

window.MINEDU_DATA = {
    // 1. NIVELES Y ÁREAS
    "niveles": {
        "Inicial": {
            "areas": [
                "Personal Social",
                "Psicomotriz",
                "Comunicación",
                "Matemática",
                "Ciencia y Tecnología",
                "Castellano como segunda lengua"
            ]
        },
        "Primaria": {
            "areas": [
                "Personal Social",
                "Educación Física",
                "Comunicación",
                "Arte y Cultura",
                "Castellano como segunda lengua",
                "Inglés como lengua extranjera",
                "Matemática",
                "Ciencia y Tecnología",
                "Educación Religiosa"
            ]
        },
        "Secundaria": {
            "areas": [
                "Desarrollo Personal, Ciudadanía y Cívica",
                "Ciencias Sociales",
                "Educación Física",
                "Arte y Cultura",
                "Comunicación",
                "Castellano como segunda lengua",
                "Inglés como lengua extranjera",
                "Matemática",
                "Ciencia y Tecnología",
                "Educación Religiosa",
                "Educación para el Trabajo"
            ]
        }
    },

    // 2. COMPETENCIAS Y CAPACIDADES (Por Área - Muestra representativa y estructuras clave)
    // NOTA: Se incluyen las competencias oficiales estándar.
    "curriculo": {
        // --- PERSONAL SOCIAL (Inicial/Primaria) | DPCC (Secundaria) ---
        "Personal Social": {
            "Construye su identidad": [
                "Se valora a sí mismo.",
                "Autorregula sus emociones.",
                "Reflexiona y argumenta éticamente.",
                "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez."
            ],
            "Convive y participa democráticamente en la búsqueda del bien común": [
                "Interactúa con todas las personas.",
                "Construye normas y asume acuerdos y leyes.",
                "Maneja conflictos de manera constructiva.",
                "Delibera sobre asuntos públicos.",
                "Participa en acciones que promueven el bienestar común."
            ],
            "Construye interpretaciones históricas": [
                "Interpreta críticamente fuentes diversas.",
                "Comprende el tiempo histórico.",
                "Elabora explicaciones sobre procesos históricos."
            ],
            "Gestiona responsablemente el espacio y el ambiente": [
                "Comprende las relaciones entre los elementos naturales y sociales.",
                "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
                "Genera acciones para conservar el ambiente local y global."
            ],
            "Gestiona responsablemente los recursos económicos": [
                "Comprende las relaciones entre los elementos del sistema económico y financiero.",
                "Toma decisiones económicas y financieras."
            ]
        },
        "Desarrollo Personal, Ciudadanía y Cívica": { // Alias conceptual para Secundaria
             "Construye su identidad": [
                "Se valora a sí mismo.",
                "Autorregula sus emociones.",
                "Reflexiona y argumenta éticamente.",
                "Vive su sexualidad de manera integral y responsable."
            ],
            "Convive y participa democráticamente en la búsqueda del bien común": [
                "Interactúa con todas las personas.",
                "Construye normas y asume acuerdos y leyes.",
                "Maneja conflictos de manera constructiva.",
                "Delibera sobre asuntos públicos.",
                "Participa en acciones que promueven el bienestar común."
            ]
        },
        "Ciencias Sociales": {
             "Construye interpretaciones históricas": [
                "Interpreta críticamente fuentes diversas.",
                "Comprende el tiempo histórico.",
                "Elabora explicaciones sobre procesos históricos."
            ],
            "Gestiona responsablemente el espacio y el ambiente": [
                "Comprende las relaciones entre los elementos naturales y sociales.",
                "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
                "Genera acciones para conservar el ambiente local y global."
            ],
            "Gestiona responsablemente los recursos económicos": [
                "Comprende las relaciones entre los elementos del sistema económico y financiero.",
                "Toma decisiones económicas y financieras."
            ]
        },

        // --- EDUCACIÓN FÍSICA ---
        "Educación Física": {
            "Se desenvuelve de manera autónoma a través de su motricidad": [
                "Comprende su cuerpo.",
                "Se expresa corporalmente."
            ],
            "Asume una vida saludable": [
                "Comprende las relaciones entre la actividad física, alimentación, postura e higiene personal y del ambiente, y la salud.",
                "Incorpora prácticas que mejoran su calidad de vida."
            ],
            "Interactúa a través de sus habilidades sociomotrices": [
                "Se relaciona utilizando sus habilidades sociomotrices.",
                "Crea y aplica estrategias y tácticas de juego."
            ]
        },

        // --- COMUNICACIÓN ---
        "Comunicación": {
            "Se comunica oralmente en su lengua materna": [
                "Obtiene información del texto oral.",
                "Infiere e interpreta información del texto oral.",
                "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada.",
                "Utiliza recursos no verbales y paraverbales de forma estratégica.",
                "Interactúa estratégicamente con distintos interlocutores.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."
            ],
            "Lee diversos tipos de textos escritos en su lengua materna": [
                "Obtiene información del texto escrito.",
                "Infiere e interpreta información del texto.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto."
            ],
            "Escribe diversos tipos de textos en su lengua materna": [
                "Adecúa el texto a la situación comunicativa.",
                "Organiza y desarrolla las ideas de forma coherente y cohesionada.",
                "Utiliza convenciones del lenguaje escrito de forma pertinente.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."
            ]
        },

        // --- ARTE Y CULTURA ---
        "Arte y Cultura": {
            "Aprecia de manera crítica manifestaciones artístico-culturales": [
                "Percibe manifestaciones artístico-culturales.",
                "Contextualiza manifestaciones artístico-culturales.",
                "Reflexiona creativa y críticamente sobre manifestaciones artístico-culturales."
            ],
            "Crea proyectos desde los lenguajes artísticos": [
                "Explora y experimenta los lenguajes del arte.",
                "Aplica procesos creativos.",
                "Evalúa y comunica sus procesos y proyectos."
            ]
        },

        // --- MATEMÁTICA ---
        "Matemática": {
            "Resuelve problemas de cantidad": [
                "Traduce cantidades a expresiones numéricas.",
                "Comunica su comprensión sobre los números y las operaciones.",
                "Usa estrategias y procedimientos de estimación y cálculo.",
                "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones."
            ],
            "Resuelve problemas de regularidad, equivalencia y cambio": [
                "Traduce datos y condiciones a expresiones algebraicas y gráficas.",
                "Comunica su comprensión sobre las relaciones algebraicas.",
                "Usa estrategias y procedimientos para encontrar equivalencias y reglas generales.",
                "Argumenta afirmaciones sobre relaciones de cambio y equivalencia."
            ],
            "Resuelve problemas de forma, movimiento y localización": [
                "Modela objetos con formas geométricas y sus transformaciones.",
                "Comunica su comprensión sobre las formas y relaciones geométricas.",
                "Usa estrategias y procedimientos para medir y orientarse en el espacio.",
                "Argumenta afirmaciones sobre relaciones geométricas."
            ],
            "Resuelve problemas de gestión de datos e incertidumbre": [
                "Representa datos con gráficos y medidas estadísticas o probabilísticas.",
                "Comunica su comprensión de los conceptos estadísticos y probabilísticos.",
                "Usa estrategias y procedimientos para recopilar y procesar datos.",
                "Sustenta conclusiones o decisiones con base en la información obtenida."
            ]
        },

        // --- CIENCIA Y TECNOLOGÍA ---
        "Ciencia y Tecnología": {
            "Indaga mediante métodos científicos para construir sus conocimientos": [
                "Problematiza situaciones para hacer indagación.",
                "Diseña estrategias para hacer indagación.",
                "Genera y registra datos o información.",
                "Analiza datos e información.",
                "Evalúa y comunica el proceso y resultados de su indagación."
            ],
            "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo": [
                "Comprende y usa conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo.",
                "Evalúa las implicancias del saber y del quehacer científico y tecnológico."
            ],
            "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno": [
                "Determina una alternativa de solución tecnológica.",
                "Diseña la alternativa de solución tecnológica.",
                "Implementa y valida la alternativa de solución tecnológica.",
                "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica."
            ]
        },

        // --- EDUCACIÓN RELIGIOSA ---
        "Educación Religiosa": {
            "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente": [
                "Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente.",
                "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa."
            ],
            "Asume la experiencia del encuentro personal y comunitario con Dios": [
                "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa.",
                "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
            ]
        },

        // --- EDUCACIÓN PARA EL TRABAJO (Secundaria) ---
        "Educación para el Trabajo": {
            "Gestiona proyectos de emprendimiento económico o social": [
                "Crea propuestas de valor.",
                "Aplica habilidades técnicas.",
                "Trabaja cooperativamente para lograr objetivos y metas.",
                "Evalúa los resultados del proyecto de emprendimiento."
            ]
        },
        
        // --- INGLÉS ---
        "Inglés como lengua extranjera": {
            "Se comunica oralmente en inglés como lengua extranjera": [
                "Obtiene información del texto oral.",
                "Infiere e interpreta información del texto oral.",
                "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada.",
                "Utiliza recursos no verbales y paraverbales de forma estratégica.",
                "Interactúa estratégicamente con distintos interlocutores.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."
            ],
            "Lee diversos tipos de textos escritos en inglés como lengua extranjera": [
                "Obtiene información del texto escrito.",
                "Infiere e interpreta información del texto escrito.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."
            ],
            "Escribe diversos tipos de textos en inglés como lengua extranjera": [
                "Adecúa el texto a la situación comunicativa.",
                "Organiza y desarrolla las ideas de forma coherente y cohesionada.",
                "Utiliza convenciones del lenguaje escrito de forma pertinente.",
                "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."
            ]
        }
    },

    // 3. DESEMPEÑOS (Ejemplos por Área y Grado - Estructura para validación)
    // NOTA: Dada la extensión masiva del CNEB, aquí se colocan ESTRUCTURAS DE EJEMPLO.
    // El sistema debe permitir entrada manual si no encuentra el desempeño exacto.
    "desempenos_data": {
        // Formato: "Competencia": { "Grado": ["D1...", "D2..."] }
        // Se puede expandir posteriormente.
    },

    // 4. TRANSVERSALES (COMPLETO)
    "transversales": {
        "competencias": {
            "Se desenvuelve en entornos virtuales generados por las TIC": [
                "Personaliza entornos virtuales.",
                "Gestiona información del entorno virtual.",
                "Interactúa en entornos virtuales.",
                "Crea objetos virtuales en diversos formatos."
            ],
            "Gestiona su aprendizaje de manera autónoma": [
                "Define metas de aprendizaje.",
                "Organiza acciones estratégicas para alcanzar sus metas de aprendizaje.",
                "Monitorea y ajusta su desempeño durante el proceso de aprendizaje."
            ]
        }
    },

    // 5. ENFOQUES Y VALORES (COMPLETO)
    "enfoques": {
        "Enfoque Intercultural": {
             "valores": ["Respeto a la identidad cultural", "Justicia", "Diálogo intercultural"]
        },
        "Enfoque de Atención a la diversidad": {
             "valores": ["Respeto por las diferencias", "Equidad en la enseñanza", "Confianza en la persona"]
        },
        "Enfoque de Igualdad de género": {
             "valores": ["Igualdad y Dignidad", "Justicia", "Empatía"]
        },
        "Enfoque Ambiental": {
             "valores": ["Solidaridad planetaria y equidad intergeneracional", "Justicia y solidaridad", "Respeto a toda forma de vida"]
        },
        "Enfoque de Derechos": {
             "valores": ["Conciencia de derechos", "Libertad y responsabilidad", "Diálogo y concertación"]
        },
        "Enfoque de Búsqueda de la Excelencia": {
             "valores": ["Flexibilidad y apertura", "Superación personal"]
        },
        "Enfoque de Orientación al bien común": {
             "valores": ["Equidad y justicia", "Solidaridad", "Empatía", "Responsabilidad"]
        }
    }
};
