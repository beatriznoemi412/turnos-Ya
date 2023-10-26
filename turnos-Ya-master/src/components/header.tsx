import Nav from "./nav";
import HeaderContent from "./headerContent";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {useState} from 'react';


const Header: React.FC = () => {
  const [isComerciante, setIsComerciante] = useState<boolean>(false);
  
  const whatsappNumber = '2494697347';

  const openWhatsApp = () => {
    const message = 'Hola, tengo una pregunta sobre TurnoListo';
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const location = useLocation();
  const isHome = location.pathname === "/"
  
  return (
    <>
      <Nav />
      <Flex direction="column" align="center" flexWrap='wrap'>
      {isHome && <HeaderContent {... {isComerciante, setIsComerciante, openWhatsApp}} />}
      </Flex>
    </>
  );
};

export default Header;