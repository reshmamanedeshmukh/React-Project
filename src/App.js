import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import View from './pages/View';
import Search  from './pages/Search';
import './App.css';
import SearchList from './pages/SearchList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Dashboard" element={ <Dashboard/> } />
        <Route path="/View" element={ <View/> } />
        <Route path="/Search" element={ <Search/> } />
        <Route path="/SearchList" element={ <SearchList /> } />
    
      </Routes>
    </div>
  );
}

export default App;
