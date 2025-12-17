import { createContext, useState, useContext, useEffect, useEffectEvent } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return <movieContext.Provider>
        {children}
    </movieContext.Provider>
}