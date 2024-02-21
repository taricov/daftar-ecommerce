/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormControl, InputLabel, MenuItem, PaletteMode, Select, SelectChangeEvent } from '@mui/material';
import { ColorModeContext } from '../../../App';
import { useContext } from 'react';

const DarkModeToggle = () => {

  const darkContext = useContext(ColorModeContext)

  const handleChange = (event: SelectChangeEvent) => {
    darkContext?.setMode(event.target.value as PaletteMode);
  };
  return (
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="color-mode-select-label">Color Mode</InputLabel>
        <Select
          labelId="color-mode-select-label"
          id="color-mode-select"
          value={darkContext?.mode}
          label="Color Mode"
          onChange={handleChange}
        >
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"dark"}>Dark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DarkModeToggle;
