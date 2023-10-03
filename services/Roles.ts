import Http from 'libs/Http';

export const GetRoles = async (params) => {
    try {
        const response = await Http.get('/roles', {
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