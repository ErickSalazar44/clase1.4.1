
const PhrasesCard = ({phraseRandom}) => {
    return (
        <div className="foldedPaper">
            <p>{phraseRandom.phrase}</p>
            {/* <p>{phraseRandom.author}</p> */}
        </div>
    )
}

export default PhrasesCard