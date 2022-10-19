import { useMemo, useRef, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const inputRef = useRef();

    const filteredItems = useMemo(
        () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
        [items, query]
    );

    function onSubmit(e) {
        e.preventDefault();

        const { value } = inputRef.current;
        if (value === '') return;
        setItems((prev) => [...prev, value]);

        inputRef.current.value = '';
    }

    return (
        <>
            Search:
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" />
            <br />
            <br />
            <form onSubmit={onSubmit}>
                New Item: <input ref={inputRef} type="text" />
                <button type="submit">Add</button>
            </form>
            <h3>Items:</h3>
            {filteredItems.map((item) => (
                <div>{item}</div>
            ))}
        </>
    );
}

export default App;
