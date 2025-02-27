import React, { use, useState } from 'react'

const GradeInputPage2 = () => {


  // const [kor, setKor] = useState(0);
  // const [eng, setEng] = useState(0);
  // const [math, setMath] = useState(0);
  // const [name, setName] = useState('');

  const [grade, setGrade] = useState({
    name: '',
    kor: 0,
    eng: 0,
    math: 0
  })

  const onChange = (event) => {
    const {name, value} = event.target // event 객체를 name과 value로 객체 분할함.

    setGrade({
      ...grade, // 객체 복사 (스프레드 연산자 사용)
      [name]: value
    })
  }

  // 다중 입력 
  return (
    <div>
      이름 : <input name="name" onChange={onChange} value={grade.name} /><br></br>
      국어 : <input name="kor" onChange={onChange} value={grade.kor} /><br></br>
      영어 : <input name="eng" onChange={onChange} value={grade.eng} /><br></br>
      수학 : <input name="math" onChange={onChange} value={grade.math} /><br></br>
      <div>
        <div>이름:{String(grade.name)}</div>
        <div>총점:{Number(grade.kor) + Number(grade.eng) + Number(grade.math)}</div>
        <div>평균:{(Number(grade.kor) + Number(grade.eng) + Number(grade.math)) / 3.0}</div>
      </div>
    </div>
  )
}

export default GradeInputPage2