import { Counter } from './components/Counter';
import CounterProvider from './components/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
