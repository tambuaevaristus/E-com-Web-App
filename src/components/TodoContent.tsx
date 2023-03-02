import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { Task } from "./Task";

export const TodoContent = () => {
  const todoRef = collection(db, "todos");
  const todoItems = [{}];
  const [todos, setTodos] = useState(todoItems);

  const getTodos = async () => {
    const querySnapshot = await getDocs(todoRef);
    await querySnapshot.forEach((doc: any) => {
      todoItems.push(doc.data());
    });

    console.log(todoItems);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.map((todo: any, key: any) => (
        <Task key={key} text={todo.text} status={true} />
      ))}
    </div>
  );
};
