import  api  from "./axios";

export const getThesis = async (page: number) => {
    const { data } = await api.get(`/thesis?page=${page}`);
    return data;
};

export const deleteThesis = async (id: string) => {
    return api.delete(`/thesis/${id}`);
};
