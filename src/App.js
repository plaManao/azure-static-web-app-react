import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const text  = await fetch(`/api/GetContacts?name=John`);
      setData(await text.text());
    })();
  });

  return <div>{data}</div>;
}

export default App;
