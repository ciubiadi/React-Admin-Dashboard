import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Header from '../../components/Header'
import { Box } from '@mui/material'

const Calendar = () => {
  
    return (
      <Box m="20px">
        <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </Box>
    )
  
}
export default Calendar;