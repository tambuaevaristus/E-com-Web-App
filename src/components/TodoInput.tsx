import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const todoRef = collection(db, "todos");

  const data = {
    text: text,
    status: false,
  };

  const addTodo = async () => {
    console.log("in todosss");
    try {
      const docRef = await addDoc(todoRef, data);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  return (
    <div>
      <div className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={addTodo}
          >
            Add item
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
