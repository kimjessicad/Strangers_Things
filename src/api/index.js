export const BASE_URL = "https://strangers-things.herokuapp.com";
export const COHORT_NAME = "2206-FTB-ET-WEB-FT";

export const fetchAllPosts = async (isLoggedIn) => {
  try {
    let response = "";
    if (!isLoggedIn) {
      response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/posts`);
    } else {
      response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
    } //end of else block
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("error in fetchAllPosts", err);
  }
};

export async function registerPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
  try {
    const response = await fetch(
      `${BASE_URL}/API/${COHORT_NAME}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: registerUsername,
            password: registerPassword,
          },
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    alert("Registration was unsuccessful");
    console.error(error);
  }
}

//return object from api

export async function login(event) {
  const LoginUsername = event.target[0].value;
  const LoginPassword = event.target[1].value;
  try {
    const response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: LoginUsername,
          password: LoginPassword,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    localStorage.setItem("token", token);
    const tokenFromStorage = localStorage.getItem("token");
    return token;
  } catch (error) {
    alert("Your login attempt was unsuccessful");
    console.error(error, "this is the error from login");
  }
}

export async function getProfile(token) {
  try {
    const response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    const data = result.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createNewPost(postObj, token) {
  try {
    const response = await fetch(`${BASE_URL}/API/${COHORT_NAME}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: postObj.title,
          description: postObj.description,
          price: postObj.price,
          location: postObj.location,
          willDeliver: postObj.willDeliver,
        },
      }),
    });
  } catch (error) {
    console.error(error);
  }
  const result = await response.json();
  return result;
}

export const deletePost = async (token, postID) => {
  try {
    const response = await fetch(
      `${BASE_URL}/API/${COHORT_NAME}/posts/${postID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
  const result = await response.json();
};

export const sendNewMessage = async (message, postId, token) => {
  const response = await fetch(
    `${BASE_URL}/API/${COHORT_NAME}/posts/${postId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
    })
    .catch(console.error);
};

export const updatePost = async (postId, postObj) => {
  try {
    console.log(postObj,postId)
    const response = fetch(`${BASE_URL}/API/${COHORT_NAME}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        post: postObj,
      }),
    });
    result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
