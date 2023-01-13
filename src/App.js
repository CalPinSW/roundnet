import Leaderboard from './components/leaderboard/leaderboard'
import Panel from "./components/presentational/panel";
import './App.css';
import CreateGameForm from "./components/create-game-form/create-game-form";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function App() {
    const players = [
        {id: 1, name: "Calum", wins: 10, losses: 5},
        {id: 2, name: "Elle", wins: 4, losses: 9},
        {id: 3, name: "Luke", wins: 2, losses: 7},
        {id: 4, name: "Poppy", wins: 12, losses: 2},
        {id: 5, name: "Dom", wins: 1, losses: 0},
    ]

  return (
    <div className="App">
      <header className="App-header">
          <img className="App-logo" src={"https://i.shgcdn.com/cc1a8fd3-f8c2-4172-b67e-828122007339/-/format/auto/-/preview/3000x3000/-/quality/lighter/"} alt="roundnet logo" />
          <h1 className="App-title">
              Roundnet App
          </h1>
      </header>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                      <Panel><Leaderboard players={players}/></Panel>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                      <Panel><CreateGameForm players={players}/></Panel>
                  </Grid>
              </Grid>
          </Box>





    </div>
  );
}

export default App;
