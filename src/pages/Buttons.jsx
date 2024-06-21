import {useScript} from "../hooks/useScript.jsx";

export const Buttons = () => {
    useScript('js/external/prism.js');

    return <div className="bg-gray-100 flex-1 md:mt-16">

        <h1 className="h5">Buttons</h1>
        <p>Use cleopatra custom button styles for actions in forms, dialogs, and more with support for multiple sizes,
            states, and more.</p>

        <hr className="my-5"/>
        <div className="card">
            <div className="card-body grid grid-cols-6 lg:grid-cols-1">

                <a href="#" className="btn mr-6 lg:mr-0 lg:mb-6"> default button</a>
                <a href="#" className="btn-shadow mr-6 lg:mr-0 lg:mb-6">shaow button</a>
                <a href="#" className="btn-indigo mr-6 lg:mr-0 lg:mb-6">indigo button</a>
                <a href="#" className="btn-info mr-6 lg:mr-0 lg:mb-6">indigo button</a>
                <a href="#" className="btn-danger mr-6 lg:mr-0 lg:mb-6">indigo button</a>
                <a href="#" className="btn-gray lg:mb-6">gray button</a>
            </div>

            {/*<div className="card-footer">*/}
            {/*    <script type="text/plain" className="language-html">*/}
            {/*        <a href="#" className="btn"> default button</a>*/}
            {/*        <a href="#" className="btn-shadow">shaow button</a>*/}
            {/*        <a href="#" className="btn-indigo">indigo button</a>*/}
            {/*        <a href="#" className="btn-info">indigo button</a>*/}
            {/*        <a href="#" className="btn-danger">indigo button</a>*/}
            {/*        <a href="#" className="btn-gray">gray button</a>*/}
            {/*    </script>*/}
            {/*</div>*/}
        </div>
        <div className="card mt-6">
            <div className="card-body grid grid-cols-6 lg:grid-cols-1">

                <a href="#" className="btn-bs-dark mr-6 lg:mr-0 lg:mb-6"> dark</a>
                <a href="#" className="btn-bs-primary mr-6 lg:mr-0 lg:mb-6">primary</a>
                <a href="#" className="btn-bs-secondary mr-6 lg:mr-0 lg:mb-6">Secondary</a>
                <a href="#" className="btn-bs-success mr-6 lg:mr-0 lg:mb-6">Success</a>
                <a href="#" className="btn-bs-danger mr-6 lg:mr-0 lg:mb-6">Danger</a>
                <a href="#" className="btn-bs-info lg:mb-6">info </a>
            </div>

            {/*<div className="card-footer">*/}
            {/*    <script type="text/plain" className="language-html">*/}
            {/*        <a href="#" className="btn-bs-dark"> dark button</a>*/}
            {/*        <a href="#" className="btn-bs-primary">primary button</a>*/}
            {/*        <a href="#" className="btn-bs-secondary">Secondary button</a>*/}
            {/*        <a href="#" className="btn-bs-success">Success button</a>*/}
            {/*        <a href="#" className="btn-bs-danger">Danger button</a>*/}
            {/*        <a href="#" className="btn-bs-info">info button</a>*/}
            {/*    </script>*/}
            {/*</div>*/}
        </div>


    </div>
}