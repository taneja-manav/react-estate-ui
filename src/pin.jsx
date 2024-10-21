import "./pin.scss"
import { Marker,Popup } from "react-leaflet"

function Pin({item}) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
               
            </Popup>
        </Marker>
    );
}

export default Pin