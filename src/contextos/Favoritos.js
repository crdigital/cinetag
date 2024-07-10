import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

const FavoritosProvider =  ({children}) => {

    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    );
}

export default FavoritosProvider;

// hook personalizado
export const useFavoritosContext = () => {
    const {favorito, setFavorito} = useContext(FavoritosContext);

    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favorito.some( item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        // se não for favorito adiciona
        if(!favoritoRepetido){
            novaLista.push(novoFavorito);

            return setFavorito(novaLista);
        }

        // aqui remove se for favorito
        novaLista.splice(novaLista.indexOf(novoFavorito, 1));
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}