import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { uploadFile } from "../firebase";
import {v1 as uuid} from 'uuid';

const UploaderPage = () => {

    const { colorMode } = useColorMode()
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    const [fa,setfa] = useState();
    const [captionArray,setCaptionArray] = useState([]);

    useEffect(()=>{
        setCaptionArray(new Array(selectedFiles.length))
    },[selectedFiles])
    
    const handleImageChange = (e) => {
		if (e.target.files) {

            const allOk = true;
            const types = ['image/png','image/jpeg'];
            const fA = Array.from(e.target.files);

            fA.map(value =>{

                if( !types.includes(value.type) ) {
                    allOk = false;
                }
            })
            
			if(allOk){
                const filesArray = fA.map((file) => URL.createObjectURL(file));
                setfa(fA);
                setSelectedFiles((prevImages) => prevImages.concat(filesArray));
                fA.map(
                    (file) => URL.revokeObjectURL(file) // avoid memory leak
                );
            }

            
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
    

    const color = {
        light: 'black',
        dark: 'white'
    }

    const submitHandler = (e) =>{
        e.preventDefault()

        fa.map((value,index)=>{
            uploadFile(value);
        })
        
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
             {selectedFiles.length !=0 && <input className="submit_btn" type='submit' />}
            </form>
            
      </div>
    );
}
 
export default UploaderPage;