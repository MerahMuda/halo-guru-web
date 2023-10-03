import { useState, useEffect, useCallback } from 'react'

type APIProps = {
    fetching: boolean
    api?(): any
    apiPost?(data: any): any
}

type LoadingState = "loading" | "done" | "failed" | 'idle'

const useApi = (options: APIProps) => {
    const {
        api, apiPost
    } = options;
    const [data, setData] = useState<any>([])
    const [error, setError] = useState<any>()
    const [loadingStatus, setLoading] = useState<LoadingState>("idle")

    const fetch = useCallback(async () => {
        setLoading("loading")
        try {
            const response = await api();
            setData(response.data)
            setLoading("done")
        } catch (incomingError) {
            setError(incomingError)
            setLoading("failed")
        }
    }, [api])

    const post = useCallback(async (data) => {
        setLoading("loading")
        try {
            const response = await apiPost(data);
            setData(response.data)
            setLoading("done")
        } catch (incomingError) {
            setError(incomingError)
            setLoading("failed")
        }
    }, [apiPost])

    useEffect(() => {
        if (options.fetching) {
            fetch()
        }
    }, [options.fetching])

    return { data, loadingStatus, fetch, post, error, isLoading: loadingStatus === "loading" }
}

export default useApi
