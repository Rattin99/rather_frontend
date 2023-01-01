import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import ImageBox from "./ImageBox";
import eloRank from "../utils/elo";
import { UserContext } from "../utils/UserContext";
import { serverUrl } from "../utils/url";

const Game = ({ postId, setShowlist }) => {
    const [imgArray, setArray] = useState();
    const [post_text,setPost_text] = useState('')
    const [activeIndex, setActiveIndex] = useState([0, 1]);

    const { user } = useContext(UserContext)

    const getimages = async (signal) => {
        const res = await fetch(`${serverUrl}/urls/${postId}`, { signal });
        const data = await res.json();
        const images = data[0]
        const posttext = data[1][0].post_text;

        setArray(images)
        setPost_text(posttext)

       
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        getimages(signal)

        return () => controller.abort();
    }, [])


    const isActive = (i) => {
        return activeIndex.includes(i);
    }

    const getLarger = (a, b) => {
        if (a > b) return a;
        if (b > a) return b;
    }


    const HandleSelect = async (e) => {

        try {
            const targetIndex = e.target.attributes.index.value;
            const index1 = activeIndex[0];
            const index2 = activeIndex[1];
            const l = imgArray.length - 1;

            if (index1 <= l && index2 <= l) {

                const opIndex = (targetIndex == index1) ? index2 : index1;

                const w = imgArray[targetIndex];
                const l = imgArray[opIndex];

                const result = eloRank(w.ranking, l.ranking);

                imgArray[targetIndex].ranking = result.newWrank;
                imgArray[opIndex].ranking = result.newLrank;


                if (index1 == targetIndex) setActiveIndex([index1, getLarger(index1, index2) + 1]);
                if (index2 == targetIndex) setActiveIndex([getLarger(index1, index2) + 1, index2]);
            }

            if (index1 == l || index2 == l) {
                

                fetch(`${serverUrl}/post/rank/${postId}/${user}`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ imageArray: imgArray })
                }).then((res) => {
                    
                    setShowlist(true);
                }).catch(error => console.log(error))
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Box display='flex' h='80vh' flexDirection='column' alignItems='center' justifyContent='space-around' >
            <Text maxH={{ base: '10vh', lg: '20vh' }} fontSize={{ base: 'sm', lg: 'md' }} textAlign='center' >{post_text}</Text>
            <Box overflow='hidden' w={{ lg: '70vw', base: '100vw' }} display='flex' flexDirection={{ base: 'column', lg: 'row' }} alignItems='center' justifyContent='center'>
                {
                    imgArray && imgArray.map((value, index) =>
                        isActive(index) && (
                           <Box key={index} display = "flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <ImageBox handleselect={(e) => HandleSelect(e)} key={index} src={value.image_url} index={index} />
                                <Text margin={{ base: '2px', lg: '10px' }} align="center">{value.caption}</Text>
                           </Box>
                        )
                    )
                }
            </Box>
        </Box>
    );
}

export default Game;