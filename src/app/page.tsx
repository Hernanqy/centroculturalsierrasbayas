"use client";

import { useMemo, useState } from "react";
import { events } from "@/data/events";
import { workshopColumns, workshopSchedule } from "@/data/workshops";
import { CulturalEvent, EventStatus } from "@/types/event";

type AgendaMode = "eventos" | "talleres";

const filters: Array<"Todos" | EventStatus> = [
  "Todos",
  "Hablado",
  "Por confirmar",
  "Planificando",
  "Confirmado"
];

const weekendGroups = [
  {
    title: "3 y 4 de octubre",
    days: [
      { label: "Sábado", day: 3, month: "OCT" },
      { label: "Domingo", day: 4, month: "OCT" }
    ]
  },
  {
    title: "10 y 11 de octubre",
    days: [
      { label: "Sábado", day: 10, month: "OCT" },
      { label: "Domingo", day: 11, month: "OCT" }
    ]
  },
  {
    title: "17 y 18 de octubre",
    days: [
      { label: "Sábado", day: 17, month: "OCT" },
      { label: "Domingo", day: 18, month: "OCT" }
    ]
  },
  {
    title: "24 y 25 de octubre",
    days: [
      { label: "Sábado", day: 24, month: "OCT" },
      { label: "Domingo", day: 25, month: "OCT" }
    ]
  },
  {
    title: "31 de octubre y 1 de noviembre",
    days: [
      { label: "Sábado", day: 31, month: "OCT" },
      { label: "Domingo", day: 1, month: "NOV" }
    ]
  },

  {
    title: "7 y 8 de noviembre",
    days: [
      { label: "Sábado", day: 7, month: "NOV" },
      { label: "Domingo", day: 8, month: "NOV" }
    ]
  },
  {
    title: "14 y 15 de noviembre",
    days: [
      { label: "Sábado", day: 14, month: "NOV" },
      { label: "Domingo", day: 15, month: "NOV" }
    ]
  },
  {
    title: "21 y 22 de noviembre",
    days: [
      { label: "Sábado", day: 21, month: "NOV" },
      { label: "Domingo", day: 22, month: "NOV" }
    ]
  },
  {
    title: "28 y 29 de noviembre",
    days: [
      { label: "Sábado", day: 28, month: "NOV" },
      { label: "Domingo", day: 29, month: "NOV" }
    ]
  }
];

function statusClass(status: EventStatus) {
  if (status === "Confirmado") return "status confirmed";
  if (status === "Planificando") return "status planning";
  if (status === "Por confirmar") return "status pending";
  return "status talked";
}

