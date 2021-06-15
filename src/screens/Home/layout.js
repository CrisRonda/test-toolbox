import WordCard from 'src/components/WordCard';

const HomeLayout = ({words}) => {
  return (
    <>
      <div className="p-5 flex-fill">
        <div
          className="bg-white p-5 flex-1 overflow-auto"
          style={{
            minHeight: '75%',
          }}>
          <h1>Results</h1>
          {words.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
