type TRem = {
    value: number;
    standardValue?: number;
}

export const rem = ({value, standardValue = 14}:TRem)=> {
    let remSize = null;

    remSize = value / standardValue;
    return remSize;
}