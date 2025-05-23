import logo from  '../../assets/logo.svg';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu(){
    const rotas = [{
        label: 'Inicio',
        to: '/'
    },
    {
       label: 'Cardapio',
       to: '/cardapio'
    },
    {
       label: 'Sobre',
       to: '/sobre'
    }];
    return(
    
        <nav className={styles.menu}>
                <img src={logo} alt="logo do aluroni"/>
                <ul className={styles.menu__list}>
                    {rotas.map((rota, index) => (
                        <li key={index} className={styles.menu__link}>
                            <Link to={rota.to}>
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}