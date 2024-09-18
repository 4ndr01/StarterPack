import {createContext} from "react";

export const GetApiContext = createContext(null);

export default function GetApiProvider(props) {
    return (
        <GetApiContext.Provider
            value={{
                getTags: API.getTags,
            }}>
            {props.children}
        </GetApiContext.Provider>
    );
}
const API_ENDPOINT = "bonjour"
const API = {
    getTags: async () => {
        const header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(`${API_ENDPOINT}/tag`, header);
        const data = await response.json();
        return data;
    },
}

