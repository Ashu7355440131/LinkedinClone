const {default:axios}=require("axios");

export const BASE_URL="https://linkedinclone-1-eziu.onrender.com"
export const clientServer=axios.create({
    baseURL:BASE_URL
})