import { Container } from './styles'
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  return(
    <Container>
      {item.name}
    </Container>
  )
}