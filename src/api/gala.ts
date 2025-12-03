import  api  from "./axios";

export const getGala = async (page: number) => {
    const { data } = await api.get(`/gala?page=${page}`);
    return data;
};

export const deleteGala = async (id: string) => {
    return api.delete(`/gala/${id}`);
};
