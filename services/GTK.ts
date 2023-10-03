import Http from 'libs/Http';
interface userParams {
    page: number
    pageSize: number
}

export const GetGTK = async (params) => {
    try {
        const { page, pageSize, ...restParams } = params
        const response = await Http.get('/users', {
            params: {
                page: page + 1,
                perPage: pageSize,
                ...restParams,
            }
        })

        return response.data
    } catch (error) {
        return error
    }
}
export const GetGTKById = async (id) => {
    try {
        const response = await Http.get(`/users/${id}`)

        return response
    } catch (error) {
        return error
    }
}

export const PostGTK = async (data) => {
    try {
        const response = await Http.post('/users', data)

        return response.data
    } catch (error) {
        return error
    }
}

export const PatchGTK = async (id, data) => {
    try {
        const response = await Http.patch(`/users/${id}`, data)

        return response.data
    } catch (error) {
        return error
    }
}

export const DeleteGTK = async (id) => {
    try {
        const response = await Http.delete(`/users/${id}`)

        return response.data
    } catch (error) {
        return error
    }
}