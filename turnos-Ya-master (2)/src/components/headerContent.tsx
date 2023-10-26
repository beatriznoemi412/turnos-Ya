import React, { useState } from 'react';
import { Box, Heading, Text,  Button, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';
import Merchant from '../components/merchant';


import { Link } from 'react-router-dom';

interface HeaderContentProps {
  openWhatsApp: () => void;
  // Otros tipos de propiedades si las tienes
}

const HeaderContent: React.FC<HeaderContentProps> = ({ openWhatsApp }) => {
  const [isComerciante, setIsComerciante] = useState<boolean>(false);
  
  const handleSoyComercianteClick = () => {
setIsComerciante(true);
  };
  
  return (
    
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      
       
      {isComerciante ? (
        <Merchant />
      ) : (
        <>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        mt='30px'
        maxWidth='600px'
        height='62vh'
        px='30px'
        color='#F7FAFC'
        bg='pink.700'
        borderRadius='10px'
        boxShadow='0px 10px 10px rgba(128, 128, 128, 0.4)' 
      >
        <Heading display='flex' alignItems='center' fontWeight='800' fontSize='25px' textAlign='center'>
          Precios sencillos para tu negocio
        </Heading>
        <Text textAlign='center' fontWeight='200' fontSize='20px' pt='16px'>
          Planes cuidadosamente diseñados y adaptados a tu negocio
        </Text>
        <Flex direction='column' alignItems='center' mt='20px'>
          
          <Button 
            colorScheme='pink' 
            mb='4' w='220px' 
            fontSize='20px'
            onClick={handleSoyComercianteClick} 
            as={Link} 
            to="/merchant" 
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
          >
            Soy Comerciante
          </Button>
          <Link to="/register">Registrarse</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Button 
            colorScheme='pink'
            w='220px' 
            fontSize='20px'
            as={Link} 
            to="/createCompany" 
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
          >
            Crea tu Empresa
          </Button>
        </Flex>
      </Flex>
      
      )
     
      
      <Box>
      <Text textAlign='center' fontSize='25px' fontWeight='extrabold' color='#333' mt='50px'>
        Disfrutá de la App durante sesenta días Gratis!!!!
      </Text>
        <UnorderedList>
          <Flex flexDirection='column' justifyContent='center' alignItems='center' fontSize='20px' fontWeight='bold'>
            <ListItem>Todas las funcionalidades.</ListItem>
            <ListItem>Sin suscripción.</ListItem>
            <ListItem>Sin ingresar medios de pago.</ListItem>
          </Flex>
        </UnorderedList>
      </Box>

      <Box>
        <Flex  justifyContent='center' alignItems='center' textAlign='center' fontSize='20px' fontWeight='bold' mt='30px'>
          <Text>
            Si tienes dudas, puedes comunicarte por Whatsapp{' '}
            <Box as="span" cursor="pointer" color="pink.700" mt='15px' onClick={openWhatsApp}>
              <Text>
                Iniciar Conversación
                <FaWhatsapp size='35' style={{ verticalAlign: 'text-bottom', marginLeft: '230px' }} />
              </Text>
            </Box>
          </Text>
        </Flex>
      </Box>
      </>
      )}
     </Box>
      
  );
      }
export default HeaderContent;