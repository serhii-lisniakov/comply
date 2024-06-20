import {useEffect, useState} from "react";

export const useScript = url => {
    const [script, setScript] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = false;

        document.body.appendChild(script);
        setScript(true)

        return () => {
            document.body.removeChild(script);
        }
    }, [url, script]);
};
