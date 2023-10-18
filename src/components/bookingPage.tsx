import { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Select, VStack, Text } from '@chakra-ui/react';
import Nav from './nav'

interface Service {
  category: string;
  type: string;
  schedule: string;
}

// Función temporal/mocks para simular la llamada a la API
const fetchServices = async () => {
  return [
    { category: 'peluqueria', type: 'corte', schedule: '10:00 AM' },
    { category: 'peluqueria', type: 'color', schedule: '11:00 AM' },
    { category: 'manicura', type: 'uñas', schedule: '12:00 PM' },
    
  ];
};

const BookingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSchedule, setSelectedSchedule] = useState<string>('');
  const [availableServices, setAvailableServices] = useState<Service[]>([]);

  // Función para cargar los servicios disponibles desde la API (o función temporal)
  const loadAvailableServices = async () => {
    try {
      const servicesFromApi = await fetchServices();
      setAvailableServices(servicesFromApi);
    } catch (error) {
      console.error('Error al cargar servicios:', error);
    }
  };

  useEffect(() => {
    // Llamar a la función para cargar servicios cuando el componente se monta
    loadAvailableServices();
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedType('');
    setSelectedSchedule('');
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setSelectedSchedule('');
  };

  const handleSelectSchedule = (schedule: string) => {
    setSelectedSchedule(schedule);
  };

  const handleBookAppointment = () => {
    // Aquí puedes enviar la reserva al backend o realizar alguna acción con los datos seleccionados
    console.log('Reservando turno:', {
      category: selectedCategory,
      type: selectedType,
      schedule: selectedSchedule,
    });
  };

  return (
    <Box>
        <Nav />
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Categoría de Servicio</FormLabel>
          <Select
            placeholder="Seleccione una categoría"
            value={selectedCategory}
            onChange={(e) => handleSelectCategory(e.target.value)}
          >
            <option value="peluqueria">Peluquería</option>
            <option value="manicura">Manicura</option>
            {/* Agrega más opciones según tus categorías */}
          </Select>
        </FormControl>

        {selectedCategory && (
          <FormControl>
            <FormLabel>Tipo de Servicio</FormLabel>
            <Select
              placeholder="Seleccione un tipo de servicio"
              value={selectedType}
              onChange={(e) => handleSelectType(e.target.value)}
            >
              {availableServices
                .filter((service) => service.category === selectedCategory)
                .map((service) => (
                  <option key={service.type} value={service.type}>
                    {service.type}
                  </option>
                ))}
            </Select>
          </FormControl>
        )}

        {selectedType && (
          <FormControl>
            <FormLabel>Horario Disponible</FormLabel>
            <Select
              placeholder="Seleccione un horario"
              value={selectedSchedule}
              onChange={(e) => handleSelectSchedule(e.target.value)}
            >
              {availableServices
                .filter((service) => service.category === selectedCategory && service.type === selectedType)
                .map((service) => (
                  <option key={service.schedule} value={service.schedule}>
                    {service.schedule}
                  </option>
                ))}
            </Select>
          </FormControl>
        )}

        {selectedSchedule && (
          <Text fontWeight="bold">Horario Seleccionado: {selectedSchedule}</Text>
        )}

        <Button
          onClick={handleBookAppointment}
          disabled={!selectedSchedule}
          colorScheme="teal"
        >
          Reservar Turno
        </Button>
      </VStack>
    </Box>
  );
};

export default BookingPage;
