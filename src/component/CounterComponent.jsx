import React, { useState, useCallback, useEffect } from 'react';

export default function CounterComponent() {
  const [data, setData] = useState({ hits: [] });
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      setData(result.data);
    };
    fetchData();
  }, [data]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  return (
    <>
      Count: {count} {data}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={incrementOtherCounter}>
        incrementOtherCounter
      </button>
    </>
  );
}
