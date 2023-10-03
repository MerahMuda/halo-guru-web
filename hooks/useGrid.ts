import { GridFilterModel } from "@mui/x-data-grid"
import { useCallback, useEffect, useState } from "react"

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
    const [filterParams, setFilterParams] = useState({});
    const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });

    const onFilterChange = useCallback((filterModel: GridFilterModel) => {
        // Here you save the data you need from the filter model
        // setQueryOptions({ filterModel: { ...filterModel } });
        const filter = {};
        filterModel?.items.forEach((params: any) => {
            filter[params.field] = {}
            filter[params.field]["eq"] = params.value
        })
        setFilterModel(filterModel);
        setFilterParams({ filter });
    }, []);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            // fetchData containing page and pageSize of pagination Model
            // { page, pageSize }
            const response = await apiCall({ ...paginationModel, ...filterParams });
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
    }, [paginationModel, filterParams])

    const resetFilter = useCallback(() => {
        setFilterParams({})
        setFilterModel({ items: [] })
    }, [])

    useEffect(() => {
        fetchData()
    }, [paginationModel])

    return {
        rows: dataRows,
        fetchData,
        meta,
        isLoading,
        paginationModel,
        filterModel,
        setPaginationModel,
        onFilterChange,
        resetFilter,
    }
}

export default useGrid;