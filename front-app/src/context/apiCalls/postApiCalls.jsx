
import { createContext } from "react";

export const PostApiContext = createContext(null);

export default function PostApiProvider(props) {

    return (
        <PostApiContext.Provider
            value={{
                createActivity: API.createActivity,
            }}>
            {props.children}
        </PostApiContext.Provider>
    );
}

const API_ENDPOINT = "bonjour"

const API = {
    createActivity: async (data) => {
        try {
            const response = await fetch(
                `${API_ENDPOINT}/activity/createActivity`,
                {
                    method: "POST",
                    body: data,
                }
            );

            if (!response.ok) {
                throw new Error("Failed to upload file");
            }

            return await response.json();

        } catch (error) {
            console.error("Error:", error);
        }

    },
}
