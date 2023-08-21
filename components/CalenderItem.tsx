"use client";

import React from "react";

import { Calendar, DateFormatFunction, DateRangeFormatFunction, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import ja from "date-fns/locale/ja";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, TextField } from "@mui/material";
import moment, { locales } from 'moment';
import 'moment/locale/ja';


interface AllEvents {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}

type Formats = {
  dateFormat: string;
  dayFormat: DateFormatFunction;
  monthHeaderFormat: DateFormatFunction;
  dayHeaderFormat: DateFormatFunction;
  dayRangeHeaderFormat: DateRangeFormatFunction;
};

const localizer = momentLocalizer(moment);




const formats: any = {
  dateFormat: 'D',
  dayFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, 'D(ddd)'),
  monthHeaderFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, 'YYYY年M月'),
  dayHeaderFormat: (date: Date, culture: string, localizer: any) =>
    localizer.format(date, 'M月D日(ddd)'),
  dayRangeHeaderFormat: ({start, end},culture: string, localizer: any) =>
    `${localizer.format(start, 'YYYY年M月')} - ${localizer.format(end, 'YYYY年M月')}`,
}

const events = [
  {
    title: "MTG",
    allDay: true,
    start: new Date(2023, 7, 18),
    end: new Date(2023, 7, 19),
  },
];

const CalenderItem = () => {
  const [date, setDate] = useState("");
  const [shiftDate, setShiftDate] = useState("");
  const [ allEvents, setAllEvents ] = useState(events)

  console.log(date);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
  };

 

  return (
    <div className="App">
      <form>
        <TextField type="date" value={date} onChange={onChangeDate} />
        <Button variant="outlined"  >提出</Button>
      </form>
  
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes
        views={['month','week', 'day']}
        formats={formats}
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default CalenderItem;
