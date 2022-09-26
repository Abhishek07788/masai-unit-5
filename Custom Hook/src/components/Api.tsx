import useApi from '../hooks/useApi'
import { getData,postData } from "../action"
import { useState } from 'react'

const Api = () => {

type Item = {
  id:number,
  message:string
}

const { loading, error, data, execute:E2} = useApi<Item[]>(getData)
const { loading: l2, error: e2, data: d2, execute} = useApi<Item>(postData, true)
const [value, setValue] = useState<string>("")
console.log('value: ', value);

const handleADD = () =>{
  execute(value)
  getData()
  execute:E2()
  setValue("")
}

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Add Something..' />
        <button onClick={handleADD}>ADD</button>
        {(loading || l2) && <h1>Loading...</h1>}
        {(error || e2) && <h1>Server Error...</h1>}
          {data?.map((item:Item)=>(
            <div key={item.id}>
            <h2 >{item.id} - {item.message}</h2>
            </div>
          ))}
    </div>
  )
}

export default Api