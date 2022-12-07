import * as httpRequest from '../untils/httpRequest';

export const search = async (q) => {
    try {
        const res = await httpRequest.get('', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
