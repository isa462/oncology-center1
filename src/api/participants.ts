import  api  from "./axios";

export const getParticipants = async (page: number) => {
    const { data } = await api.get(`/participants?page=${page}`);
    return data;
};

export const deleteParticipant = async (id: string) => {
    return api.delete(`/participants/${id}`);
};
