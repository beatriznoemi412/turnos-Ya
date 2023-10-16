import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Flex } from '@chakra-ui/react';
import Nav from './nav';
import { CompanyData } from '../types/types';
import { Link } from 'react-router-dom';

interface CreateCompanyProps {
  onSubmit: (companyData: CompanyData) => void;
}


const CreateCompany: React.FC<CreateCompanyProps> = ({ onSubmit }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    logo: '',
    logoText: '',
    photos: [],
    address: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'photos') {
      const photosArray = value.split('\n').map((photo) => photo.trim());
      setCompanyData((prevData) => ({
        ...prevData,
        [name]: photosArray,
      }));
    } else if (name === 'phone') {
      // Validar que solo se ingresen números
      const numbersOnly = value.replace(/[^\d]/g, '');
      setCompanyData((prevData) => ({ ...prevData, [name]: numbersOnly }));
    } else if (name === 'email') {
      // Validar el formato del email y asignar ejemplo
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setCompanyData((prevData) => ({
        ...prevData,
        [name]: value,
        // Asignar un ejemplo si el email es válido
        exampleEmail: isValidEmail ? 'Ejemplo: correo@example.com' : '',
      }));
    } else {
      setCompanyData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Llamada a la función onSubmit para enviar los datos al backend
    onSubmit(companyData);
  };

  return (
    <Box>
      <Nav />
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Flex direction='column'>
          <FormControl>
            <FormLabel>Nombre de la Empresa</FormLabel>
            <Input
              type="text"
              name="name"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>URL del Logo</FormLabel>
            <Input
              type="text"
              accept="image/*"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              name="logo"
              value={companyData.logo}
              onChange={handleInputChange}
            />
          </FormControl>
          
           {/* Nuevo campo para el texto del logo */}
           <FormControl>
            <FormLabel>Texto del Logo</FormLabel>
            <Input
              type="text"
              name="logoText"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.logoText}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Fotos</FormLabel>
            <Textarea
              name="photos"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.photos.join('\n')}
              onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)}
              placeholder="https://example.com/logo.jpg"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Dirección</FormLabel>
            <Textarea
              name="address"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.address}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Teléfono</FormLabel>
            <Input
              type="text"
              name="phone"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='gray.400'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.phone}
              onChange={handleInputChange}
              placeholder="sólo números"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              width='320px'
              mt={4}
              fontWeight='bold'
              color='pink.300'
              background='pink.800'
              border='4px solid blue.800'
              value={companyData.email}
              onChange={handleInputChange}
              placeholder="correo@example.com"
            />
          </FormControl>
         
          <Button type="submit"
           width='200px'
           colorScheme="teal"
           color='pink.400'
           bg='pink.800'
           fontSize='20px'
           _hover={{ bg: "pink.800", color: "white" }}
           _active={{ bg: "black" }}
           mt={4}
           border='2px solid violet'
          >
            Crear Empresa
            </Button>

          <Link to="/">
            <Button 
              width='100px'
              type="submit"
              colorScheme="teal"
              color='pink.400'
              bg='pink.800'
              _hover={{ bg: "pink.800", color: "white" }}
              _active={{ bg: "black" }}
              mt={4}
              border='2px solid violet'
            >
              Ir a Inicio
            </Button>
          </Link>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateCompany;
