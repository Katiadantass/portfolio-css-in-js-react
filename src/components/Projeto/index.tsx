import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo fontSize={20}>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">
        Lista de tarefas feitas com VueJS
      </Paragrafo>
      <LinkBotao href="#">Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
