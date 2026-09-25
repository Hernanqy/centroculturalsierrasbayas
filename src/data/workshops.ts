export const workshopColumns = [
  { key: "lunes", label: "Lunes" },
  { key: "martes", label: "Martes" },
  { key: "miercoles", label: "MiÃ©rcoles" },
  { key: "jueves", label: "Jueves" },
  { key: "viernes", label: "Viernes" }
] as const;

export type WorkshopColumnKey =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes";

export type WorkshopRow = {
  time: string;
  lunes: string[];
  martes: string[];
  miercoles: string[];
  jueves: string[];
  viernes: string[];
};

export const workshopSchedule: WorkshopRow[] = [
  {
    time: "14 a 15 hs",
    lunes: ["MÃºsica"],
    martes: ["Zumba", "Tejido"],
    miercoles: ["Yoga Kundalini"],
    jueves: ["Zumba"],
    viernes: []
  },
  {
    time: "15 a 15:30 hs",
    lunes: ["MÃºsica"],
    martes: ["Tejido"],
    miercoles: ["Yoga Kundalini", "DecoraciÃ³n"],
    jueves: [],
    viernes: []
  },
  {
    time: "15:30 a 16 hs",
    lunes: ["MÃºsica"],
    martes: ["Tejido"],
    miercoles: ["DecoraciÃ³n"],
    jueves: [],
    viernes: []
  },
  {
    time: "16 a 16:30 hs",
    lunes: [],
    martes: [],
    miercoles: ["DecoraciÃ³n"],
    jueves: [],
    viernes: []
  },
  {
    time: "16:30 a 17 hs",
    lunes: [],
    martes: [],
    miercoles: ["DecoraciÃ³n"],
    jueves: [],
    viernes: []
  },
  {
    time: "17 a 17:30 hs",
    lunes: ["Teatro Infantil"],
    martes: [],
    miercoles: ["DecoraciÃ³n"],
    jueves: [],
    viernes: []
  },
  {
    time: "17:30 a 18 hs",
    lunes: ["Teatro Infantil"],
    martes: [],
    miercoles: ["DecoraciÃ³n"],
    jueves: ["Danzas Ãrabes"],
    viernes: ["Folclore Principiantes"]
  },
  {
    time: "18 a 18:30 hs",
    lunes: ["Teatro Infantil"],
    martes: [],
    miercoles: ["PlÃ¡stica Infantil"],
    jueves: ["Danzas Ãrabes"],
    viernes: ["Folclore Principiantes"]
  },
  {
    time: "18:30 a 19 hs",
    lunes: ["Teatro Adulto IniciaciÃ³n", "Taller meta-cognitivo mayores"],
    martes: [],
    miercoles: ["PlÃ¡stica Infantil"],
    jueves: ["Coro"],
    viernes: ["Folclore Avanzados"]
  },
  {
    time: "19 a 19:30 hs",
    lunes: ["Teatro Adulto IniciaciÃ³n", "Taller meta-cognitivo mayores"],
    martes: [],
    miercoles: [],
    jueves: ["Coro"],
    viernes: ["Folclore Avanzados"]
  },
  {
    time: "19:30 a 20 hs",
    lunes: ["Teatro Adulto IniciaciÃ³n"],
    martes: [],
    miercoles: [],
    jueves: ["Coro"],
    viernes: ["Folclore Avanzados"]
  },
  {
    time: "20 a 20:30 hs",
    lunes: ["Teatro Adulto Avanzado"],
    martes: ["Teatro Adulto Independiente"],
    miercoles: [],
    jueves: [],
    viernes: ["Folclore Avanzados"]
  },
  {
    time: "20 a 22 hs",
    lunes: ["Teatro Adulto Avanzado"],
    martes: ["Teatro Adulto Independiente"],
    miercoles: [],
    jueves: [],
    viernes: []
  }
];