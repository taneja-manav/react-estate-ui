import "./filter.scss"

function Filter(){
    return (
        <div className="filter">
            <h1>
                Search result for <b>london</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
                    />
                </div>
                <div className="bottom">
                <div className="item">
                    <label htmlFor="type">type</label>
                   <select name ="type" id="type">
                    <option value="any">Any</option>
                    <option value="buy">buy</option>
                    <option value="rent">rent</option>
                   </select>
                </div>
                <div className="item">
                    <label htmlFor="property">property</label>
                    <select name ="property" id="property">
                    <option value="any">any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">house</option>
                    <option value="condo">condo</option>
                    <option value="land">land</option>
                   </select>
                </div>
                <div className="item">
                    <label htmlFor="minprice">Minprice</label>
                    <input 
                    type="number"
                    id="minprice" 
                    name="minprice" 
                    placeholder="any" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxprice">maxprice</label>
                    <input 
                    type="number"
                    id="maxprice" 
                    name="maxprice" 
                    placeholder="any" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">bedroom</label>
                    <input 
                    type="text"
                    id="bedroom" 
                    name="bedroom" 
                    placeholder="any" 
                    />
                </div>
                <button>
                    <img src="./search.png" alt=" "/>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Filter