import Http from 'libs/Http';
interface userParams {
    page: number
    pageSize: number
}

export const GetGTK = async (params) => {
    try {
        const response = await Http.get('/users', {
            params: {
                page: params.page + 1,
                perPage: params.pageSize
            }
        })

        return response.data
    } catch (error) {
        return error
    }
}