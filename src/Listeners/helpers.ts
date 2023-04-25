import { DataElm } from "../TrackedEvents/types";

export const getTrackingAttribute =(e:any,type:DataElm)=>
{

    let dataValue = e.dataset[type.name];

    if (dataValue===undefined){
        const closest = e.closest(`[${type.attr}]`)
        console.log(`The is the close   is ${closest}`)
        if( closest!== null)
        {
                dataValue = closest.dataset[type.name];
        }
    }
        return dataValue;
}