import React, { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    VStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Links = ['Home', 'Portfolio', 'About', 'Contact'];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
    <Link
        px={2}
        py={1}
        color={useColorModeValue('#323232', 'white')}
        textTransform='uppercase'
        letterSpacing='2px'
        fontWeight='400'
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
        }}
        href={href}
    >
        {children}
    </Link>);

export default function NavBar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
                <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        ref={btnRef}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        color={useColorModeValue('#3d3d3d', 'white')}
                        bg={useColorModeValue('white', 'gray.700')}>
                    </IconButton>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader ml='4'>
                                {/* <Box boxSize='2em'>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fclogo-opacity.png?alt=media&token=e8177005-2d34-4e58-b87a-8bc84321cda8'}></Image>
                                </Box> */}
                            </DrawerHeader>
                            <DrawerBody ml='4'>
                                <VStack
                                    id="drawer-nav"
                                    as={'nav'}
                                    spacing={4}
                                    alignItems='flex-start'
                                >       {Links.map(link => (
                                    <NavLink key={link} href={`${link}`}>
                                        {link}
                                    </NavLink>
                                ))}
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <HStack
                        id="web-nav"
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map(link => (
                            <NavLink key={link} href={`${link}`}>
                                {link}
                            </NavLink>
                        ))}
                    </HStack>
                    <ColorModeSwitcher />
                </Flex>

                {/* {isOpen ? (
                    <Box id="navb" pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} bg='blue.100'>
                            {Links.map(link => (
                                <NavLink key={link} href={`${link}`}>
                                    {link}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null} */}
            </Box>

        </>
    );
}