import { useState } from 'react';
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Select,
  Text,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Nav from './nav'

export type ServiceCategory = 'peluqueria' | 'manicura' | 'makeup';
export type ScheduleType =
  | 'corte'
  | 'color'
  | 'corteColor'
  | 'reflejos'
  | 'semipermanentes'
  | 'tradicionales'
  | 'quinces'
  | 'bodas'
  | 'fiesta'
  | 'casual';

export type Schedule = {
  id: number;
  time: string;
};

export type ServiceData = {
  [Key in ServiceCategory]: Partial<Record<ScheduleType, Schedule[]>>;
};

const Merchant: React.FC = () => {

  const [currentService, setCurrentService] = useState<ServiceCategory | ''>('');
  const [currentScheduleType, setCurrentScheduleType] = useState<ScheduleType | ''>('');
  const [currentSchedule, setCurrentSchedule] = useState<string>('');
  const [serviceData, setServiceData] = useState<ServiceData>({
    peluqueria: {},
    manicura: {},
    makeup: {},
  });
  const [clientSelections, setClientSelections] = useState<Array<string>>([]);

  const handleAddService = () => {
    if (currentService && !(currentService in serviceData)) {
      setServiceData((prevServiceData) => ({
        ...prevServiceData,
        [currentService]: {},
      }));
      setClientSelections((prevSelections) => [...prevSelections, `Servicio: ${currentService}`]);
    }
    setCurrentService('');
  };

  const handleAddScheduleType = () => {
    if (currentService && currentScheduleType && !(currentScheduleType in serviceData[currentService]!)) {
      setServiceData((prevServiceData) => ({
        ...prevServiceData,
        [currentService]: {
          ...prevServiceData[currentService],
          [currentScheduleType]: [],
        },
      }));
      setClientSelections((prevSelections) => [...prevSelections, `Tipo de Servicio: ${currentScheduleType}`]);
    }
    setCurrentScheduleType('');
  };

  const handleAddSchedule = () => {
    if (currentService && currentScheduleType && currentSchedule) {
      setServiceData((prevServiceData) => ({
        ...prevServiceData,
        [currentService]: {
          ...prevServiceData[currentService],
          [currentScheduleType]: [
            ...(prevServiceData[currentService]?.[currentScheduleType] || []),
            { id: Date.now(), time: currentSchedule },
          ],
        },
      }));
      setClientSelections((prevSelections) => [...prevSelections, `Horario: ${currentSchedule}`]);
    }
    setCurrentSchedule('');
  };

  const handleComercianteContratarClick = () => {
    console.log('Comerciante quiere contratar el servicio');

  };

  return (
    <>
      <Nav />

      <VStack>
        <Flex direction='column' justifyContent='center' alignContent='center'>
          <FormControl>

            <FormLabel>Tipo de servicio</FormLabel>

            <HStack >
              <Flex direction='column'>
              <Select
                placeholder="Seleccione categoría de servicio"
                width='300px'
                mt={4}
                fontWeight='bold'
                background='black'
                color='gray.500'
                border='4px solid blue.800'
                _active={{ bg: "black" }}
                _hover={{ bg: "blue.800", color: 'white' }}
                value={currentService}
                onChange={(e) => setCurrentService(e.target.value as ServiceCategory)}
              >
                <option value="peluqueria">Peluquería</option>
                <option value="manicura">Manicura</option>
                <option value="makeup">Makeup</option>
              </Select>
              <Button onClick={handleAddService}
                width='300px'
                type="submit"
                colorScheme="teal"
                color='gray.500'
                bg='pink.900'
                _hover={{ bg: "pink.800", color: "white" }}
                _active={{ bg: "black" }}
                mt={4}
                border='2px solid violet'

              >
                Agregar Servicio
              </Button>
              </Flex>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de servicio</FormLabel>
            <HStack>
            <Flex direction='column'>
              <Select
                placeholder="Seleccione tipo de servicio"
                width='300px'
                mt={4}
                fontWeight='bold'
                background='black'
                color='gray.500'
                border='4px solid blue.800'
                _active={{ bg: "pink.800" }}
                _hover={{ bg: "blue.800", color: 'pink' }}
                value={currentScheduleType}
                onChange={(e) => setCurrentScheduleType(e.target.value as ScheduleType)}
              >
                <option value="corte">Corte</option>
                <option value="color">Color</option>
                <option value="corteColor">Corte y Color</option>
                <option value="reflejos">Reflejos</option>
                <option value="semipermanentes">Uñas Semipermanentes</option>
                <option value="tradicionales">Uñas Tradicionales</option>
                <option value="bodas">Makeup Bodas</option>
                <option value="fiesta">Makeup Fiesta</option>
                <option value="casual">Makeup casual</option>
              </Select>
              <Button onClick={handleAddScheduleType}
                width='300px'
                type="submit"
                fontWeight='bold'
                colorScheme="teal"
                color='gray.500'
                bg='pink.800'
                _hover={{ bg: "pink.800", color: "white" }}
                _active={{ bg: "black" }}
                mt={4}
                border='2px solid violet'
              >
                Agregar Tipo de servicio
              </Button>
              </Flex>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Horarios</FormLabel>
           
            <HStack>
            <Flex direction='column'>
              <Input
                placeholder="Ingrese horario"
                width='300px'
                mt={4}
                fontWeight='bold'
                color='gray.500'
                background='black'
                border='4px solid blue.800'
                value={currentSchedule}
                onChange={(e) => setCurrentSchedule(e.target.value)}
              />
              <Button onClick={handleAddSchedule}
                width='300px'
                type="submit"
                colorScheme="teal"
                color='gray.500'
                fontWeight='bold'
                bg='pink.800'
                _hover={{ bg: "pink.800", color: "white" }}
                _active={{ bg: "black" }}
                mt={4}
                border='2px solid violet'
              >
                Agregar Horario
              </Button>
              </Flex>
            </HStack>
          </FormControl>

          <VStack align="start">
            <Text fontWeight="bold">Selecciones del Cliente:</Text>
            <Box as="ul">
              {clientSelections.map((selection, index) => (
                <Text as="li" key={index}>
                  {selection}
                </Text>
              ))}
              {currentService && (
                <Text as="li">Servicio Seleccionado: {currentService}</Text>
              )}
              {currentScheduleType && (
                <Text as="li">Tipo de Servicio Seleccionado: {currentScheduleType}</Text>
              )}
              {currentSchedule && (
                <Text as="li">Horario Seleccionado: {currentSchedule}</Text>
              )}
            </Box>
          </VStack>
          <Button onClick={handleComercianteContratarClick}
            width='300px'
            type="submit"
            colorScheme="teal"
            color='gray.500'
            fontWeight='bold'
            bg='pink.800'
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            mt={4}
            border='2px solid violet'
          >
            Contratar Servicio
          </Button>
          <Link to="/">
            <Button 
              width='100px'
              type="submit"
              colorScheme="teal"
              color='gray.500'
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
    </>
  );
};

export default Merchant;












