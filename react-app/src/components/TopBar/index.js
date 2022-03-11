import { useEffect, useState } from "react"
import { CarrotButtons } from "./CarrotButtons"
import { LoginMenu } from "./LoginMenu"


export const TopBar = () => {



    return (
        <>
            <div id="topbar">
                <CarrotButtons />
                <LoginMenu />
            </div>
        </>
    )
}
