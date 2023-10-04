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

    // if user entered a Title for the new event add it in the calendar events
    if (eventTitle) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${eventTitle}`,
        title: eventTitle,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }

    calendarApi.unselect();
  };

  const handleEventRemovalClick = (selected) => {
    console.log('selected event remove');
    console.log(selected);
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
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
        eventClick={handleEventRemovalClick}
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