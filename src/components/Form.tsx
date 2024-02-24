const Form = ({
  setSearchWord,
  getImage,
}: {
  setSearchWord: (word: string) => void;
  getImage: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <form>
      <input
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit" onClick={(e) => getImage(e)}>
        Search
      </button>
    </form>
  );
};

export default Form;
