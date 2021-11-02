import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import { Grid } from '@material-ui/core';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
        <Grid item xs={12} md={6} sm={6} ><AddMovie/></Grid>
        <Grid item xs={12} md={6} sm={6}><SearchMovie/></Grid>
        </Grid>
      </header>
    </div>
  )
}

export default App
