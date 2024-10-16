import "./homepage.scss"
import SearchBar from "./searchbar"

function HomePage(){
    return(
        <div className="homepage">
            <div className="textcontainer">
                <div className="wrapper">
                <h1 className="title">FIND REAL ESTATE & Get Your Dream Place</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iure ipsam fuga officia ipsa dolorum reprehenderit libero voluptatibus quo, pariatur labore alias soluta saepe cupiditate laborum perspiciatis in sed mollitia?</p>
                 <SearchBar/>
                 <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>years of experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>awards gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>properties ready</h2>
                    </div>

                 </div>
                 </div>
            </div>

            <div className="imgcontainer">
                <img src="/bg.png" alt=""/>
            </div>

        </div>
    )
}

export default HomePage