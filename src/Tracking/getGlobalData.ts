import { EvenType, GlobalData } from "../TrackedEvents/types";

export const getGlobaldata=(event:EvenType,action:string,addContent :string):GlobalData=>
{

    const visitorId = (Math.random()*100000).toString();
    const timestamp =new Date().getTime();

    const domain=window.location.origin;

    const userAgent=window.navigator.userAgent;
    const location = window.location.pathname;
    return {visitorId,timestamp,event,domain,addContent,userAgent,location,action}
}