import { useEffect,useState } from "react";

// custom hook
function useCurrencyInfo(currency)
{
    const [data,setData] = useState({});
    useEffect(() => {
        // return values from api calls are usually in string data-type
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;