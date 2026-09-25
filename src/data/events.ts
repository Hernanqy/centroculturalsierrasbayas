import { CulturalEvent } from "@/types/event";

export const events: CulturalEvent[] = [
  {
    id: 1,
    day: 3,
    month: "OCT",
    date: "3 de octubre de 2026",
    title: "Seminario intensivo de Clown",
    time: "10:00 a 13:00",
    status: "Confirmado",
    category: "Taller / Formación",
    place: "Centro Cultural Sierras Bayas",
    responsible: "Pame - Mauri",
    description:
      "Seminario intensivo de clown abierto a la comunidad.",
    discussed: [
      "Actividad incorporada a la programación de octubre.",
      "Cobertura prevista con Pame y Mauri."
    ],
    pending: [
      "Revisar necesidades técnicas",
      "Confirmar comunicación"
    ]
  },
  {
    id: 2,
    day: 11,
    month: "OCT",
    date: "11 de octubre de 2026",
    title: "Cine en el Centro",
    time: "20:00",
    status: "Por confirmar",
    category: "Cine",
    place: "Centro Cultural Sierras Bayas",
    description:
      "Proyección de cine abierta a la comunidad.",
    discussed: [
      "Se acordó realizar una función de cine.",
      "Horario previsto: 20:00."
    ],
    pending: [
      "Definir película",
      "Preparar comunicación",
      "Confirmar requerimientos técnicos"
    ]
  },
  {
    id: 3,
    day: 12,
    month: "OCT",
    date: "12 de octubre de 2026",
    title: "Cortos para infancias",
    time: "Horario a confirmar",
    status: "Planificando",
    category: "Infancias / Cine",
    place: "Centro Cultural Sierras Bayas",
    description:
      "Propuesta de cortometrajes especialmente pensada para infancias.",
    discussed: [
      "La actividad forma parte de la programación del Centro."
    ],
    pending: [
      "Confirmar horario",
      "Seleccionar cortometrajes",
      "Definir público destinatario"
    ]
  },
  {
    id: 4,
    day: 17,
    month: "OCT",
    date: "17 de octubre de 2026",
    title: "Show de bandas",
    time: "19:00",
    status: "Hablado",
    category: "Música",
    place: "Centro Cultural Sierras Bayas",
    description:
      "Encuentro musical con bandas de Sierras Bayas.",
    discussed: [
      "La actividad está prevista para las 19:00.",
      "Se propone trabajar con bandas vinculadas a Sierras Bayas."
    ],
    pending: [
      "Definir bandas",
      "Confirmar sonido",
      "Definir necesidades técnicas",
      "Preparar difusión"
    ]
  },
  {
    id: 5,
    day: 24,
    month: "OCT",
    date: "24 de octubre de 2026",
    title: "Fiesta de Gala · 110° aniversario",
    time: "Horario a confirmar",
    status: "Confirmado",
    category: "Celebración",
    place: "Centro Cultural Sierras Bayas",
    responsible: "Pamela",
    description:
      "Fiesta de Gala en el marco del 110° aniversario del Centro Cultural de Sierras Bayas.",
    discussed: [
      "Actividad confirmada.",
      "Pamela figura como referente."
    ],
    pending: [
      "Definir horario",
      "Definir montaje",
      "Revisar sonido",
      "Organizar comunicación"
    ]
  }
];