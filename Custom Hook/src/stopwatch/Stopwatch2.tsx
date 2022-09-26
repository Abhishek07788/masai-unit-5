import useCountdown from '../hooks/useCountdown'

const Stopwatch2 = () => {

    const {start, pause, reset, time} = useCountdown(5)
    
  return (
    <div>
        <h1>My Stopwatch: {time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch2