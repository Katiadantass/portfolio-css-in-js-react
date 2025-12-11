import styled from 'styled-components'

type PProps = {
  tipo: 'principal' | 'secundario'
}

export const P = styled.p<PProps>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`


