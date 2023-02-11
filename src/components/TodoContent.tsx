import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { Task } from "./Task";

export const TodoContent = () => {
  const q = collection(db, "todos");
  const [todoItems, setTodoItems] = useState<any>();

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
    });
    setTodoItems(querySnapshot.docs);
    console.log("This are todo items  =>", todoItems)

    

  };


  console.log(todoItems);

  getData();
  return (
    <div>
      {todoItems.map(() => {
        // console.log(doc.id, " => ", doc.data())
        <Task key={doc.id} text="The first todo item" status={true} />;
      })}
    </div>
  );
};
