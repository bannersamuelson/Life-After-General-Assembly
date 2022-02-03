import axios from "axios"
const devProxy="https://secure-citadel-62036.herokuapp.com/"
const base=`${devProxy}https://secret-mesa-13283.herokuapp.com/api`
export const getAllUsers = ()=>
  axios({
    method:'get',
    url: `${base}/users`,
    headers: {"Access-Control-Allow-Origin": "*"},
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

export const getCourses = (id) =>
    axios({
      method: "get",
      url: `${base}/course/${id}`,
      headers: {"Access-Control-Allow-Origin": "*"},
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
     headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

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
export const addCourse = (user,id,data) =>
      axios({
        method: "post",
        url: `${base}/user/${user}/${id}/course`,
        headers: {"Access-Control-Allow-Origin": "*"},
        data: data,
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    