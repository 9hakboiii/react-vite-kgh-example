import axios from 'axios'

// 동기 통신 방법
const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //console.log(response);
    return response.data
  } catch (error) {
    console.log('Error >>', error)
  }
}

const getUser2 = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //console.log(response);
    return response.data
  } catch (error) {
    console.log('Error >>', error)
  }
}

export default { getUsers, getUser2 }