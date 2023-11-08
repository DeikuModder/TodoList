import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setNewValue] = useState(() => {

    try {
        const item = window.localStorage.getItem(key); 
        return item ? JSON.parse(item) : initialValue 
    } catch (error) {   
        return initialValue 
    }
  });

  const setValue = value => {
   
    try {
        setNewValue(value)
        window.localStorage.setItem(key, JSON.stringify(value)) 
    } catch (error) {
        console.error(error) 
    }
  }

  return [storedValue, setValue]; 
}

