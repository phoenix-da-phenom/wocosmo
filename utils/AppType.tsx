import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
export  type typeContainer={
    key: number
    srcImage : string;
    description : string;
    price: number;
    hndClick?: MouseEventHandler<HTMLDivElement>;
}