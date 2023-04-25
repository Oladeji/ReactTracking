import { DATA_ONCHANGE } from "../TrackedEvents/dataattributes"
import { getTrackingAttribute } from "./helpers"

export const onChangeListener =()=>{

    window.addEventListener('change',(e) => {
       const isTracked = getTrackingAttribute(e.target,DATA_ONCHANGE)
       console.log(isTracked)
        console.log("I am pressed for changing")
        console.log(e)
        alert("I am presseed for chaging sending tracking data")


    })


}