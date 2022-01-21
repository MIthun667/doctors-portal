import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';



export default function Calender({date, setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newValue) => {
            setDate(newValue);
            }}
            renderInput={(params) => <TextField{...params} />}
  />
</LocalizationProvider>
  );
}
