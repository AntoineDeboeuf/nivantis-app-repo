import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => setCounter(counter + 1)
    const decrementCounter = () => setCounter(counter - 1)
    
    return (
        <div>
            counter : {counter}
            <Button variant="fab" color="primary" onClick={incrementCounter} disabled={counter >= 10}>
                +
            </Button>
            <Button variant="fab" color="primary" onClick={decrementCounter} disabled={counter <= 0}>
                -
            </Button>
        </div>
    )
}