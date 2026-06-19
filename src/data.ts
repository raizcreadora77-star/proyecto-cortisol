import { BenefitItem, TestimonialItem, StepItem, TimelineDay, BonusItem, FaqItem } from "./types";

export const benefits: BenefitItem[] = [
  { id: "b1", text: "Dormir toda la noche sin despertar a las 3 AM" },
  { id: "b2", text: "Reducir ansiedad y pensamientos acelerados" },
  { id: "b3", text: "Recuperar energía estable durante el día" },
  { id: "b4", text: "Disminuir inflamación y barriga hormonal" },
  { id: "b5", text: "Volver a sentir control sobre tu cuerpo" }
];

export const quickTestimonials: TestimonialItem[] = [
  {
    id: "qt1",
    name: "Mariana R.",
    age: 34,
    stars: 5,
    shortQuote: "Volví a dormir 7 horas seguidas después de meses.",
    outcome: "Sueño Continuo"
  },
  {
    id: "qt2",
    name: "Carlos T.",
    age: 41,
    stars: 5,
    shortQuote: "Mi ansiedad bajó muchísimo en la primera semana.",
    outcome: "Reducción de Ansiedad"
  },
  {
    id: "qt3",
    name: "Sofía M.",
    age: 29,
    stars: 5,
    shortQuote: "Lo que más noté fue la energía. Dejé de vivir a punta de café.",
    outcome: "Energía Sostenida"
  }
];

export const painPoints = [
  { text: "Te levantas cansado", icon: "SunriseText" },
  { text: "Llegas cansado a la noche y cansado al mediodía", icon: "ClockText" },
  { text: "Te acuestas sumamente cansado pero no puedes apagar tu mente", icon: "BrainText" },
  { text: "No puedes lograr un sueño profundo reparador", icon: "MoonText" },
  { text: "Te despiertas misteriosamente a las 3:17 AM sobrepensando", icon: "AlertText" },
  { text: "La barriga sigue creciendo a pesar de comer limpio", icon: "TrendingUpText" },
  { text: "La sensación de ansiedad latente nunca desaparece por completo", icon: "ShieldAlertText" }
];

export const revelationPoints = [
  { label: "Tu cuerpo almacena grasa", desc: "El exceso de cortisol le avisa a tu cuerpo que está bajo peligro extremo, obligándolo a conservar grasa visceral alrededor del abdomen.", isBullet: true },
  { label: "Tu sueño se rompe", desc: "Interrumpe la producción natural de melatonina, haciéndote despertar en un estado de vigilia súbita de madrugada.", isBullet: true },
  { label: "Tu energía desaparece", desc: "Sufres caídas drásticas de glucosa y subidas falsas, sintiéndote exhausto a las 3 PM y demasiado despierto al acostarte.", isBullet: true },
  { label: "Tu ansiedad aumenta", desc: "Tu sistema nervioso simpático queda 'atascado' en modo lucha o huida, interpretando tareas simples como emergencias.", isBullet: true },
  { label: "Tu recuperación hormonal se bloquea", desc: "El cuerpo prioriza sobrevivir antes que sanar, deteniendo la regeneración celular y acelerando el envejecimiento.", isBullet: true }
];

export const productUnlocks = [
  {
    title: "Reinicio de Cortisol en 14 Días",
    benefit: "Menos ansiedad, menos inflamación, más energía.",
    desc: "Un plan de choque paso a paso diseñado para interrumpir la alarma química de tu cerebro y drenar el exceso de cortisol acumulado."
  },
  {
    title: "Método Anti-Despertar 3:00 AM",
    benefit: "Dormir profundo sin pelear contra tus tus pensamientos.",
    desc: "Aprende a restablecer la curva circadiana natural para que tu cerebro entienda que estás a salvo y no sabotee tu sueño."
  },
  {
    title: "Barriga Plana Hormonal",
    benefit: "Reduce las señales que favorecen la acumulación de grasa abdominal.",
    desc: "Descubre cómo desactivar el receptor de almacenamiento de grasa visceral de manera natural apagando los estresores digestivos."
  },
  {
    title: "Energía Estable Todo el Día",
    benefit: "Sin depender de café, dulces, carbohidratos simples ni bebidas energéticas.",
    desc: "Nutrición y hábitos cronobiológicos sencillos de implementar para restaurar tus picos energéticos saludables de manera fluida."
  },
  {
    title: "Sistema Antiestrés Invisible",
    benefit: "Control diario del estrés en pocos minutos con microhábitos imperceptibles.",
    desc: "Tácticas de regulación del sistema nervioso autónomo que puedes realizar en tu escritorio o en la fila de espera sin llamar la atención."
  }
];

