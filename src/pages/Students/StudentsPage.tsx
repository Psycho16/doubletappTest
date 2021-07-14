import React, {FC} from 'react'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'

import StudentsTitle from './components/StudentsTitle'
import StudentsFields from './components/StudentsFields'
import SearchAndSort from './components/SearchAndSort'
// import * as SC from './styled'


const StudentsPage = () => {
    return (
        <MainLayout>
         <Container>
             <StudentsTitle/>
             <SearchAndSort/>
             <StudentsFields/>
        </Container>
    </MainLayout>
        )
    
    
}

export default StudentsPage
