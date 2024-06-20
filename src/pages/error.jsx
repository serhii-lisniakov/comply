import {Link} from "react-router-dom";

export default function ErrorPage() {

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>This page does not exist</p>
            <Link to="/">
                <button className="btn-bs-primary mr-6 lg:mr-0 lg:mb-6">Go back to the homepage</button>
            </Link>
        </div>
    );
}