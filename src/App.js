import './App.css';
import AddMovie from './components/AddMovie';
import DeleteMovie from './components/DeleteMovie';
import EditMovie from './components/EditMovie';
import ListMovies from './components/ListMovies';
import RealtimeMovies from './components/RealtimeMovies';

function App() {
  return (
    <div className='App'>
      <header>
        <h3>Realtime Movie Tutorial</h3>
      </header>
      <main>
        <RealtimeMovies/>
        <ListMovies/>
        <AddMovie/>
        <EditMovie/>
        <DeleteMovie/>
      </main>
    </div>
  );
}

export default App;
