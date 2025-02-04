import React from "react";
import { StdButton } from "./ButtonStyle";
import { ButtonProps } from "@radix-ui/themes";

interface IButton {
    children: React.ReactNode;
    //우리만에 타입 설정
}

export const Button = ({ ...props }: IButton & ButtonProps) => {
    return (
        <StdButton size={props.size} {...props}>
            {props.children}
        </StdButton>
    )
}