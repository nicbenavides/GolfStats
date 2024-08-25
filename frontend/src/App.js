import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <h1>{data}</h1>
        </div>
    );
}

export default App;
