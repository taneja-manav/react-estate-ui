import { useState } from 'react';
import './searchbar.scss';

const types=["buy","rent"];

function SearchBar(){
    const[query,setQuery]=useState({
        type:"buy",
        locaton:"",
        minprice:0,
        maxprice:0,

    });

    const switchtype =(val)=>{
        setQuery((perv)=>({...pre,type:val}));

    };
    return(
        <div className="searchbar">
            <div className="type">
                {types.map((type)=>(
                    <button
                     key= {type} 
                     onClick={()=>switchtype(type)} 
                     className={query.type ==type ? "active" : ""}>
                        {type}
                        </button>
                ))}
                
                </div>
            <form>
                <input
                type="text"
                 name='location' 
                 placeholder="city location"
                 />
                <input 
                type="number"
                 name='minprice'
                  min={0} max={10000000}
                   placeholder="Min Price"
                   />
                <input 
                type="number" 
                name='maxprice' 
                min={0} max={10000000}
                 placeholder="Max Price"
                 />
                 <button>
                    <img src='./search.png' alt=''></img>
                 </button>
            </form>
            
        </div>
        )
}

export default SearchBar