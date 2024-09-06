import mainCaller from "./mainCaller";

export const getBoard = async (query) =>{
    return await mainCaller(`/boardInfo/search?${query}`, "GET" , null)
}