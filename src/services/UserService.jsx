import axios from "axios";

const getUsers = async () => {

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    //console.log(response);
    return response.data;

  } catch (error) {
    console.log('Error >>', error);
  }
};

const getUsers2 = async () => {

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
  
      //console.log(response);
      return response.data;
  
    } catch (error) {
      console.log('Error >>', error);
    }
  };

// es6에선 { 객체명 : 객체명 } 객체명이 같을 경우 하나 생략 가능 => { 객체명 }
export default {getUsers, getUsers2}