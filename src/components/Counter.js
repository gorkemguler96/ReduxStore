import {useState} from 'react';
import  {useSelector,useDispatch} from "react-redux";
import {arttır,azalt,incrementByAmount} from '../redux/counter/counterSlice'

function Counter(props) {
    const countValue = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const [amount,setAmount] = useState(3)

    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={()=>dispatch(azalt())}>Azalt</button>
            <button onClick={()=>dispatch(arttır())}>Arttır</button>

            <br/>
            <br/>
            <input type="number" value={amount} onChange={((e)=>setAmount(e.target.value))}/>
            <button onClick={()=>dispatch(incrementByAmount(amount))}>Arttır</button>

        </div>
    );
}

export default Counter;
