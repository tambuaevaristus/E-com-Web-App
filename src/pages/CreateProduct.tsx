import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const todoRef = collection(db, "product");

  const data = {
    name: name,
    price: price,
    description:description
  };

  const addItem = async () => {
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
      <div className="block max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <div className="relative mb-6" data-te-input-wrapper-init>
         
          <input
            className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="product  name"
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
        
        <input
            className=" bg-transparent border-none w-full my-2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="product  Price"
          />
         
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
        <input
            className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        
        </div>
        
    
        <button
          type="submit"
          className="w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          onClick={addItem}
        >
          Send
        </button>
      </div>
    </div>
  );
};
