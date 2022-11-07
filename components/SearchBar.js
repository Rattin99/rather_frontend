import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";


const SearchBar = ({SearchInputChangeHandler}) => {

    const color = {
        light: 'black',
        dark: 'white'
    }

    const colormode = useColorMode()

    return ( 
        <Box display="flex" alignItems= "center" justifyContent="center"  >
            <Box width="40%">
                <InputGroup>
                    <InputLeftElement 
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children = {<Search2Icon color={color[colormode]} />}
                    />
                    <Input onChange={SearchInputChangeHandler} />
                </InputGroup>
            </Box>
            
        </Box>
    );
}
 
export default SearchBar;