'use client'
import Image from "next/image";
import { useState } from "react";

export const  Main  =  () => {
  const [clicks,setClicks] = useState<number>(0)
  const click = (event:any) => {
    setClicks(num => num + 1)
    const parentElement = document.getElementById('lol');
    const newElement = document.createElement('div');
    newElement.className = 'number';
    newElement.innerText = '1';
    const rect = parentElement!.getBoundingClientRect();

    newElement.style.position = `absolute`;
    newElement.style.left = `${event.clientX - rect.left}px`;
    newElement.style.top = `${event.clientY - rect.top}px`;
    parentElement!.appendChild(newElement);

    setTimeout(() => {
        newElement.remove();
    }, 3000);


  }
  return (
    <>
      <button onClick={click} className="active:scale-95 transition w-48 h-48 flex items-center justify-center text-center bg-red-500 rounded-full">Click me</button>
      <div className="font-bold">
        points: {clicks}
      </div>
      </>
  );
}
