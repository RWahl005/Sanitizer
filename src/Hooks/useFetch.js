import {
    useState,
    useEffect
} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            reload ? setLoading(true) : setLoading(false);
            setReload(false)
        }
        fetchData();
    }, [url, reload])
    return {
        data,
        loading,
        setReload
    };
}
export default useFetch;