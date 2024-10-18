import { listData } from "./dummydata";
import "./listpage.scss"
import Filter from "./filter.jsx"
import Card from "./card.jsx"

function ListPage(){
    const data =listData;
    return (
        <div className="list-page">
        <div className="listcontainer">
            <div className="wrapper">
                <Filter/>
                {data.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>

        </div>
        <div className="mapcontainer">map</div>
        </div>
    );
}

export default ListPage
