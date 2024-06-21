import {useScript} from "../hooks/useScript.jsx";

export const Alerts = () => {
    useScript('js/base/alert.js');
    useScript('js/external/prism.js');

    return <div className="bg-gray-100 flex-1 md:mt-6">

        <h1 className="h5">alerts</h1>
        <p>Use cleopatra custom alerts styles for actions , notifcations etc.</p>
        <p>so far there's just 3 type of alerts feel free to submit a pull request</p>

        <hr className="my-5"/>

        <div className="card">

            <div className="card-header">
                simple alert - you can always use <span className="badge badge-primary">.alert</span> class along
                with <span className="badge badge-primary">.alert-(type)</span>
            </div>

            <div className="card-body">

                <div className="alert mb-5">
                    A simple alert it out!!
                </div>

                <div className="alert alert-default mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-light mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-dark mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-success mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-error">
                    A simple alert it out!
                </div>

            </div>

            {/*<div className="card-footer">*/}
            {/*    <script type="text/plain" className="language-html">*/}
            {/*        <div className="alert mb-5">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}

            {/*        <div className="alert alert-default mb-5">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}

            {/*        <div className="alert alert-light mb-5">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}

            {/*        <div className="alert alert-dark mb-5">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}

            {/*        <div className="alert alert-success mb-5">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}

            {/*        <div className="alert alert-error">*/}
            {/*            A simple alert it out!*/}
            {/*        </div>*/}
            {/*    </script>*/}
            {/*</div>*/}
        </div>

        <div className="card mt-5">

            <div className="card-header">
                simple alert - you can always use <span className="badge badge-primary">.alert</span> class along
                with <span className="badge badge-primary">.alert-(type)</span>
            </div>

            <div className="card-body">

                <div className="alert mb-5">
                    A simple alert it out!!
                </div>

                <div className="alert alert-default mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-light mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-dark mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-success mb-5">
                    A simple alert it out!
                </div>

                <div className="alert alert-error">
                    A simple alert it out!
                </div>

            </div>

            <div className="card-footer">
                {/*<script type="text/plain" className="language-html">*/}
                {/*    <div className="alert mb-5">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-default mb-5">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-light mb-5">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-dark mb-5">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-success mb-5">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-error">*/}
                {/*        A simple alert it out!*/}
                {/*    </div>*/}
                {/*</script>*/}
            </div>
        </div>

        <div className="card mt-5">

            <div className="card-header">
                any <span className="badge badge-primary">a tag</span> inside alert will have font <span
                className="badge badge-primary">font-weight: 900</span>
            </div>

            <div className="card-body">

                <div className="alert mb-5">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

                <div className="alert alert-default mb-5">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

                <div className="alert alert-light mb-5">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

                <div className="alert alert-dark mb-5">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

                <div className="alert alert-success mb-5">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

                <div className="alert alert-error">
                    a simple alert it out! with <a href="#">alert link</a> click it now.
                </div>

            </div>

            <div className="card-footer">
                {/*<script type="text/plain" className="lang-html">*/}

                {/*    <div className="alert mb-5">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-default mb-5">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-light mb-5">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-dark mb-5">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-success mb-5">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-error">*/}
                {/*        a simple alert it out! with*/}
                {/*        <a href="#">alert link</a>*/}
                {/*        click it now.*/}
                {/*    </div>*/}

                {/*</script>*/}
            </div>

        </div>

        <div className="card mt-5">

            <div className="card-header">
                Dismissing alert using simple function to dismiss alert ,
                alert will take class animated & fadeOut and elemnt will be removed <br/>
                for more check <span className="badge badge-primary">alert.js</span>
                you have to follow the same structure
            </div>

            <div className="card-body">

                <div className="alert mb-5 alert-close">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

                <div className="alert alert-default alert-close mb-5">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

                <div className="alert alert-light alert-close mb-5">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

                <div className="alert alert-dark alert-close mb-5">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

                <div className="alert alert-success alert-close mb-5">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

                <div className="alert alert-error alert-close">
                    <button className="alert-btn-close"><i className="fad fa-times"></i></button>
                    <span>A simple alert it out!</span>
                </div>

            </div>

            <div className="card-footer">
                {/*<script type="text/plain" className="language-html">*/}
                {/*    <div className="alert mb-5 alert-close">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-default alert-close mb-5">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-light alert-close mb-5">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-dark alert-close mb-5">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-success alert-close mb-5">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}

                {/*    <div className="alert alert-error alert-close">*/}
                {/*        <button className="alert-btn-close">*/}
                {/*            <i className="fad fa-times"></i>*/}
                {/*        </button>*/}
                {/*        <span>A simple alert it out!</span>*/}
                {/*    </div>*/}
                {/*</script>*/}
            </div>
        </div>

    </div>
}