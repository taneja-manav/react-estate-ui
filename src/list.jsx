import './list.scss'
import Card from"./card.jsx"
import {listData} from"./dummydata"

function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List