import React from 'react'
import Calendar from 'react-calendar';
import styled from 'styled-components';
const CalenderAttendance = () => {
  return (
    <CalendarContainer>
    <Calendar calendarType='US' />
  </CalendarContainer>
  )
}

export default CalenderAttendance;
const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100%;
  margin: auto;
 /* margin-top: 20px;
  background-color: #d4f7d4;*/
  padding: 10px;
  border-radius: 3px;
  height:98%;
  .react-calendar {
    width: 740px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    height:100%
  }
  .react-calendar--doubleView {
    width: 700px;
    height:100%
  }
  
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  .react-calendar__navigation {
    display: flex;
    height: 50px;
    margin-bottom: 1em;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
    height:56px;
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    height:56px;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 8px;
    background-color: #707070;
    border: 0;
    border-radius: 20px;
    color: white;
    padding: 5px 3px;

    &:hover {
      background-color: #5C5C5C
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;