import { createTheme } from '@mui/material/styles';
import { ThemeColors } from '../Classes/Enums/theme.enums';

const glovoTheme = createTheme ({
  palette: {
    primary: {
      main: ThemeColors.primaryMain,
      light: ThemeColors.primaryLight
    },
    secondary: {
      main: ThemeColors.secondaryMain,
      light: ThemeColors.secondaryLight
    }
  },
  shape: {
    borderRadius: 10
  }
})

export default glovoTheme