import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar: React.FC<Props> = (props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kátia Dantas</Titulo>

      <Paragrafo tipo="secundario">
        Katiadantass
      </Paragrafo>

      <Descricao tipo="secundario">
        Desenvolvedora FullStack Python
      </Descricao>

      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
