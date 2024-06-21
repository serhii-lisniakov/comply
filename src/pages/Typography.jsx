import {useScript} from "../hooks/useScript.jsx";

export const Typography = () => {
    useScript('js/external/prism.js');

    return <div className="bg-gray-100 flex-1 md:mt-16">

        <h1 className="h5">Typography</h1>
        <p className="mt-3">Documentation and examples for typography, including global settings, headings, body text,
            lists, and more.</p>
        <p>you can check the style at <span className="badge badge-primary">src/apply/_badge.sass</span></p>


        <hr className="my-5"/>

        <p className="mb-4">you can loop throw class h1 to h6 and use them on any HTML element</p>


        <div className="card">
            <div className="card-body">
                <h1 className="h1">h1 Cleopatra heading</h1>
                <h1 className="h2">h2 Cleopatra heading</h1>
                <h1 className="h3">h3 Cleopatra heading</h1>
                <h1 className="h4">h4 Cleopatra heading</h1>
                <h1 className="h5">h5 Cleopatra heading</h1>
                <h1 className="h6">h6 Cleopatra heading</h1>
            </div>
            {/*<div className="card-footer">*/}
            {/*    <script type="text/plain" className="language-markup">*/}
            {/*        <h1 className="h1">h1 Cleopatra heading</h1>*/}
            {/*        <h1 className="h2">h2 Cleopatra heading</h1>*/}
            {/*        <h1 className="h3">h3 Cleopatra heading</h1>*/}
            {/*        <h1 className="h4">h4 Cleopatra heading</h1>*/}
            {/*        <h1 className="h5">h5 Cleopatra heading</h1>*/}
            {/*        <h1 className="h6">h6 Cleopatra heading</h1>*/}
            {/*    </script>*/}
            {/*</div>*/}
        </div>


        <div className="card mt-5">
            <div className="card-body">
                <p className="h1">h1. Cleopatra heading</p>
                <p className="h2">h2. Cleopatra heading</p>
                <p className="h3">h3. Cleopatra heading</p>
                <p className="h4">h4. Cleopatra heading</p>
                <p className="h5">h5. Cleopatra heading</p>
                <p className="h6">h6. Cleopatra heading</p>
            </div>
            {/*<div className="card-footer">*/}
            {/*    <script type="text/plain" className="language-markup">*/}
            {/*        <p className="h1">h1. Cleopatra heading</p>*/}
            {/*        <p className="h2">h2. Cleopatra heading</p>*/}
            {/*        <p className="h3">h3. Cleopatra heading</p>*/}
            {/*        <p className="h4">h4. Cleopatra heading</p>*/}
            {/*        <p className="h5">h5. Cleopatra heading</p>*/}
            {/*        <p className="h6">h6. Cleopatra heading</p>*/}
            {/*    </script>*/}
            {/*</div>*/}
        </div>

    </div>
}