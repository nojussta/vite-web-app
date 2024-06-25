import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  );
}

export default Counter;
