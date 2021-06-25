import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note, setNote) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
    setNote({
      title: "",
      content: "",
    });
  };
  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((val, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
