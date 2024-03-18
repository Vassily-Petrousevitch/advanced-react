import "./App.css";
import { Main } from "./components/Main";
import { Providers } from "./contexts/ToastContext"; 

function App() {
  return <Providers><Main /></Providers>;
}

export default App;
