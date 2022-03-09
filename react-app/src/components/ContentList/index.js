import { useEffect } from "react"
import { ContentCard } from "./ContentCard"
import "./ContentList.css"

export const ContentList = ({ array, heading }) => {

    useEffect(() => {
        console.log('-------------', array)
    }, [array])

    return (
        <>
            <h2>{heading}</h2>
            <div className="content-list">
                {array?.map(content => {
                    return (
                        <ContentCard key={content.id} content={content} heading={heading} />
                    )
                })}
            </div>
        </>
    )
}