export default function Home() {
  const [mode, setMode] = useState<AgendaMode>("eventos");
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("Todos");
  const [selectedEvent, setSelectedEvent] =
    useState<CulturalEvent | null>(null);

  const filteredEvents = useMemo(() => {
    if (filter === "Todos") return events;
    return events.filter((event) => event.status === filter);
  }, [filter]);

  const confirmed = events.filter(
    (event) => event.status === "Confirmado"
  ).length;

  const planning = events.filter(
    (event) => event.status === "Planificando"
  ).length;

  const unresolved = events.filter(
    (event) =>
      event.status === "Hablado" ||
      event.status === "Por confirmar"
  ).length;

  const weekendKeys = new Set(
    weekendGroups.flatMap((group) =>
      group.days.map((day) => `${day.month}-${day.day}`)
    )
  );

  const weekEvents = filteredEvents.filter(
    (event) => !weekendKeys.has(`${event.month}-${event.day}`)
  );

  const eventsForDay = (day: number, month: string) =>
    filteredEvents.filter(
      (event) => event.day === day && event.month === month
    );

  return (
    <main className="app-shell">
      <header className="topbar">
        <h1>Centro Cultural Sierras Bayas</h1>
      </header>

      <section className="mode-switch">
        <button
          className={mode === "eventos" ? "active" : ""}
          onClick={() => setMode("eventos")}
        >
          Eventos artísticos
        </button>

        <button
          className={mode === "talleres" ? "active" : ""}
          onClick={() => setMode("talleres")}
        >
          Agenda de talleres
        </button>
      </section>

      {mode === "eventos" && (
        <>
          <section className="summary-bar">
            <div>
              <strong>{confirmed}</strong>
              <span>Confirmados</span>
            </div>

            <div>
              <strong>{planning}</strong>
              <span>Planificando</span>
            </div>

            <div>
              <strong>{unresolved}</strong>
              <span>En definición</span>
            </div>

            <div>
              <strong>{filteredEvents.length}</strong>
              <span>Visibles</span>
            </div>
          </section>

          <section className="filters">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </section>

          <section className="section-block">
            <div className="section-title">
              <h2>Fines de semana</h2>
            </div>

            <div className="weekend-grid">
              {weekendGroups.map((group) => (
                <article className="weekend-card" key={group.title}>
                  <div className="weekend-title">{group.title}</div>

                  <div className="weekend-days">
                    {group.days.map((dayItem) => {
                      const dayEvents = eventsForDay(dayItem.day, dayItem.month);

                      return (
                        <div className="day-panel" key={dayItem.label + dayItem.day}>
                          <div className="day-head">
                            <div className="day-big">{dayItem.day}</div>
                            <div className="day-labels">
                              <span>{dayItem.label}</span>
                              <strong>{dayItem.month}</strong>
                            </div>
                          </div>

                          <div className="day-events">
                            {dayEvents.length === 0 ? (
                              <div className="empty-day">
                                Sin actividad cargada
                              </div>
                            ) : (
                              dayEvents.map((event) => (
                                <button
                                  className="mini-event"
                                  key={event.id}
                                  onClick={() => setSelectedEvent(event)}
                                >
                                  <div className="mini-event-top">
                                    <h3>{event.title}</h3>
                                    <span className={statusClass(event.status)}>
                                      {event.status}
                                    </span>
                                  </div>

                                  <div className="mini-event-meta">
                                    <span>{event.time}</span>
                                    <span>{event.place}</span>
                                  </div>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {weekEvents.length > 0 && (
            <section className="section-block">
              <div className="section-title">
                <h2>Otros días</h2>
              </div>

              <div className="event-list">
                {weekEvents.map((event) => (
                  <button
                    className="event-card"
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="date-box">
                      <small>{event.month}</small>
                      <strong>{event.day}</strong>
                    </div>

                    <div className="event-main">
                      <div className="event-header">
                        <div>
                          <span className="category">{event.category}</span>
                          <h3>{event.title}</h3>
                        </div>

                        <span className={statusClass(event.status)}>
                          {event.status}
                        </span>
                      </div>

                      <div className="event-meta">
                        <span>{event.time}</span>
                        <span>{event.place}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {mode === "talleres" && (
        <section className="section-block">
          <div className="section-title">
            <h2>Talleres 2026</h2>
          </div>

          <div className="workshop-board">
            {workshopColumns.map((column) => {
              const dayRows = workshopSchedule.filter(
                (row) => row[column.key].length > 0
              );

              return (
                <article className="workshop-day-card" key={column.key}>
                  <div className="workshop-day-head">
                    <h3>{column.label}</h3>
                  </div>

                  <div className="workshop-day-body">
                    {dayRows.map((row) => (
                      <div
                        className="workshop-slot"
                        key={column.key + row.time}
                      >
                        <div className="workshop-slot-time">
                          {row.time}
                        </div>

                        <div className="workshop-slot-content">
                          {row[column.key].map((item) => (
                            <div
                              className="workshop-pill"
                              key={item + row.time}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {selectedEvent && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedEvent(null)}
        >
          <article
            className="event-detail"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedEvent(null)}
            >
              Ãƒ—
            </button>

            <span className={statusClass(selectedEvent.status)}>
              {selectedEvent.status}
            </span>

            <h2>{selectedEvent.title}</h2>

            <div className="detail-meta">
              <div>
                <span>Fecha</span>
                <strong>{selectedEvent.date}</strong>
              </div>

              <div>
                <span>Horario</span>
                <strong>{selectedEvent.time}</strong>
              </div>

              <div>
                <span>Espacio</span>
                <strong>{selectedEvent.place}</strong>
              </div>

              {selectedEvent.responsible && (
                <div>
                  <span>Responsable</span>
                  <strong>{selectedEvent.responsible}</strong>
                </div>
              )}
            </div>

            <section className="detail-section">
              <h3>Lo hablado</h3>

              {selectedEvent.discussed?.map((item) => (
                <div className="note-row" key={item}>
                  <span className="note-icon">Ã¢Å““</span>
                  <p>{item}</p>
                </div>
              ))}
            </section>

            <section className="detail-section">
              <div className="detail-heading">
                <h3>Qué falta</h3>
                <span>{selectedEvent.pending?.length || 0} pendientes</span>
              </div>

              {selectedEvent.pending?.map((item) => (
                <label className="pending-row" key={item}>
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </section>
          </article>
        </div>
      )}
    </main>
  );
}