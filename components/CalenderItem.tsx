"use client";

import React from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Button, Menu, MenuItem, Modal, TextField } from "@mui/material";
import moment from "moment";
import "moment/locale/ja";

interface AllEvents {
  title: string;
  start: Date;
  end: Date;
}

const localizer = momentLocalizer(moment);

const formats: any = {
  dateFormat: "D",
  dayFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, "D(ddd)"),
  monthHeaderFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, "YYYY年M月"),
  dayHeaderFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, "M月D日(ddd)"),
  dayRangeHeaderFormat: (
    { start, end }: { start: Date; end: Date },
    culture: string,
    localizer: any
  ) =>
    `${localizer.format(start, "YYYY年M月")} - ${localizer.format(
      end,
      "YYYY年M月"
    )}`,
};

const CalenderItem = () => {
  const [events, setEvents] = useState<AllEvents[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState<AllEvents>({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const handleSaveEvent = () => {
    const isValidEvent = newEvent.title && newEvent.start && newEvent.end;
    if (isValidEvent) {
      setEvents([...events, newEvent]);
      setShowAddForm(false);
      setNewEvent({
        title: "",
        start: new Date(),
        end: new Date(),
      });
    }
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        views={["month", "week", "day"]}
        formats={formats}
        style={{ height: 500, margin: "50px" }}
      />
      <Button onClick={() => setShowAddForm(true)}>ADD EVENT</Button>
      <Modal open={showAddForm} onClose={() => setShowAddForm(false)}>
        <div>
          <TextField
            label="タイトル"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <TextField
            label="開始日"
            type="datetime-local"
            value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: new Date(e.target.value) })
            }
          />
          <TextField
            label="終了日"
            type="datetime-local"
            value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) =>
              setNewEvent({ ...newEvent, end: new Date(e.target.value) })
            }
          />
          <Button onClick={handleSaveEvent}>提出</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CalenderItem;
