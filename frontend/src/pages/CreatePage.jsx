import { Container, useColorModeValue } from '@chakra-ui/react';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react'
import { useProductoStore } from '../store/Producto';


const CreatePage = () => {
  const [newProducto, setNewProducto] = React.useState({
    nombre: "",
    precio: "",
    imagen: "",
  });

const {createProducto} = useProductoStore()

  const handleAddProducto = async () => {
    const {success, message } = await createProducto (newProducto)
    console.log("Success:", success)
    console.log("Message",message )
  };


  return (
    <Container maxW={"container.sm"} >
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Crear Nuevo Producto
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} 
        p={6} 
        rounded={"lg"}
        shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
            placeholder='Nombre del Producto'
            name='nombre'
            value={newProducto.nombre}
            onChange={(e) => setNewProducto({ ...newProducto, nombre: e.target.value })}
            />
            <Input
            placeholder='Precio del Producto'
            name='precio'
            type='number'
            value={newProducto.precio}
            onChange={(e) => setNewProducto({ ...newProducto, precio: e.target.value })}
            />
            <Input
            placeholder='URL de la Imagen'
            name='imagen'
            value={newProducto.imagen}
            onChange={(e) => setNewProducto({ ...newProducto, imagen: e.target.value })}
            />

            <Button colorScheme='blue' onClick={handleAddProducto} w = 'full'>
              Agregar Producto
            </Button>
          </VStack>

        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage