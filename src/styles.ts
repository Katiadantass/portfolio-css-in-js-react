import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    padding-top: 80px;
    background: #f5f5f5;
    color: #222;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 56px;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 20px 0;
  }
`

export default EstiloGlobal
