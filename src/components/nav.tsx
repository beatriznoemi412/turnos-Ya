import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate} from 'react-router-dom';

 const Nav = () => {
  const navigate = useNavigate();
 

  const handleHeader =() =>{
    navigate('/');
  }

const handleRegistration =() =>{
  navigate('/register');
}
const handleLogin = () =>{
  navigate('/Login');
}
const handleBooking = () =>{
  navigate('/bookingPage');
}

  return (
    <Box display='flex' justifyContent='center' alignContent='center' alignItems='center' bg="pink.700" height='30vh'>

      <Flex mx='10' textAlign='center' flexDirection='column' mb= '20px'>
        <Box>
          <Heading fontSize="35px">TurnoListo</Heading>
          <Heading fontSize="20px">Organiza tu Tiempo Eficazmente</Heading>
        </Box>
        <Flex mt='10px'>
        <Button
            fontSize='14px'
            colorScheme="pink"
            width='50px'
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            onClick={() => handleHeader()} 
            >
              Inicio
              </Button>
          <Button
            ml='5px'
            fontSize='13px'
            colorScheme="pink"
            width='66px'
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            onClick={() => handleRegistration()} 
            >
              Registrarse
              </Button>
          <Button
            fontSize='13px'
            ml='5px'
            width='80px'
            colorScheme="pink"
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            onClick={() => handleLogin()} 
            >
              Iniciar Sesión
              </Button>

          <Button
            ml='5px'
            fontSize='13px'
            colorScheme="pink"
            width='100px'
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            onClick={() => handleBooking()} 
             
            >
              Quiero un Turno
              </Button>
 
            
        </Flex>
      </Flex>
    </Box>
  )
}
 
export default Nav