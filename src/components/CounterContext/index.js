import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error('UseCounter must be used within a Provider ');

  const { count, setCount } = context;
  return { count, setCount };
}
