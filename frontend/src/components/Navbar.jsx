import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import { IoMoon, IoSunny } from 'react-icons/io5'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column", 
            sm: "row"
            }}
        >
            <Text
            fontSize={{base:"22", sm: "28"}}
            fontWeight={"Bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            >
              <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            
            <HStack spacing={2} alignItems={"center"}> 
              <Link to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon/> : <IoSunny size={20} />}
              </Button>
            </HStack>
            
        </Flex>
    </Container>
  )
}

export default Navbar