import { useEffect, useState } from "react";
export function PokemanData() {
    const [pokeAPI, setPokeAPI] = useState([])


    useEffect(() => {
        async function pokeData() {
            // await fetch('https://pokeapi.co/api/v2/pokemon/')
            //     .then((data) => {
            //         return data.json()
            //     })
            //     .then(({results})=> {
            //         setPokeAPI(results);
            //         return results}) 
            //     .then((results) => {
            //         console.log(results);
                    
            //     });

                const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
                const ress = await res.json();
                setPokeAPI(ress.results);

        }
        pokeData();
    }, []);
    
    return pokeAPI;
}