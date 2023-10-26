import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Checkbox, Text } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { PrismaClient } from "@prisma/client";
import Nav from "./nav";

const prisma = new PrismaClient();

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",  
    password: "",
    rememberPassword: false,
  });

  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState("");
  const [isEmailEditable, setIsEmailEditable] = useState(true); 

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === "email") {
        // Validar si el campo de correo electrónico no está vacío
        if (value.trim() === "") {
          setEmailError("Por favor, ingresa una dirección de correo electrónico.");
        } else {
          // Validación del email
          if (!/^\S+@\S+\.\S+$/.test(value)) {
            setEmailError("Por favor, ingresa una dirección de correo electrónico válida.");
          } else {
            setEmailError("");
          }
        }
      }
    

    // Validación de la contraseña
    if (name === "password") {
      if (!/^(?=.*[A-Za-z])(?=.*\d).{8}$/.test(value)) {
        setPasswordError("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
      } else {
        setPasswordError("");
      }

      // Limitar la longitud de la contraseña a 8 caracteres
      if (value.length > 8) {
        setPasswordError("La contraseña no puede tener más de 8 caracteres.");
      }
    }
  };
  const handleBlur = () => {
    // Validación del email cuando se completa el campo
    const { email } = formData;
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Por favor, ingresa una dirección de correo electrónico válida.");
      setIsEmailEditable(true);
    } else {
      setEmailError("");
    }
  };
 

  const handleLogin = async () => {
    try {
      const user = await prisma.loginInfo.findUnique({
        where: {
          email: formData.email,
        },
      });

      if (user && user.password === formData.password) {
        console.log('Inicio de sesión exitoso');
        navigate('/');
      } else {
        console.error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

    

  return (
    <Box>
      <Nav />
      <Flex flexDirection='column' justifyContent='center' alignContent='center' alignItems='center'>
        <Heading mt='5'>Login</Heading>
        <Input
          name="email" 
          id='email' 
          type='email'
          autoComplete='off'
          placeholder="Email"  
          mt='5'
          mb="3"
          width='300px'
          border='2px solid violet'
          value={formData.email}  
          onChange={handleInputChange}
          onBlur={handleBlur}
          focusBorderColor="fuchsia" 
          _hover={{ bg: "pink.700", color: "white" }}
          isDisabled={!isEmailEditable}  
        />
        {emailError && <Text color="red">{emailError}</Text>}  
        <Input
          name="password"
          type="password"
          placeholder="Password"
          border='2px solid violet'
          mb="3"
          width='300px'
          value={formData.password}
          onChange={handleInputChange}
          maxLength={8}
          focusBorderColor="fuchsia" 
          _hover={{ bg: "pink.700", color: "white" }}
        />
        {passwordError && <Text color="red">{passwordError}</Text>}
        <Checkbox
          name="rememberPassword"
          mb="3"
          mt="3"
          fontWeight='bold'
          isChecked={formData.rememberPassword}
          onChange={() => setFormData(prevState => ({ ...prevState, rememberPassword: !prevState.rememberPassword }))}
          color="black"  
          borderColor="violet"  
          iconColor="black" 
        >
          Recordar contraseña
        </Checkbox>
        <Flex mt="3">
          <Button colorScheme="teal" bg='pink.800' onClick={handleLogin} isDisabled={!!emailError || !!passwordError}>
            Login
          </Button>
        </Flex>
        <Flex mt="3" fontWeight='bold'>
          <Link to="/register">No tienes cuenta? Registrarse aquí</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
