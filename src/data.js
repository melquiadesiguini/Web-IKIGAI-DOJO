const homeImage = new URL('./assets/images/Home.png', import.meta.url).href;
const alumnadoImage = new URL('./assets/images/Alumnado.jpeg', import.meta.url).href;
const logoImage = new URL('./assets/images/Logo Ikigai Dojo.png', import.meta.url).href;
const galleryHeroImage = new URL('./assets/images/gallery/karate_dojo.png', import.meta.url).href;

export const assets = { homeImage, alumnadoImage, logoImage, galleryHeroImage };

export const navigation = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Galería', page: 'galeria' },
  { label: 'Nosotros', page: 'nosotros' },
  { label: 'Contacto', page: 'contacto' },
  { label: 'Eventos', page: 'eventos' },
  { label: 'Tienda', page: 'tienda' },
  { label: 'Trivia', page: 'trivia' },
];

export const socialLinks = [
  { label: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/ikigaidojo.ka.ko/' },
  { label: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61561605354382' },
  { label: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@ikigaidojo.ka.ko?is_from_webapp=1&sender_device=pc' },
  { label: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/@ikigaidojo-ka-ko?si=EB4X8dxEKwLlcdgb' },
];

export const galleryItems = [
  { title: 'Capacitación de arbitraje', image: new URL('./assets/images/gallery/Capacitacion de arbitraje.png', import.meta.url).href },
  { title: 'Chile', image: new URL('./assets/images/gallery/Chile.png', import.meta.url).href },
  { title: 'Examen Kyu B', image: new URL('./assets/images/gallery/Examen kyu b.png', import.meta.url).href },
  { title: 'Examen Kyu B', image: new URL('./assets/images/gallery/Examen kyu b2.png', import.meta.url).href },
  { title: 'Capacitación con Sensei Calderat', image: new URL('./assets/images/gallery/Capacitacion con Sensei Calderat.png', import.meta.url).href },
  { title: 'Maestros', image: new URL('./assets/images/gallery/Maestros.png', import.meta.url).href },
];

export const products = [
  {
    id: 'karategi-pesado-shiai',
    name: 'Karategi Pesado - Keiko Gi Pesado - Shiai',
    price: '$197.800',
    image: new URL('./assets/images/Tienda/Karategui Pesado.jpg', import.meta.url).href,
    description: 'Bienvenido al mundo del Karategi Keikogi Pesado "Shiai". Este conjunto es ideal para practicantes que buscan calidad y comodidad en su entrenamiento. Confeccionado 100% en tela de algodón, garantiza una experiencia de uso excepcional.',
  },
  {
    id: 'karategi-corte-japones-kaizen',
    name: 'Karategi Corte Japonés de 12 onzas - Kaizen',
    price: '$131.000',
    image: new URL('./assets/images/Tienda/Karategi Corte Japones.jpg', import.meta.url).href,
    description: 'Uniforme de artes marciales confeccionado con gabardina semipesada Bull de 12 Oz, resistente y suave para acompañar las exigencias de la práctica diaria.',
  },
  {
    id: 'chaqueta-negra-artes-marciales',
    name: 'Chaqueta negra para artes marciales',
    price: '$125.000',
    image: new URL('./assets/images/Tienda/Chaqueta negra para artes marciales.png', import.meta.url).href,
    description: 'Chaqueta Kobudo-Gi semipesada pensada para quienes buscan un uniforme con resistencia, comodidad y diseño tradicional.',
  },
  {
    id: 'cinturon-10-costuras-relleno',
    name: 'Cinturón de grado 10 costuras con relleno',
    price: '$18.500',
    image: new URL('./assets/images/Tienda/Cinturon 10 costuras con relleno.png', import.meta.url).href,
    description: 'Cinturón robusto y ajustable, confeccionado con 10 costuras para brindar durabilidad, soporte y comodidad en cada entrenamiento.',
  },
  {
    id: 'karategi-kumite-student-wkf',
    name: 'Karategi para Kumite Student aprobado por WKF',
    price: '$125.100',
    image: new URL('./assets/images/Tienda/Karategi para Kumite Student aprobado por WKF.webp', import.meta.url).href,
    description: 'Karategi Student de 8 Oz de SMAI, diseñado para kumite con comodidad y rendimiento. Cuenta con aprobación de la World Karate Federation.',
  },
  {
    id: 'karategi-kaminari-x-smai-wkf',
    name: 'Karategi Kaminari X - SMAI - Premium de 14 oz - WKF',
    price: '$415.000',
    image: new URL('./assets/images/Tienda/Karategi Kaminari X - SMAI - Karategi Premium de 14 oz - WKF.webp', import.meta.url).href,
    description: 'Kata Gi elegante, fabricado con mezcla superior de algodón y poliéster para ofrecer comodidad, fácil mantenimiento y chasquido nítido.',
  },
  {
    id: 'guantes-karate-smai-wkf',
    name: 'Guantes de Karate SMAI - Aprobados por WKF',
    price: '$89.280',
    image: new URL('./assets/images/Tienda/Guantes de Karate SMAI - Aprobados por WKF.webp', import.meta.url).href,
    description: 'Guantes para entrenamiento y competencia que combinan calidad, seguridad y rendimiento, con aprobación oficial WKF.',
  },
  {
    id: 'mochila-bolso-extensible-smai',
    name: 'Mochila + Bolso extensible - SMAI',
    price: '$322.900',
    image: new URL('./assets/images/Tienda/Mochila + Bolso extensible Smai.webp', import.meta.url).href,
    description: 'Solución versátil para transportar protecciones de kumite, ropa y equipo de entrenamiento con funcionalidad y estilo.',
  },
  {
    id: 'cinturon-smai-negro-wkf',
    name: 'Cinturón SMAI Negro Aprobado WKF',
    price: '$75.000',
    image: new URL('./assets/images/Tienda/Cinturon SMAI Negro Aprobado WKF.png', import.meta.url).href,
    description: 'Cinturón importado de alta calidad, pensado para practicantes que buscan durabilidad, diseño meticuloso y presencia en el tatami.',
  },
];

export const questions = {
  easy: [
    { text: "¿Qué significa la palabra 'Karate' en japonés?", category: 'Historia y Filosofía', options: ['Mano dura', 'Mano vacía', 'Arte marcial', 'Camino del guerrero'], correct: 1, explanation: "'Karate' se escribe con los kanji de vacío y mano. Representa el arte de luchar sin armas, usando el cuerpo como herramienta." },
    { text: "¿Qué significa 'Dojo' en la cultura de las artes marciales?", category: 'Cultura Marcial', options: ['Lugar de combate', 'Escuela de guerreros', 'Lugar para practicar el camino', 'Casa del maestro'], correct: 2, explanation: "Dojo significa literalmente 'lugar del camino'. Es el espacio donde se practica física y espiritualmente." },
    { text: '¿Cuál es el principio filosófico que da nombre a este dojo?', category: 'Filosofía Japonesa', options: ['Bushido', 'Ikigai', 'Wabi-sabi', 'Mono no aware'], correct: 1, explanation: "Ikigai es un concepto japonés que significa 'razón de vivir'. En el dojo representa encontrar propósito a través de las artes marciales." },
    { text: '¿Cómo se llama la reverencia de respeto que se hace al entrar al dojo?', category: 'Etiqueta Marcial', options: ['Kiai', 'Rei', 'Osu', 'Mokuso'], correct: 1, explanation: 'Rei es la reverencia de respeto: humildad, gratitud y reconocimiento hacia el lugar, el maestro y los compañeros.' },
    { text: '¿Dónde tuvo origen el Karate moderno?', category: 'Historia', options: ['China', 'Corea', 'Japón', 'Okinawa primero, luego Japón'], correct: 3, explanation: 'El Karate nació en Okinawa y luego Gichin Funakoshi lo llevó al Japón continental en 1922.' },
    { text: '¿Qué representa el cinturón negro en las artes marciales?', category: 'Sistema de Grados', options: ['Maestría absoluta y el fin del aprendizaje', 'El comienzo de un nuevo nivel de aprendizaje', 'Haber derrotado a todos los rivales', 'Llevar 10 años practicando'], correct: 1, explanation: "El cinturón negro no representa el final, sino el inicio del verdadero aprendizaje. Shodan significa 'el que comienza'." },
    { text: "¿Qué es un 'Kata' en Karate?", category: 'Técnica', options: ['Un combate libre entre dos personas', 'Una secuencia codificada de técnicas practicadas en solitario', 'El uniforme de entrenamiento', 'Un grado avanzado del cinturón'], correct: 1, explanation: 'El Kata es una secuencia de técnicas predeterminadas que se practica en solitario y transmite conocimiento de generación en generación.' },
    { text: "¿Qué significa 'Sensei' en japonés?", category: 'Cultura Marcial', options: ['Guerrero supremo', 'El que nació antes / el que fue antes', 'Maestro de artes marciales', 'Protector del dojo'], correct: 1, explanation: "Sensei significa 'el que fue antes en el camino'. Implica experiencia, guía y responsabilidad." },
    { text: '¿Cuál es el grito que se usa en Karate para focalizar energía?', category: 'Técnica', options: ['Kiai', 'Rei', 'Osu', 'Hajime'], correct: 0, explanation: 'El Kiai es la vocalización explosiva para concentrar la energía en el momento de la técnica.' },
    { text: "¿Qué significa el valor de 'Osu' que se usa en el dojo?", category: 'Cultura Marcial', options: ['Ataque', 'Perseverancia, respeto y gratitud', 'Victoria', 'Saludos formales únicamente'], correct: 1, explanation: 'Osu condensa valores fundamentales: perseverancia, respeto y gratitud. Es una declaración de actitud.' },
  ],
  hard: [
    { text: '¿Qué estilo de Karate fundó Kenwa Mabuni?', category: 'Historia Avanzada', options: ['Goju-ryu', 'Shotokan', 'Uechi-ryu', 'Shito-ryu'], correct: 3, explanation: 'Kenwa Mabuni fundó el Shito-ryu, combinando enseñanzas de Anko Itosu y Kanryo Higaonna.' },
    { text: 'En competición de Kata, ¿cuántos jueces califican la ejecución?', category: 'Competición', options: ['3 jueces', '5 jueces', '7 jueces', '4 jueces'], correct: 1, explanation: '5 jueces evalúan el Kata; se descartan extremos y se promedian los restantes según el sistema de evaluación.' },
    { text: '¿Qué es el Kobudo que se practica en Ikigai Dojo?', category: 'Especialidad del Dojo', options: ['Karate de contacto completo', 'Arte marcial con armas tradicionales de Okinawa', 'Defensa personal moderna', 'Karate para niños'], correct: 1, explanation: 'El Kobudo es el arte de armas tradicionales de Okinawa como bo, nunchaku, sai y kama.' },
    { text: '¿Cuál es la diferencia entre Kumite Jyu y Kumite Kihon?', category: 'Técnica Avanzada', options: ['Jyu es con protecciones, Kihon sin ellas', 'Jyu es combate libre, Kihon es combate preacordado', 'Jyu es para avanzados únicamente', 'No hay diferencia real'], correct: 1, explanation: 'Kihon Kumite usa técnicas preacordadas; Jyu Kumite es combate libre con libertad táctica.' },
    { text: '¿Qué kata es el primero que aprende un principiante de Shito-Ryu?', category: 'Kata', options: ['Passai Dai', 'Geki Sai Shodan', 'Shiho Tsuki Ippon', 'Piñan Shodan'], correct: 3, explanation: "Piñan Shodan es el primer kata del sistema Piñan. Piñan significa 'mente en paz'." },
    { text: '¿En qué año el Karate fue incluido por primera vez en los Juegos Olímpicos?', category: 'Competición Internacional', options: ['2016 en Río', '2020/2021 en Tokio', '2024 en París', 'Aún no fue incluido'], correct: 1, explanation: 'El Karate debutó en Tokio 2020, celebrado en 2021 por la pandemia.' },
    { text: "¿Qué significa la zona de puntaje 'Ippon'?", category: 'Reglamento', options: ['Un punto por técnica simple', 'Tres puntos por técnica al jodan o derribo seguido de técnica', 'Descalificación inmediata', 'Empate técnico'], correct: 1, explanation: 'Ippon vale tres puntos en competencia WKF para técnicas de alto valor como patadas jodan o derribos rematados.' },
    { text: '¿Cuál es el nombre del fundador del estilo Goju-Ryu?', category: 'Historia de Estilos', options: ['Hironori Otsuka', 'Chojun Miyagi', 'Masutatsu Oyama', 'Kenwa Mabuni'], correct: 1, explanation: "Chojun Miyagi fundó el Goju-ryu, 'estilo duro-suave'." },
    { text: '¿Qué es el Zanshin en el combate marcial?', category: 'Filosofía Avanzada', options: ['La postura de guardia inicial', 'Estado de alerta continua antes, durante y después del combate', 'El grito de victoria', 'La reverencia final del kata'], correct: 1, explanation: "Zanshin significa 'mente que permanece': alerta continua antes, durante y después de ejecutar una técnica." },
    { text: '¿Vale derribo en la categoría cadetes?', category: 'Reglamento', options: ['Sí', 'No', 'Sí, pero con control', 'Depende el caso'], correct: 1, explanation: 'A partir de la categoría juvenil vale realizar un derribo al oponente.' },
  ],
};

export const belts = [
  { name: 'Cinturón Blanco', color: '#d0cec9', emoji: 'Blanco', min: 0, kanji: '白' },
  { name: 'Cinturón Amarillo', color: '#f0c030', emoji: 'Amarillo', min: 20, kanji: '黄' },
  { name: 'Cinturón Naranja', color: '#e07020', emoji: 'Naranja', min: 40, kanji: '橙' },
  { name: 'Cinturón Verde', color: '#2e8b57', emoji: 'Verde', min: 60, kanji: '緑' },
  { name: 'Cinturón Azul', color: '#1a5fa8', emoji: 'Azul', min: 80, kanji: '青' },
  { name: 'Cinturón Marrón', color: '#7b4828', emoji: 'Marrón', min: 100, kanji: '茶' },
  { name: 'Cinturón Negro', color: '#cccccc', emoji: 'Negro', min: 140, kanji: '黒' },
];

export const resultMessages = [
  'El camino comienza con un solo paso. No te desanimes: cada maestro fue una vez principiante. El tatami te espera.',
  'Mostrás curiosidad por las artes marciales. Con práctica, podrías sorprenderte de hasta dónde llegás.',
  'Buen comienzo. La práctica constante transforma el conocimiento teórico en habilidad real.',
  'Muy bien. Tu conocimiento va tomando forma y estás listo para dar un paso más en el tatami.',
  'Excelente. Dominás bien los conceptos del Karate y tu nivel demuestra dedicación.',
  'Impresionante dominio. Sos de los que entienden la profundidad del Karate.',
  'Cinturón Negro de trivia. Tu conocimiento es el de un practicante serio, y el camino nunca termina.',
];

export const ctaByBelt = [
  { text: '¿Querés empezar tu camino? Tu primer entrenamiento puede ser hoy mismo.', label: 'QUIERO UNA CLASE GRATIS' },
  { text: '¿Querés empezar tu camino? Tu primer entrenamiento puede ser hoy mismo.', label: 'QUIERO UNA CLASE GRATIS' },
  { text: 'Tenés buena base teórica. ¿Listo para vivir el Karate en el tatami?', label: 'QUIERO UNA CLASE GRATIS' },
  { text: 'Tenés buena base teórica. ¿Listo para vivir el Karate en el tatami?', label: 'QUIERO UNA CLASE GRATIS' },
  { text: 'Con este nivel, el tatami te va a resultar familiar. ¿Por qué no nos visitás?', label: 'QUIERO ENTRENAR EN EL DOJO' },
  { text: 'Este nivel es el de un practicante serio. Si no entrenás aún, este es un buen momento.', label: 'QUIERO ENTRENAR EN EL DOJO' },
  { text: 'Cinturón Negro de trivia. Tu conocimiento merece el tatami.', label: 'CONTACTAR AL SENSEI' },
];
