import { useCounter } from '../CounterContext';

const Counter = () => {
  const { count, setCount } = useCounter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div style={{ margin: '0 20px' }}>
        <h1> Value: {count}</h1>
      </div>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
export { Counter };
