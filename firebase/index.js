import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBIaNDL-UtC3NGCZ_K9NdbMMcTnPsLbjGk",
    authDomain: "rather-cec85.firebaseapp.com",
    projectId: "rather-cec85",
    storageBucket: "rather-cec85.appspot.com",
    messagingSenderId: "356344731742",
    appId: "1:356344731742:web:f44f19a89cf8008d723ccf",
    measurementId: "G-E7WJL57LDL"
  };


 export  const app = initializeApp(firebaseConfig);

 export const storage = getStorage(app); 



export const uploadFile = (file,f) =>{

  const filename = file.name;
  const fileType = file.type;

  const metadata = {
    contentType: fileType,
  }

  const reference = ref(storage,filename);

  uploadBytes(reference,file,metadata).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {

      f(downloadURL)
    })
  })


}


