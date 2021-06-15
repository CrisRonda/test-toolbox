const WordCard = ({word}) => (
  <div
    data-testid="card-word"
    className={`m-4 d-block border border-2 rounded ${
      word?.palindrome ? 'border-primary' : 'green'
    }`}>
    <div>
      <h2 data-testid="title" className="card-title">
        {word.text}
      </h2>
    </div>
  </div>
);

export default WordCard;
