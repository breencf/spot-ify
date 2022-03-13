import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { CarrotButtons } from "./CarrotButtons"
import { LoginMenu } from "./LoginMenu"
import Search from "./search/Search"


export const TopBar = () => {



    return (
        <>
            <div id="topbar">
                <div className="left-side-top">
                    <CarrotButtons />
                    <Route path='/search'>
                        <Search />
                    </Route>
                </div>
                <LoginMenu />
            </div>
        </>
    )
}
