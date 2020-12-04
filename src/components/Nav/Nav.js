import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Brightness4, Brightness7, Person, Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, MenuItem, Select, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './hooks';
import toggleTheme from '../../actions/themeAction';
import setCurrentPage from '../../actions/currentPageAction';

const Nav = () => {
  const classes = useStyles();

  const listButton = [
    { name: 'Movies', id: 4212, path: '/' },
    { name: 'Genres', id: 4213, path: '/genres' },
    { name: 'Persons', id: 4214, path: '/persons' },
  ];

  // Get Data
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.theme);
  const { currentPage } = useSelector((state) => state.currentPage);

  // Events
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
          {window.screen.width >= 960 ? (
            <Box className={classes.navList}>
              {listButton.map(({ name, id, path }) => (
                <Link to={path}>
                  <Button
                    className={classes.navButton}
                    key={id}
                    onClick={handleChangePage}
                    color="secondary"
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </Box>
          ) : (
            <Box className={classes.navList}>
              <FormControl className={classes.formControl} color="secondary">
                <Select
                  value={currentPage}
                  onChange={handleChangePage}
                  className={classes.formControlSelect}
                >
                  {listButton.map(({ name, id, path }) => (
                    <MenuItem key={id} value={name} component={Link} to={path}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
