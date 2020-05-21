import React, {useState } from 'react';

function LarryComp() {
    const [count, setCount] = useState(1000);
    function myOnClickCount(e) {
        console.log('you clicked in LarryComp');

    }


    return
<div>
    <h1> hello world from larry comp </h1>
    //<h1 onClick={myOnClick}> hello world  count {count}</h1>
</div>

    const [count, setCount] = useState(1000)




}