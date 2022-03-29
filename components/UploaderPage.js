import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const UploaderPage = () => {

    const { colorMode } = useColorMode()
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    const [captionArray,setCaptionArray] = useState([]);

    useEffect(()=>{
        setCaptionArray(new Array(selectedFiles.length))
    },[selectedFiles])
    
    const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

    const changeHandler = (e) =>{
        const i = e.target.getAttribute('index');
        const value = e.target.value;

        
        setCaptionArray(captionArray => {
            let newArray = [...captionArray];
            newArray[i] = value;
            return newArray;
        });
        
    }


    const renderPhotos = (source) => {
		return source.map((photo,index) => {
			return (
                <div className="upldiv" key={index}>
                    <img className="uplimg" src={photo} alt=""  />
                    <input className="caption_input"  onChange={changeHandler}  type='text' defaultValue=' ' index={index} />
                </div>
            )
		});
	};
    

    const color = {
        light: 'black',
        dark: 'white'
    }

    const submitHandler = (e) =>{

        e.preventDefault()
        
    }

    

    return ( 
      <div className="uploaderPage">
           <Box display='flex' alignItems='center' justifyContent='center'>
                <Box borderRadius = '5px' w='50px' h = '50px' bgGradient='linear(to-l, #7928CA, #FF0080)' display = 'flex' alignItems='center' justifyContent='center'>
                    <input type="file"  multiple id="files" onChange={handleImageChange} />
                    <label  className ='label' fontSize='' color={color[colorMode]} htmlFor="files">
                        <img style={{cursor:'pointer'}} src="6931268111571662152.svg" alt="" width = '25em' height ='25em' />
                    </label>        
                </Box>
           </Box>
           
            <form className="uplform" onSubmit={submitHandler}>
                <div className="uploads">
                {
                    renderPhotos(selectedFiles)
                }
                </div>
             {selectedFiles && <input className="submit_btn" type='submit' />}
            </form>
            
      </div>
    );
}
 
export default UploaderPage;