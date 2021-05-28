/* eslint-disable linebreak-style */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import { Icon_Flag_GR, Icon_Flag_US } from 'material-ui-country-flags';
import { MenuItem, RadioGroup, Select } from '@material-ui/core';
import Album from '../components/album';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function employeeDashboard() {
  const [filter, setFilter] = useState(false);
  const [fiterSearch, setFilterSearch] = useState();
  const handleFilterSearchChange = (event) => {
    setFilterSearch(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Ελληνικά</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Αναζήτηση
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} />

        <Grid item xs={3} />
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="With normal TextField"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} />

        <Grid item xs={8} />
        <Grid item xs={2}>
          <Button
            onClick={() => {
              if (filter) {
                setFilter(false);
              } else {
                setFilter(true);
              }
            }}
          >
            Φιλτρα
          </Button>
        </Grid>
        <Grid item xs={2} />

        {filter ? (
          <>
            {' '}
            <Grid item xs={3} spacing={0} />
            <Grid item xs={1} spacing={0}>
              <Typography variant="subtitle2">Η αναζήτηση να εφαρμοστεί σε:</Typography>
            </Grid>
            <Grid
              item
              xs={8}
              align="left"
              alignItems="left"
              alignContent="left"
              spacing={0}
              justify="flex-start"
            >
              <RadioGroup
                row
                aria-label="position"
                name="position"
                onChange={handleFilterSearchChange}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio color="primary" />}
                  label="Όλα"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="eponimia"
                  control={<Radio color="primary" />}
                  label="Επωνυμία/Επώνυμο"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="diakritos"
                  control={<Radio color="primary" />}
                  label="Διακριτικός Τίτλος"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={3} spacing={0} />
            <Grid item xs={1} spacing={0}>
              <Typography variant="subtitle2">Έδρα:</Typography>
            </Grid>
            <Grid item xs={8} justify="space-evenly" alignItems="center">
              <Select style={{ width: '10%' }}>
                <MenuItem>One</MenuItem>
              </Select>
              <Select style={{ width: '10%' }}>
                <MenuItem>One</MenuItem>
              </Select>
              <Select style={{ width: '10%' }}>
                <MenuItem>One</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3} spacing={0} />
            <Grid item xs={1} spacing={0}>
              <Typography variant="subtitle2">Επιχείρηση:</Typography>
            </Grid>
            <Grid container item xs={8} spacing={5}>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select>
                  <MenuItem>One</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={3} spacing={0} />
            <Grid item xs={1} spacing={0}>
              <Typography variant="subtitle2">Επιχείρηση:</Typography>
            </Grid>
            <Grid container item xs={8} spacing={10}>
              <Select>
                <MenuItem>One</MenuItem>
              </Select>
              <a href="www.google.com">Link</a>
              <Select>
                <MenuItem>One</MenuItem>
              </Select>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
}
