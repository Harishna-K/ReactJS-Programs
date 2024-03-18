// import React, { useState, useCallback } from 'react'
// var funccount = new Set();
// const Back= () => {
// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = useCallback(() => {
// setCount(count + 1)
// }, [count])
// const decrementCounter = useCallback(() => {
// setCount(count - 1)
// }, [count])
// const incrementNumber = useCallback(() => {
// setNumber(number + 1)
// }, [number])

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// alert(funccount.size);
// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }
// export default Back;

import React, { useState} from 'react'
const funccount = new Set();
const Wback = () => {


const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)

const incrementCounter = () => {
	setCount(count + 1)
}
const decrementCounter = () => {
	setCount(count - 1)
}

const incrementNumber = () => {
	setNumber(number + 1)
}

funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);

return (
	<div>
	Count: {count}
	<button onClick={incrementCounter}>
		Increase counter
	</button>
	<button onClick={decrementCounter}>
		Decrease Counter
	</button>
	<button onClick={incrementNumber}>
		increase number
	</button>
	</div>
)
}


export default Wback;
