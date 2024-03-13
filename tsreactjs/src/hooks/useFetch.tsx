import { useState, useEffect } from "react";
interface ApiResponse {
    results: any[];
    count: number;
    previous: any;
    next: string;
}
const useFetch = (url = "http://www.abc.cd/test") => {
    const [data, setData] = useState<ApiResponse | null>(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((responseData) => {
                setData(responseData); // Set the entire API response here
            });
    }, [url]);
    return { data };
};

export default useFetch;
