import React, { useEffect, useState } from 'react';
import { ExampleState } from '../reducers/example';
import useExample from '../hooks/useExample';

function Example(){
    const [ num, setNum ] = useState<ExampleState>(0);
    const { example, onSetExample } = useExample();

    useEffect(() => {
        setNum(example);
    }, [example]);
    
    const setExample = (number:ExampleState) => {
        onSetExample(number);
    }

    return (
        <div>
            <p>{example}</p>
            <input type="number" value={num} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNum(Number(e.target.value))}/>
            <button onClick={() => setExample(num)}>Exapmle</button>
        </div>
    )
}

export default Example;