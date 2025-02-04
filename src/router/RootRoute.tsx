import { BrowserRouter, Route, Routes } from "react-router"
import Main from "../pages/Main"
import Channel from "../pages/Channel"
import Navigation from "./Navigation"

export const RootRouter = () => {
    return (
        <BrowserRouter>
             <Navigation />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/channel" element={<Channel />} />
            </Routes>
        </BrowserRouter>
    )
}