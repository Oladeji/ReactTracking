import { DATA_ONCLICK } from "../TrackedEvents/dataattributes"
import { sendTrackingData } from "../TrackedEvents/sendTrackingData"
import { getGlobaldata } from "../Tracking/getGlobalData"
import { getTrackingAttribute } from "./helpers"

export const onClickListener =()=>{

    window.addEventListener('click',(e) => {

        const isTracked = getTrackingAttribute(e.target,DATA_ONCLICK)

        console.log(isTracked)
        if(isTracked)
        {        
            const jsondata ={ 'name':'Manish','Work':'Senior Dev'}
            const  addContent=JSON.stringify(jsondata);
            let data = getGlobaldata('onClick',DATA_ONCLICK.attr,addContent)
            console.log(data)
            sendTrackingData(data)
            console.log(`I am  tracking ${data}`)
        }
        else
        alert("I am presseed, But can send nothing tracking data") 



    })


}