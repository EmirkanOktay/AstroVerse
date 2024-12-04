import './App.css';
import Loading from './Components/Loading';
import { useSelector } from 'react-redux';

function App() {

  const loading = useSelector((state: any) => state.loading.value);

  return (
    <div>
      {loading && <Loading />}

    </div>
  );
}

export default App;
