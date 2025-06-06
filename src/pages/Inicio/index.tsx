import cardapio from '../../data/cardapio.json';
import style from './inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import {Prato} from '../../types/prato';



export default function Inicio (){
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).
    splice(0,3);
    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: Prato){
         navigate(`/prato/${prato.id}`, {state: {prato}, replace: true});
    }
    return(
        <section>
        
          <h3 className={stylesTema.titulo}>
            Recomendações da cozinha
          </h3>
          <div className={style.recomendados}>
             {pratosRecomendados.map(item => (
                <div key={item.id} className={style.recomendado}>
                 <div className={style.imagem}>
                      <img src={item.photo} alt={item.title}/>
                 </div>
                 <button 
                 className={style.recomendado__botao}
                 onClick={()=> redirecionarParaDetalhes(item)}>
                    Ver mais
                 </button>
                </div>
             )
             )}
          </div>
          <h3 className={stylesTema.titulo}> Nossa casa </h3>
          <div className={style.nossaCasa}>
             <img src={nossaCasa} alt="Casa do aluroni" />
             <div className={style.nossaCasa__endereco}>
                Rua Vergueiro, 3185 <br></br>Vila Mariana - SP
             </div>
          </div> 
        </section>
    );
}