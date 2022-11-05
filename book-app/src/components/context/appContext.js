import {createContext, useContext, useState} from 'react';



const AppContext= createContext(null);

export const useAppContext = () => { 
    const context = useContext(AppContext);

    if (context === undefined){ 
        throw new Error ("AppContext must be within AppContextProvider!")
    } else { 
        return context;
    }
}

const AppContextProvider = ({children}) => { 

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = () => { 

    }

    const removeFromFavorites = (id)=> { 

    }



    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;