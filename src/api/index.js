export const BASE_URL = "https://strangers-things.herokuapp.com";
export const COHORT_NAME = "'2206-FTB-ET-WEB-FT'";

export const fetchAllPosts = async ()=>{
    // fetch(`${BASE_URL}/API/${COHORT_NAME}/posts'`)
    //   .then(response => response.json())
    //   .then(result => {
    //       console.log(result);
    //   })
    //   .catch(console.error);
    try {
        const response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/posts`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result;
    } catch (err) {
        console.error("error in fetchAllPosts", err);
    }
}


