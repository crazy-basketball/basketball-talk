import { ReactNode } from "react";
import { StdButton } from "./ButtonStyle";
import { ButtonProps } from "@radix-ui/themes";

type ButtonType = {
  children: ReactNode;
  //우리만에 타입 설정
};

export const Button = ({ ...props }: ButtonType & ButtonProps) => {
  return (
    <StdButton size={props.size} {...props}>
      {props.children}
    </StdButton>
  );
};
