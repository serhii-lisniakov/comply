import {useEffect, useState} from "react";
import {fetchFeed} from "../api/feed.js";

export const useFeed = () => {

    const [feed, setFeed] = useState();

    useEffect(() => {
        fetchFeed((feed) => {
            setFeed(feed);
        })
    }, [])

    return feed
}