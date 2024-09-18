import {createContext} from "react";

export const GetApiContext = createContext(null);

export default function GetApiProvider(props) {
    return (
        <GetApiContext.Provider
            value={{
                getJsp: API.getJsp,
            }}>
            {props.children}
        </GetApiContext.Provider>
    );
}
const API_ENDPOINT = "bonjour"
const API = {
    getJsp: async () => {
        const header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(`${API_ENDPOINT}/`, header);
        const data = await response.json();
        return data;
    },
}

