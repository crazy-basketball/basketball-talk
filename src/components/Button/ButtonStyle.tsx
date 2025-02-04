import styled from "styled-components";
import { Button } from "@radix-ui/themes";
/*
    radix의 props로 정의된 스타일보다
    styled내부의 스타일이 우선순위가 높다
*/
const StdButton = styled(Button)`
    cursor: pointer;
    width: 100%;
    background-color: orange;
`;

export {StdButton}