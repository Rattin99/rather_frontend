import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const UploaderPage = () => {

    const { colorMode } = useColorMode()
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    
    const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};


    const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};
    

    const color = {
        light: 'black',
        dark: 'white'
    }

    return ( 
      <div>
           <Box  borderRadius = '5px' w='50px' h = '50px' bgGradient='linear(to-l, #7928CA, #FF0080)' display = 'flex' alignItems='center' justifyContent='center'>
                <input type="file"  multiple id="files" onChange={handleImageChange} />
                <label  className ='label' fontSize='' color={color[colorMode]} htmlFor="files">
                    <img  src="6931268111571662152.svg" alt="" width = '25em' height ='25em' />
                </label>        
            </Box>
           
            <Box className="result">
            {
                renderPhotos(selectedFiles)
            }
            </Box>
            
      </div>
     );
}
 
export default UploaderPage;