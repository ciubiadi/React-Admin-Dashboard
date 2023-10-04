import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from '../../components/Header'
import { Box } from '@mui/material'

const Calendar = () => {

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    console.log('selected');
    console.log(selected);
    const eventTitle = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;

    if (eventTitle) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${eventTitle}`,
        title: eventTitle,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <FullCalendar
        height="75vh"
        plugins={[ 
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin 
        ]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, timeGridDay, listMonth',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMiror={true}
        dayMaxEvents={true}
        select={handleDateClick}
        eventsSet={(events => {
          console.log('Events set: ', events);
        })}
        initialEvents={[
          {
            id:'1',
            title:'Some Event',
            date:'2023-10-14'
          }
        ]}
      />
    </Box>
  )
  
}
export default Calendar;