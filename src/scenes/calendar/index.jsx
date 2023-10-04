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