import './App.css'
import { useState } from 'react'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray';
import ButtonPhrases from './components/ButtonPhrases'
import PhrasesCard from './components/PhrasesCard'

const arrBackground = [1, 2, 3, 4, 5, 6, 7, 8];
function App() {

  // Valor inicial
  const [phraseRandom, setphraseRandom] = useState(randomElementFromArray(phrases));
  const [backgroundRandom, setbackgroundRandom] = useState(randomElementFromArray(arrBackground))

  const objStyle = {
    backgroundImage: `url('/fondo${backgroundRandom}.jpg')`
  }

  return (
    <main style={objStyle}>
      <h1 className='tittle'>GALLETA DE LA FORTUNA</h1>
        <div className='content'>
        <PhrasesCard phraseRandom={phraseRandom}/>
        <ButtonPhrases 
          setphraseRandom={setphraseRandom} 
          setbackgroundRandom={setbackgroundRandom}
          arrBackground={arrBackground}
        />
        </div>
    </main>
  )
}

export default App
