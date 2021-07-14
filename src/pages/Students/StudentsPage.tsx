import React from 'react'
import axios from 'axios'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'

import StudentsTitle from './components/StudentsTitle'
import StudentsFields from './components/StudentsFields'
import SearchAndSort from './components/SearchAndSort'
import Student from './components/Student'
import { studentProps } from './components/Student/Student'
// import * as SC from './styled'


const StudentsPage = () => {
    const [students, setStudents] = React.useState([])
    React.useEffect(() => {
        axios.get('https://front-assignment-api.2tapp.cc/api/persons').then(({ data }) => {
            setStudents(data)
        })
    //     fetch('https://front-assignment-api.2tapp.cc/api/persons')
    // .then(resp => resp.json())
    // .then((json) => {
    //     console.log(json.students)
    //   arr = json.students
    // //   setStudents(json.students)
    //   console.log(arr)
      
    // })
    }, [])
    
    return (
        <MainLayout>
            <Container>
                <StudentsTitle/>
                <SearchAndSort/>
                <StudentsFields/>
                {students &&
                students.map((student: studentProps) => <Student key={student.id} {...student}/>)}
            </Container>
        </MainLayout>
        )
    
    
}

export default StudentsPage
