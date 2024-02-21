/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import { TsupportedLocales } from '../../../@types/types';
import { localeContext } from '../../../App';
import { useContext, useEffect } from 'react';
import { useTranslation } from "react-i18next"

export default function LocaleToggle() {
  const locale = useContext(localeContext)
  const handleChange = (event: SelectChangeEvent) => {
    locale?.setLocale(event.target.value as TsupportedLocales);
  }

  const { i18n } = useTranslation()
  useEffect(()=>{
    i18n.changeLanguage(locale?.locale === "arEG" ? "ar" : "en")
  }, [locale])
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="language-select-label">Language/اللغة</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={locale?.locale}
        label="Language/اللغة"
        onChange={handleChange}
      >
        <MenuItem value={"enUS"}>English انجليزي</MenuItem>
        <MenuItem value={"arEG"}>Arabic عربي</MenuItem>
      </Select>
    </FormControl>
    </Box>
  );
}