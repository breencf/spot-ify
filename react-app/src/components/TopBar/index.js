import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { CarrotButtons } from "./CarrotButtons"
import { LibraryTabs } from "./LibraryTabs"
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
                    <Route path='/:userId/library'>
                        <LibraryTabs />
                    </Route>
                </div>
                <LoginMenu />
            </div>
        </>
    )
}
