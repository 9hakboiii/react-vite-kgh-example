import React, { Fragment, useState } from 'react'
import axios from 'axios'

const AxiosGetPage2 = () => {

    const [data, getDate] = useState(null)


    // 공공 데이터 open api를 axios 방식으로 가져오기
    // 아마 좀 더 만저봐야 할듯..
    const getApi = () => {
        axios.get('https://apis.data.go.kr/B553457/nopenapi/rest/publicperformancedisplays/realm?serviceKey=ByQxItdCkZw2Np%2BvG0THHfYRVobdbXiI%2B44369DbmYq6BnnrGcITzUj%2BTcAlmPylqJwM8%2FZyvFVJ2NEUbcpocA%3D%3D&PageNo=10&numOfrows=10')
            .then((response) => {
                console.log(response)
                getDate(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .then(() => {
                console.log('API Data Get')
            })
        }
    


    return (
        <Fragment>
            <div className='text-center mt-5'>
                <p>API 데이터 사이트</p>
                <hr />
                {
                    data && data.map((post, index) => (
                    <div key={index}>
                        <h3>serviceName: {post.serviceName}</h3>
                        <h3>title: {post.title}, place: {post.palce}</h3>
                        <h3>thumbnail: {post.thumbnail}</h3>
                        <hr />
                        <br />
                    </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default AxiosGetPage2