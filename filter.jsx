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
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
                    />
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text"
                    id="city" 
                    name="city" 
                    placeholder="City Location" 
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