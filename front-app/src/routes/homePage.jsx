import {useContext, useEffect, useState} from "react";
import {GetApiContext} from "../context/apiCalls/getApiCalls";

export default function HomePage() {
    const [test, setTest] = useState()
    const getApiContext = useContext(GetApiContext);
    useEffect(() => {
        getApiContext.getJsp().then((data) => {
            setTest(data);
        });
    }, []);
    return (
        <div>
            <h1>{test}</h1>
        </div>
    );
}