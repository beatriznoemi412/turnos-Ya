
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header"; 
import Register from "./components/register"; 
import Login from "./components/login";
import Merchant from "./components/merchant";
import CreateCompany from "./components/createCompany";
import { CompanyData } from './types/types';
import BookingPage from './components/bookingPage'

const App: React.FC = () => {
    const handleSubmit = (companyData: CompanyData) => {
      // Lógica para manejar el envío de datos al backend
      console.log('Datos de la empresa:', companyData);
    };

  return (
     <ChakraProvider>
      <Router>
        <Routes>
       
          <Route path="/" element={<Header/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/createCompany" element={<CreateCompany onSubmit={handleSubmit}/>}/>
          <Route path="/bookingPage" element={<BookingPage />} />
         
        </Routes>
        </Router>
        </ChakraProvider>
    
  );
}
export default App;
