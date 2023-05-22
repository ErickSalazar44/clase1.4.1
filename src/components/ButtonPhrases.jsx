import randomElementFromArray from '../utils/randomElementFromArray'
import phrase from '../utils/phrases.json'
const ButtonPhrases = ({setphraseRandom, setbackgroundRandom,arrBackground}) => {

    const handleRandom = () => {
        const newRandomPhrase =randomElementFromArray(phrase);
        
        setphraseRandom(newRandomPhrase);
        setbackgroundRandom(randomElementFromArray(arrBackground));
    };
    return (
        <button onClick={handleRandom} className='animation'>Ver otro</button>
    )
}

export default ButtonPhrases;