import React from 'react';
import styles from './Buscador.module.scss';
import { FiSearch} from 'react-icons/fi';

interface Props{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props){
    return(
        <div className={styles.buscador}>
            <input
            value={busca}
            onChange={evento => setBusca(evento.target.value)}
            placeholder="Buscar"
            />
            <FiSearch size={20} color="#7C80E7"/>
        </div>
    )
}