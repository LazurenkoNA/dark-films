import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Brightness4, Brightness7, Person, Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, MenuItem, Select, Tooltip } from '@material-ui/core';
import useStyles from './hooks';
import toggleTheme from '../../actions/themeAction';
import setCurrentPage from '../../actions/currentPageAction';

const Nav = () => {
  // Styles
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.theme);
  const { currentPage } = useSelector((state) => state.currentPage);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const handleChangePage = (event) => {
    const { value, textContent } = event.target;

    if (value === currentPage || textContent === currentPage) return;
    if (value) {
      dispatch(setCurrentPage(value));
    } else {
      dispatch(setCurrentPage(textContent));
    }
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
              {/* Refactoring through .map */}
              <Button className={classes.navButton} onClick={handleChangePage} color="secondary">
                movies
              </Button>
              <Button className={classes.navButton} onClick={handleChangePage} color="secondary">
                cartoons
              </Button>
              <Button className={classes.navButton} onClick={handleChangePage} color="secondary">
                anime
              </Button>
              <Button className={classes.navButton} onClick={handleChangePage} color="secondary">
                serials
              </Button>
            </Box>
          ) : (
            <Box className={classes.navList}>
              <FormControl className={classes.formControl} color="secondary">
                <Select
                  value={currentPage}
                  onChange={handleChangePage}
                  className={classes.formControlSelect}
                >
                  {/* Refactoring through .map */}
                  <MenuItem value="movies">Movies</MenuItem>
                  <MenuItem value="cartoons">Cartoons</MenuItem>
                  <MenuItem value="anime">Anime</MenuItem>
                  <MenuItem value="serials">Serials</MenuItem>
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
            <Tooltip title="Toggle light/dark theme">
              <IconButton
                className={classes.navButton}
                onClick={handleChangeTheme}
                color="secondary"
              >
                {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
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
