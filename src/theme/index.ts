import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eacf00',
    },
    secondary: {
      main: '#6b2483',
    },
  },
  components: {
    MuiAutocomplete: {
      defaultProps: {
        ListboxProps: { style: { backgroundColor: '#656565' } },
      },
    },
  },
})

export default theme
