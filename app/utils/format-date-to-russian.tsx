export const formatDateToRussian = (date: Date) => {
    return new Date(date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};
