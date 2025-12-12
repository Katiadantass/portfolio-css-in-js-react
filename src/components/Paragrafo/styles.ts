import styled from 'styled-components'

type PProps = {
  tipo: 'principal' | 'secundario'
}

export const P = styled.p<PProps>`
  font-size: 14px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as any).corPrincipal
      : (props.theme as any).corSecundaria};
  line-height: 22px;
`


