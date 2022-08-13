import { Container } from './styles'
import {useState, KeyboardEvent} from 'react'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  }


  return(
    <Container>
      <div className="image">+</div>
      <input 
        type="text"
        placeholder="Adiciona uma tarefa" 
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  )
}