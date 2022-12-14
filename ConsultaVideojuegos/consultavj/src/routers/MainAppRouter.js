import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom"; 
import { LoginScreen } from '../componentes/Login/LoginScreen';
import { LoginPage } from '../hooks/context/LoginPage';
import { AppRouter } from './AppRouter';
//import { Navbar } from '../common/Navbar';

export const MainAppRouter = () => { 
    return ( 
 
        <Router> 
            <div> 
                <Routes> 
                    <Route exact path="/login" element={<LoginPage/>} /> 
                    <Route 
                        path="*" 
                        element={<AppRouter/>} 
                    />    
                </Routes> 
            </div> 
        </Router> 
    ) 
}