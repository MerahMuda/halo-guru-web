import Http from 'libs/Http';

export const AuthLogin = async (data) => {
    try {
        const response = await Http.post('/auth/login', data)

        return response.data
    } catch (error) {
        return error
    }
}