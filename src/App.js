import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import useTokenData from './components/useTokenData';

function App() {
  const { token, setToken } = useTokenData();
  
    if(!token){
      return <LoginScreen setToken={setToken} />
    }

      return <MainScreen />
}

export default App;
