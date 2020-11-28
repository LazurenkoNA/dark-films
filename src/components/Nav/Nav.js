import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Brightness4, Brightness7, Person, Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, MenuItem, Select } from '@material-ui/core';
import useStyles from './hooks';
import toggleTheme from '../../actions/themeAction';

// Initialization branch
const Nav = () => {
  // Styles
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const [age, setAge] = React.useState('Movies');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="secondary" noWrap>
            DARK FILMS
          </Typography>

          {/* Categories List */}
          {window.screen.width >= 960 ? (
            <Box className={classes.navList}>
              <Button className={classes.navButton} color="secondary">
                Movies
              </Button>
              <Button className={classes.navButton} color="secondary">
                Cartoons
              </Button>
              <Button className={classes.navButton} color="secondary">
                Anime
              </Button>
              <Button className={classes.navButton} color="secondary">
                Serials
              </Button>
            </Box>
          ) : (
            <Box className={classes.navList}>
              <FormControl className={classes.formControl} color="secondary">
                <Select value={age} onChange={handleChange} className={classes.formControlSelect}>
                  <MenuItem value="Movies" selected>
                    Movies
                  </MenuItem>
                  <MenuItem value="Cartoons">Cartoons</MenuItem>
                  <MenuItem value="Anime">Anime</MenuItem>
                  <MenuItem value="Serials">Serials</MenuItem>
                </Select>
              </FormControl>{' '}
            </Box>
          )}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search color="secondary" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box className={classes.navIcons}>
            <IconButton className={classes.navButton} onClick={handleThemeChange} color="secondary">
              {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Log in button, breakpoint */}
            {window.screen.width >= 960 ? (
              <Button className={classes.navButton} color="secondary" variant="outlined">
                LOG IN
              </Button>
            ) : (
              <IconButton className={classes.navButton} color="secondary">
                <Person />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
