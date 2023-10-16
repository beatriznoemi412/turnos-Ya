import Nav from './nav';
import { Flex, Button, FormControl, FormLabel, Input, Checkbox, VStack} from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const Register = () => {
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log('Form values:', values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Nav />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          rememberMe: false,
        }}
        onSubmit={handleSubmit}
      >
        
        <Form>
          <Flex justifyContent='center' alignContent='center'>
          <VStack spacing={4} align="stretch" p={4}>
            <Field name="firstName">
              {({ field }: FieldProps) => (
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input 
                  {...field}
                  width='300px' 
                  placeholder="Nombre" 
                  autoComplete='off'
                  focusBorderColor="fuchsia"
                  border='2px solid violet'
                  _hover={{ bg: "pink.700", color: "white" }}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="lastName">
              {({ field }: FieldProps) => (
                <FormControl>
                  <FormLabel>Apellido</FormLabel>
                  <Input 
                  {...field}
                  width='300px' 
                  placeholder="Apellido" 
                  autoComplete='off'
                  focusBorderColor="fuchsia"
                  border='2px solid violet'
                  _hover={{ bg: "pink.700", color: "white" }}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="phone">
              {({ field }: FieldProps) => (
                <FormControl>
                  <FormLabel>Teléfono</FormLabel>
                  <Input 
                  {...field} 
                  width='300px'
                  placeholder="Sólo números" 
                  autoComplete='off'
                  focusBorderColor="fuchsia"
                  border='2px solid violet'
                  _hover={{ bg: "pink.700", color: "white" }}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field }: FieldProps) => (
                <FormControl>
                  <FormLabel>Correo electrónico</FormLabel>
                  <Input 
                  {...field} 
                  width='300px' 
                  type="email"
                  autoComplete='off' 
                  placeholder="correo@example.com"
                  focusBorderColor="fuchsia"
                  border='2px solid violet'
                  _hover={{ bg: "pink.700", color: "white" }}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field }: FieldProps) => (
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Input 
                  {...field}
                  width='300px' 
                  type="password" 
                  autoComplete="off"
                  placeholder="Contraseña" 
                  focusBorderColor="fuchsia"
                  border='2px solid violet'
                  _hover={{ bg: "pink.700", color: "white" }}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="rememberMe" type="checkbox">
              {({ field }: FieldProps) => (
                <FormControl>
                  <Checkbox 
                  {...field}
                  borderColor='pink800'
                  _hover={{ bg: "pink.700", color: "white" }}
                  >
                    Recuérdame
                    </Checkbox>
                </FormControl>
              )}
            </Field>

            <Button 
            width='300px' 
            type="submit" 
            colorScheme="teal" 
            bg='pink.800'
            _hover={{ bg: "pink.800", color: "white" }}
            _active={{ bg: "black" }}
            mt={4}
            border='2px solid violet'
            >
              Registrarse
            </Button>
          </VStack>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
