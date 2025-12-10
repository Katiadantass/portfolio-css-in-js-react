import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre: React.FC = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ipsa voluptate unde veritatis amet mollitia dolore nisi labore
      qui reiciendis laborum non dolores, pariatur modi enim repellat
      quod est ducimus omnis.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Katiadantass&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Katiadantass&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
