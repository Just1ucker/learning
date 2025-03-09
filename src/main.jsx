import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const fruits = ["яблоко", "банан", "апельсин"]; // начальный массив

//1) добавить грушу в конец списка и ананас в начало
fruits.push = ["груша"];
fruits.unshift = ["ананас"];
console.log(fruits);

//2) убрать яблоко из массива
const fruits = ["ананас", "яблоко", "банан", "апельсин", "груша"];
const decremention = fruits.splice(1, 1);
console.log(decremention);

//3) отсортировать по алфавиту
const sortedFruits = ["ананас","банан", "апельсин", "груша"].sort();
console.log(sortedFruits);