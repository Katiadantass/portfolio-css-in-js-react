import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: React.ReactNode
  fontSize?: number
}

const Titulo = ({ children, fontSize = 20 }: Props) => {
  return <TituloEstilo fontSize={fontSize}>{children}</TituloEstilo>
}

export default Titulo
