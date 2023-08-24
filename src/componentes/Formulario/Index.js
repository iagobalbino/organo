import './Formulario.css'
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import Botao from '../Botao/Index';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];


  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar  o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;