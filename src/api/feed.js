import {parseString} from "xml2js";
import sortBy from "lodash.sortby";

const cors = "https://cors.eu.org/";
const url = "fca.org.uk/news/rss.xml";

export const fetchFeed = async (callback) => {
    const res = await fetch(cors + url);
    const text = await res.text();

    parseString(text, (err, res) => {
        const feed = res.rss.channel[0];

        callback({
            title: feed.title[0],
            link: feed.link[0],
            items: mapItems(feed.item)
        });
    });
};

const mapItems = (items) => {
    return sortBy(items.map(i => ({
        category: i.category[0],
        creator: i["dc:creator"][0],
        description: i.description[0],
        id: i.guid[0]._,
        link: i.link[0],
        pubDate: i.pubDate[0],
        title: i.title[0]
    })), i => parseDateString(i.pubDate)).reverse();
};

function parseDateString(dateString) {
    const [datePart, timePart] = dateString.split(" - ");
    const [dayOfWeek, month, date, year] = datePart.split(" ");
    const [hour, minute] = timePart.split(":");
    const dateObject = new Date(`${month} ${date}, ${year} ${hour}:${minute}:00`);
    return dateObject;
}