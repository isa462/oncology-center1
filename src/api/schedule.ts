import  api  from "./axios";

export const getSchedule = async () => {
    const { data } = await api.get(`/schedule`);
    return data;
};

export const uploadSchedule = async (form: FormData) => {
    const { data } = await api.post(`/schedule`, form);
    return data;
};

export const deleteSchedule = async (id: string) => {
    return api.delete(`/schedule/${id}`);
};
