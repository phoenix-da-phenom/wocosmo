import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
export  type typeContainer={
    key: number
    srcImage : string;
    description : string;
    price: number;
    hndClick?: MouseEventHandler<HTMLDivElement>;
}

export type offBadgeProps={
    text: string;
    color: string
}
export type sizeBadgeProps={
    text:string;
    color:string;
}