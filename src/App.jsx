import React, { useState, useRef } from 'react';
import { Uploader } from "./Uploader";
import { asyncTimeout } from "./utils";

export function App(props) {
  const [items, setItems] = useState([]);

  return (
    <>
      <h1>Hello.</h1>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
      <Uploader onItemCompleted={(item) => {
        setItems(items => [...items, item]);
        console.log("Item done");
      }} onAllCompleted={async () => {
        setItems([`All items done: "${items.join(", ")}"`])
        await asyncTimeout(2000);
        setItems([]);
      }} />
    </>
  );
}