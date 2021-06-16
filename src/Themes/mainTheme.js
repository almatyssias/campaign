import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    light: '#62727b',
    main: '#37474f',
    dark: '#102027',
    contrastText: '#ffffff',
  },
};

const overrides = {
  MuiButton: {},
};

export default createMuiTheme({
  palette,
  overrides,
});