export const methodSteps: StepItem[] = [
  {
    number: 1,
    title: "Apagar la Alarma Interna",
    description: "Identificas y desactivas los detonantes biológicos y ambientales invisibles que mantienen tu cortisol persistentemente elevado en tu rutina actual.",
    result: "Empiezas a sentir de inmediato más calma, enfoque y menos tensión física acumulada en hombros y mandíbula."
  },
  {
    number: 2,
    title: "Reprogramar Sueño y Recuperación",
    description: "Aplicas micro-protocolos cronobiológicos de descanso profundo que favorecen el cambio químico hacia la regeneración física y mental.",
    result: "Menos despertares nocturnos sobresaltados, un sueño continuo reparador y mucha más facilidad para conciliar el descanso."
  },
  {
    number: 3,
    title: "Mantener el Cortisol Bajo",
    description: "Instalas hábitos específicos, sencillos y disfrutables de mantenimiento continuo que blindan tu cuerpo ante futuros picos de estrés.",
    result: "Energía limpia y constante de la mañana a la noche, reducción drástica de la ansiedad y el control total de tus decisiones diarias."
  }
];

export const intermediateTestimonials: TestimonialItem[] = [
  {
    id: "it1",
    name: "Alejandro V.",
    age: 45,
    stars: 5,
    shortQuote: "Pensé que sería tedioso con dietas y horas de meditación, pero el Paso 1 de 5 minutos es sumamente práctico.",
    outcome: "Práctico y Sencillo",
    fullQuote: "Odiaba la idea de pasar horas meditando. El protocolo va directo al grano con microhábitos de 5 minutos que encajan perfecto en mi rol directivo. Funciona sin interrumpir mi vida diaria."
  },
  {
    id: "it2",
    name: "Verónica L.",
    age: 38,
    stars: 5,
    shortQuote: "Con 3 hijos es difícil tener tiempo. Logré aplicar las pautas y mi inflamación del abdomen bajó increíblemente.",
    outcome: "Resultados Reales",
    fullQuote: "Tenía miedo de que fuera imposible para alguien con tres niños. Pero los pasos me enseñaron a regular el cortisol biológico mientras cocino o ando en coche. Mi barriga inflamada se fue por fin."
  }
];

export const practicalTimeline: TimelineDay[] = [
  {
    day: "Día 1",
    title: "Apagado de Alerta",
    description: "Aplicas el protocolo rápido de regulación matutino y nocturno. Empiezas a enviar la señal de seguridad a tu sistema nervioso."
  },
  {
    day: "Día 3",
    title: "Calma Mental",
    description: "La rumiación mental y el volumen de pensamientos acelerados disminuyen. Notas el pecho más relajado durante situaciones estresantes."
  },
  {
    day: "Día 7",
    title: "Despertar Renovado",
    description: "Te levantas antes de la alarma con una sensación de ligereza. El cansancio no te pesa de la misma manera que antes y dejas el primer café de la mañana."
  },
  {
    day: "Día 14",
    title: "Modo Recuperación Total",
    description: "Experimentas un sueño continuo y profundo de 7-8 horas. Tu abdomen está notablemente menos inflamado y recuperas el control y la paz total de tu bienestar."
  }
];

export const finalBenefits: BenefitItem[] = [
  { id: "fb1", text: "Dormir profundamente y de un solo tirón" },
  { id: "fb2", text: "Reducir drásticamente los molestos despertares a las 3:00 AM" },
  { id: "fb3", text: "Menos ansiedad y agobio constante en tu jornada diaria" },
  { id: "fb4", text: "Más claridad mental enfocada, sin neblina cognitiva" },
  { id: "fb5", text: "Más energía constante y limpia sin caídas drásticas" },
  { id: "fb6", text: "Menos hinchazón abdominal e inflamación visceral" },
  { id: "fb7", text: "Mejor control de tu equilibrio emocional interno" },
  { id: "fb8", text: "Sentirte dueño, sano y en paz con tu cuerpo otra vez" }
];

