export type EventStatus =
  | "Hablado"
  | "Por confirmar"
  | "Planificando"
  | "Confirmado";

export type CulturalEvent = {
  id: number;
  day: number;
  month: string;
  date: string;
  title: string;
  time: string;
  status: EventStatus;
  category: string;
  place: string;
  responsible?: string;
  description?: string;
  discussed?: string[];
  pending?: string[];
};