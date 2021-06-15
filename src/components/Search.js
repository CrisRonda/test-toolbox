const SearchHeader = ({onChange, text, onClickSend}) => (
  <div className="form-group row p-2 m-0 justify-content-center align-items-center bg-danger">
    <div className="col-sm-11 col-lg-4">
      <input
        className="form-control"
        id="ex1"
        type="text"
        placeholder="InsertText"
        onChange={({target: {value}}) => {
          onChange(value);
        }}
        value={text}
      />
    </div>
    <div className="col-sm-11 col-lg-1">
      <button
        type="button"
        className="btn btn-primary"
        onClick={e => {
          e.preventDefault();
          onClickSend();
        }}>
        Send
      </button>
    </div>
  </div>
);

export default SearchHeader;
