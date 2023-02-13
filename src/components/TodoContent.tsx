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
  const todos: any = [];

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      todos.push(doc.data());
    });
    setTodoItems(querySnapshot.docs);
  };


  getData();
  console.log(todos);

  return (
    <div>
      {todos.map((todo: any, key: any) => {
        <Task key={key} text="The first todo item in todo" status={true} />;
      })}
    </div>
  );
};
