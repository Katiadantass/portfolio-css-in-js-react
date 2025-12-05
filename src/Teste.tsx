import styled from 'styled-components';

type BotaoProps = {
  principal?: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'green' : 'blue')};
  font-size: ${props => props.fontSize || '16px'};
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <>
      <Botao principal fontSize="18px">Enviar</Botao>

      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>

      <BotaoPerigo as="a" principal fontSize="16px">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  );
}

export default Teste;
