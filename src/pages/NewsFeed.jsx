import {useFeed} from "../hooks/useFeed.jsx";

export const NewsFeedPage = () => {
    const feed = useFeed(null);

    if (!feed) {
        return <p>Loading...</p>;
    }

    return <div>
        <h2 className="text-lg font-bold tracking-wide mb-6 sm:mt-3">News</h2>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-1">
            {feed.items
                .sort((a,b) => parseDateString(b.pubDate) - parseDateString(a.pubDate) > 0 ? 1 : -1)
                .map((item) => (
                    <div key={item.id} className="card border border-gray-200 rounded-lg shadow p-6">
                        <h2 className="font-extrabold mb-2 normal-case">{item.title}</h2>
                        <p className="mb-4 font-normal text-gray-500 text-xs">
                            <span>{item.category}</span> | <span>{item.pubDate}</span>
                        </p>
                        <p className="my-4 text-gray-500 text-xs">{item.description?.split('\n')[1]}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                           className="text-xs inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline">
                            Read more
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                ))}
        </div>
    </div>
};

function parseDateString(dateString) {
    const [datePart, timePart] = dateString.split(' - ');
    const [dayOfWeek, month, date, year] = datePart.split(' ').slice(0, 4);
    const [hour, minute] = timePart.split(':');

    // Map month names to month numbers
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthIndex = monthNames.indexOf(month);

    // Create the date object using individual components
    const dateObject = new Date(year, monthIndex, parseInt(date), parseInt(hour), parseInt(minute), 0);

    return dateObject;
}