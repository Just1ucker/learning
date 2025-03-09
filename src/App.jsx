import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const fruits = ["яблоко", "банан", "апельсин"]; // начальный массив

//1) добавить грушу в конец списка и ананас в начало
    fruits.push = ["груша"];
    fruits.unshift = ["ананас"];
    console.log(fruits);

//2) убрать яблоко из массива
    fruits.splice(1, 1);
    console.log(fruits);

//3) отсортировать по алфавиту
    fruits.sort();
    console.log(fruits);

    return <h1>Hello World!</h1>
}

export default App
