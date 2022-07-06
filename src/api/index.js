export const BASE_URL = "https://strangers-things.herokuapp.com";
export const COHORT_NAME = "'2206-FTB-ET-WEB-FT'";

export const fetchAllPosts = async ()=>{
   
    try {
        const response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/posts`);
        const result = await response.json();
        console.log("inside fetchAllPosts", result)
        return result;

    } catch (err) {
        console.error("error in fetchAllPosts", err);
    }

}


