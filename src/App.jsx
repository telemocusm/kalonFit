import "./App.css";
import { Route , Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from "./pages/Home";
import ExcerciseDetails from "./pages/ExcerciseDetails";
function App() {
  return <>
    <Box width="400px">
      Navbar
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/excercise/:id" element={<ExcerciseDetails/>} />
      </Routes>
    </Box>
  
  </>;
}

export default App;
