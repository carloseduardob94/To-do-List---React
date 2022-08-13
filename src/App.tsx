import {useState} from 'react'
import { Container, Area, Header } from './App.styles'
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar o pão na padaria',
      done: false
    },
    {
      id: 2,
      name: 'Comprar o bolo na padaria',
      done: false
    }
  ])


  return(
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        {list.map((item, index)=>(
          <div>...</div>
        ))}
      </Area>
    </Container>
  )
}

export default App