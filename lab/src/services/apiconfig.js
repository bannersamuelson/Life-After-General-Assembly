import axios from "axios"
const devProxy="https://secure-citadel-62036.herokuapp.com/"
const base=`${devProxy}https://secret-mesa-13283.herokuapp.com/api`
export const getAllUsers = ()=>
  axios({
    method:'get',
    url: `${base}/users`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("token"),
    },
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
  export const logOutUser = ()=>
  axios({
    method:'get',
    url: `${base}/logout`,
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });

  export const createUser = (props) =>
  axios({
    method: "post",
    url: `${base}/signup`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("token"),
    },
    data: props,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const loginUser = (props) =>
  axios({
    method: "post",
    url: `${base}/login`,
    headers: {"Access-Control-Allow-Origin": "*"},
    data: props,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const getCourse = (id) =>
    axios({
      method: "get",
      url: `${base}/course/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  
export const fetchAllCourses = () =>
   axios({
      method: "get",
     url: `${base}/courses`,
     headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("token"),
    },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
//What was I doing
// export const signUp = (props) =>
//       axios({
//          method: "post",
//         url: `${base}/signup`,
//         headers: {"Access-Control-Allow-Origin": "*"},
//          data: props,
//        })
//          .then((response) => {
//            return response.data;
//          })
//          .catch((error) => {
//            console.log(error);
//          });      
export const addCourse = (data) =>
      axios({
        method: "post",
        url: `${base}/addcourse`,
        headers: {"Access-Control-Allow-Origin": "*"},
        data: data,
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    
export const updateUser = (userName,data) =>
  axios({
    method: "put",
    url: `${base}update/${userName}`,
    data:data,
  }).then((response)=> {
    return response.data;
  }).catch((error) => {
    console.log(error);
  });

  export const getAllReviews = ()=>
  axios({
    method:'get',
    url: `${base}/reviews`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("token"),
    },
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });

  export const createReview = (data,id) =>
      axios({
        method: "post",
        url: `${base}/addreview/${data,id}`,
        headers: { "Access-Control-Allow-Origin": "*" },
        data:data,
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
