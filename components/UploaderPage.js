import { Box, Input, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { uploadFile,HandleUpload } from "../firebase";
import {v1 as uuid} from 'uuid';

const UploaderPage = () => {

    const { colorMode } = useColorMode()
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    const [fa,setfa] = useState([]);
    const [captionArray,setCaptionArray] = useState([]);
    const [title,setTitle] = useState(' ');
    const [text,setText] = useState(' ');

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
                setfa((prevImages) => prevImages.concat(fA));
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

    const titleChangeHandler = (e) => {
        const value = e.target.value;

        setTitle(value)
    }

    const textChangeHandler = (e) => {
        const value = e.target.value;

        setText(value)
    }
    

    const color = {
        light: 'black',
        dark: 'white'
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const postid = uuid();

        const data = {
            postid,
            title: title,
            text,
            images: []
        };


        try{
            fetch('http://localhost:5000/post',{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            }).then(()=> console.log('request sent'))
            
           }catch(err){
               console.log(err)
           }


        fa.map((value,index)=>{
            uploadFile(value,(downloadURL)=>{
                try{
                    fetch(`http://localhost:5000/post/url/${postid}`,{
                        method: 'POST',
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify({
                            postid,
                            downloadURL,
                            caption: captionArray[index] ? captionArray[index] : ' '
                            })
                    }).then((res)=> console.log(res.status))
                    
                   }catch(err){
                       console.log(err)
                   }
            });

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
                <Input onChange={titleChangeHandler} placeholder="title" size='md' margin='10' width='50%' />
                <Textarea onChange={textChangeHandler} placeholder="post text" width="50%" />
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