import {useState} from 'react'
import { Container, Area, Header } from './App.styles'
import { Item } from './types/Item';

import { ListItem } from  './components/ListItem'
import { AddArea } from  './components/AddArea'


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
      done: true
    }
  ])


  return(
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea />

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </Area>
    </Container>
  )
}

export default App