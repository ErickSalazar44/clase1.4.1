
const PhrasesCard = ({phraseRandom}) => {
    return (
        <div className="foldedPaper">
            <p>{phraseRandom.phrase}</p>
            <img className="galleta" src="../public/galleta.png" alt="galleta" />
            {/* <p>{phraseRandom.author}</p> */}
        </div>
    )
}

export default PhrasesCard