const {default:axios}=require("axios");

export const BASE_URL="https://linkedinclone-2z9g.onrender.com/"
export const clientServer=axios.create({
    baseURL:BASE_URL
})