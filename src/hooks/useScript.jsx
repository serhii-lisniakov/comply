import {useEffect, useState} from "react";
import loadJs from 'loadjs';

export const useScript = url => {
    const [script, setScript] = useState(null);

    useEffect(() => {

        loadJs(url, {
            success: () => {
                // setScript(true)
            },
            async: true
        });

    }, [url, script]);
};
