import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import MapData from './MapData';
import Loader from '../Loader';

const ExtractData = (props) => {
    // Array Destructuring - ES6
    // State variable & function
    const[dataChild,setDataChild] = useState([]);
    const[loading,setIsLoading] = useState(true);

    // Declared & Assigned
    const baseUrl = 'https://www.reddit.com/r/reactjs.json';

    // AJAX Life Cycle
    const fetchData = () => {
        // consuming code
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data.data.children;
                // console.log(result);

                // Invoke State functions
                setDataChild(result);
                setIsLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(fetchData,[]);

    return(
        <>
            {/* Conditional Rendering - Ternary Operator */}
            {
                (loading) ? <Loader/> : <MapData data = {dataChild}/>
            }
        </>
    )
}

export default ExtractData;