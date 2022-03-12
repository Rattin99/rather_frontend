import React from 'react'
import {
    useColorMode,
    Flex,
    Box,
    Text,
    Input
} from '@chakra-ui/react'

import Link from 'next/dist/client/link'

import styled from '@emotion/styled'


import DarkModeSwitch from './DarkModeSwitch'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1000px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box >
                  <Link href='/' >
                    <a>
                        <Text color={color[colorMode]} fontSize="3xl">
                            .rather
                        </Text>
                    </a>
                  </Link>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-around'>
                    <Input margin='0px 5px' color={color[colorMode]} placeholder='search' size='md' />
                    <DarkModeSwitch />
                </Box>
                
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container

