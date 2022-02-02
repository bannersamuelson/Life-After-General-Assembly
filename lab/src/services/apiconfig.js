import axios from "axios"
const base="https://secret-mesa-13283.herokuapp.com/api"
export const getAllUsers = ()=>
  axios({
    method:'get',
    url: `${base}/users`,
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
    url: `${base}/users/signup`,
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
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      
      
export const addCourse = (props) =>
      axios({
        method: "post",
        url: `${base}/user/${props.userName}/${props.id}/course`,
        data: props,
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    