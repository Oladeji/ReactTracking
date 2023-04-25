export type DataElm={
name:string;
attr:string;
};

export type GlobalData={
    visitorId:string;
    timestamp:number;
    event:EvenType;
    domain:string;
    addContent?:string;
    userAgent:string;
    location:string;
    action :string
}
export type EvenType='onClick'|'onChange'|'onInit'|'onClose'