export const largeTestimonials: TestimonialItem[] = [
  {
    id: "lt1",
    name: "Dra. Natalia Ruiz",
    age: 42,
    stars: 5,
    shortQuote: "Como médica sé lo letal que es el estrés, pero no tenía tiempo. Cortisol Bajo me dio la estructura científica directa.",
    location: "Madrid, ES",
    outcome: "Perdió 5.2 cm de cintura y reguló su sueño",
    fullQuote: "El cuerpo humano es una máquina perfecta regulada por hormonas. Cuando el cortisol se adueña del timón, el metabolismo se detiene. Este protocolo no solo es fisiológicamente correcto, sino que su sencillez de aplicación derrotó mi falta de tiempo crónica. Bajé mi inflamación visceral y mi báscula también lo agradeció.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "lt2",
    name: "Esteban Mendoza",
    age: 36,
    stars: 5,
    shortQuote: "Llevaba 2 años despertando a las 3:15 AM con taquicardia. Ahora duermo profundamente hasta las 7 AM.",
    location: "Bogotá, CO",
    outcome: "Eliminó el insomnio crónico y la neblina mental",
    fullQuote: "Me levantaba empapado en sudor frío a la mitad de la noche pensando en mis deudas o el trabajo de la mañana. Me dijeron que era normal por la edad o el estrés de mi empresa. Con el protocolo reprogramé mi curva biológica; ahora colapso de forma natural al dormir de un tirón y mi claridad mental actual es tremenda.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "lt3",
    name: "Clara Galdámez",
    age: 51,
    stars: 5,
    shortQuote: "Pensaba que el cansancio era la menopausia. Entender el cortisol me salvó de tener sofocos y desánimo.",
    location: "Santiago, CL",
    outcome: "Recuperó su vitalidad activa y desinflamó su intestino",
    fullQuote: "Hice de todo: suplementos caros, tés, etc. Nada funcionó. Al aprender a desactivar la rumiación y la tensión física, mi inflamación abdominal desapareció y mi energía volvió a ser la de mis 30 años. Es un antes y un después para mi calidad de vida familiar.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const preOfferTestimonials: TestimonialItem[] = [
  {
    id: "pot1",
    name: "Gabriela S.",
    age: 31,
    stars: 5,
    shortQuote: "Estuve a punto de gastar $300 en hormonas sintéticas, pero este protocolo de bajo costo reguló mi sistema de forma 100% natural.",
    outcome: "Ahorro enorme de dinero y salud intacta"
  },
  {
    id: "pot2",
    name: "Mauricio D.",
    age: 49,
    stars: 5,
    shortQuote: "A mi edad las noches sin dormir eran normales. Hoy duermo mejor que cuando tenía 20. El método SOS calma la ansiedad.",
    outcome: "Paz absoluta y sueño renovado"
  }
];

export const vipBonuses: BonusItem[] = [
  {
    id: "b_sos",
    title: "🎁 Bono #1 — Protocolo SOS: Apaga la Ansiedad en 5 Minutos",
    value: 47,
    description: "Una guía de emergencia rápida y portable para cortar en seco los picos repentinos de pánico, aceleración mental o agobio. Ejercicios neuronales simples de activación del nervio vago."
  },
  {
    id: "b_menu",
    title: "🎁 Bono #2 — Menú Anticortisol Listo Para Copiar",
    value: 67,
    description: "Plan de comidas deliciosas y fáciles de preparar con alimentos que inhiben las oleadas inflamatorias del cortisol en la sangre y estabilizan la insulina para evitar la acumulación de grasa abdominal."
  },
  {
    id: "b_ritual",
    title: "🎁 Bono #3 — Ritual Sueño Profundo",
    value: 97,
    description: "La secuencia exacta paso a paso de 10 minutos antes de acostarte para forzar mecánicamente a tu cerebro a entrar en modo reparación profunda sin la necesidad de tomar melatonina ni pastillas dañinas."
  }
];

export const faqs: FaqItem[] = [
  {
    id: "faq1",
    question: "¿Necesito experiencia previa o conocimientos avanzados?",
    answer: "No, para nada. El protocolo fue diseñado para personas corrientes de cualquier edad que se sienten atrapadas por el estrés crónico. Cada paso contiene explicaciones simples con un lenguaje totalmente amigable y directo al grano, sin términos científicos complicados."
  },
  {
    id: "faq2",
    question: "¿Cuándo empezaré a ver y sentir los primeros resultados?",
    answer: "Muchos de nuestros alumnos reportan un alivio significativo en su nivel de ansiedad y se sienten más presentes desde el primer día que aplican el 'Apagado de Alarma'. El protocolo está optimizado para darte un sueño notablemente mejor a las 72 horas y un gran alivio de tu abdomen inflamado en 14 días completos de disciplina constante."
  },
  {
    id: "faq3",
    question: "¿Cuánto tiempo de mi ocupado día debo dedicarle al protocolo?",
    answer: "Solo requiere de 10 a 15 minutos en total por día. No es necesario realizar retiros espirituales ni sentarse a meditar en silencio infinitas horas. El método se infiltra suavemente en tus tareas existentes: al levantarte, sentarte ante el ordenador o justo al acostarte."
  },
  {
    id: "faq4",
    question: "¿Necesito gastar dinero extra en suplementos caros o pastillas?",
    answer: "No. El pilar fundamental de 'Cortisol Bajo' es natural, científico y de ajuste de hábitos cronobiológicos y neuronales. Te enseñamos a usar tu propio ritmo circadiano y alimentación ordinaria para desinflamarte y dormir bien, sin depender de productos extras que solo inflan el presupuesto de las farmacéuticas."
  },
  {
    id: "faq5",
    question: "¿Funciona el programa incluso si llevo muchos años lidiando con insomnio y estrés crónico?",
    answer: "Sí. Tu cuerpo nunca olvida cómo sanarse, solo se encuentra en un bucle químico cerrado del cual no ha podido salir porque no ha recibido las señales neurológicas correctas. Al interrumpir el ciclo biológico del estrés, regulamos la balanza adrenal, sin importar el tiempo acumulado de fatiga."
  },
  {
    id: "faq6",
    question: "¿Tiene algún tipo de garantía el programa?",
    answer: "Totalmente. Ofrecemos una Garantía Blindada de devolución sin complicaciones de 7 días. Si no logras descansar profundamente, reducir tus despertares o te desinflamas y sientes que esto no cumple plenamente tus expectativas, nos escribes un correo y te enviamos el 100% de tu dinero de vuelta, sin pretextos."
  }
];
