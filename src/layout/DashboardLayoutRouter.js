import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './DashboardLayout'


const DashboardLayoutRouter = ({element: Element, ...rest}) => {
    return (
     
             <Route 
                 {...rest} render={props => {
                    
                         return(
                                <DashboardLayout>
                                <Element {...props} />
                                </DashboardLayout>
                         )
                 }
                    
                   }

             />
      
    )
}

export default DashboardLayoutRouter
