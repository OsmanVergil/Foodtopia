import Header from '../widgets/Header/ui/Header';
import './styles/app.css';
import { AppRouter } from './router';

function App() {
  console.log('APP');

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
