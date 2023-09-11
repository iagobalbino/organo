import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (

    (props.colaboradores.length > 0) ? <section className='time' style={{ css }} >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='colaboradores' style={CSS}>
        {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} />)}
      </div>
    </section >
      : ''
  );

};

export default Time;