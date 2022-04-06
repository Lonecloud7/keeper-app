import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notetext from "./Notetext";
import { useState } from "react";

const Keeper = () => {
  const [inputnote, setInputnote] = useState({
    title: "",
    content: "",
  });

  const addNote = (e) => {
    const { name, value } = e.target;

    setInputnote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  const [outputNote, setOutputNote] = useState([]);

  const [error, setError] = useState(false);

  const getNote = () => {
    if (inputnote.title === "" || inputnote.content === "") {
      setError(true);
    } else {
      setError(false);

      setOutputNote((preValues) => {
        return [...preValues, inputnote];
      });

      setInputnote({
        title: "",
        content: "",
      });
    }

    setTimeout(function () {
      //Your stuff
      setError(false);
    }, 1000);
  };

  const deleteNote = (id) => {
    setOutputNote((preValues) => {
      return preValues.filter((value, index) => {
        return index !== id;
      });
    });
  };

  const [showCont, setShowCont] = useState(false);

  const expInput = () => {
    setShowCont(true);
  };

  const minInput = () => {
    setShowCont(false);
  };

  return (
    <div>
      <Header />

      <h2 style={{ textAlign: "center" }}>{error ? `Add Note!` : null}</h2>
      <div className="inputarea">
        <div className="addnote">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={addNote}
            id="title"
            value={inputnote.title}
            onFocus={expInput}
          />
          <br />
          <div
            className="content"
            style={{ display: showCont ? "block" : "none" }}
          >
            <input
              type="text"
              name="content"
              placeholder="Take a note..."
              onChange={addNote}
              id="content"
              value={inputnote.content}
            />
            <button onClick={getNote}> Add</button>
          </div>
        </div>
      </div>

      <div className="Notegrid">
        {/* {Notetext.map(props => <Note 
          key={props.key}
          title={props.title}
          content={props.content}
      />)}
         */}
        {outputNote.map((value, index) => (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteNote={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Keeper;
