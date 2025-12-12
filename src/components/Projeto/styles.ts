import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as any).corDaBorda};
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${(props) => (props.theme as any).corDeFundo};
  border-radius: 8px;
`

export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as any).corPrincipal};
  font-size: 14px;
  background-color: ${(props) => (props.theme as any).corDeFundoBotao};
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 4px;
  cursor: pointer;
`
