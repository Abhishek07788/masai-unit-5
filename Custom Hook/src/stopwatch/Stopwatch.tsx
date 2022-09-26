import useCountdown from '../hooks/useCountdown'

const Stopwatch = () => {

    const {start, pause, reset, time} = useCountdown(10)
    
  return (
    <div>
        <h1>My Stopwatch1: {time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch