import './App.css'
import Greating from "./components/Greating";
import Header from  "./components/Header";
import {Tiriye} from "./components/Counter";
import ThemeToggle from "./components/ThemeSwitcher"; 
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from './components/WelcomeMessage';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';

function App() {

  return (
    <>
      <ThemeToggle />
      <Header />
      <Notification hasNewMessages={true} />
      <Dashboard isLoggedIn={true} />
      <Greating name="Mohamed" surname="Ahmed" />
      <Clicker />
      <Greating name="Mohamed" surname="Ahmed" />
      <Notification hasNewMessage={true} />
      <Tiriye />
      <Inputer />
      <WelcomeMessage isLoggedIn={true} />
    </>
  );
}

export default App;
