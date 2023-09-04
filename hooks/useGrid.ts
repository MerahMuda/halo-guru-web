import { useEffect, useState } from "react"

interface UseGridProps {
    apiCall: any
    setPagination?(): void
    defaultPageSize: number
}
interface PaginationModel {
    page: number
    pageSize: number
}
interface Meta {
    page: number
    totalPage: number
    totalRows: number
}
const useGrid = <Type>(params: UseGridProps) => {
    const { defaultPageSize, apiCall } = params
    const [dataRows, setDataRows] = useState<Type[]>([])
    const [meta, setMeta] = useState<Meta>({
        totalRows: 0,
        totalPage: 0,
        page: 0
    })
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [paginationModel, setPaginationModel] = useState<PaginationModel>({
        page: 0, pageSize: defaultPageSize
    })

    const fetchData = async () => {
        try {
            setIsLoading(true);
            // fetchData containing page and pageSize of pagination Model
            // { page, pageSize }
            const response = await apiCall(paginationModel);
            setDataRows(response.data as Type[])
            setMeta({
                page: paginationModel.page,
                totalPage: response.total / paginationModel.pageSize,
                totalRows: response.total
            } as Meta)
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [paginationModel])

    return {
        rows: dataRows,
        meta,
        isLoading,
        paginationModel,
        setPaginationModel
    }
}

export default useGrid;