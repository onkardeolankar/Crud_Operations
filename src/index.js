import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Editdetails from './Editdetails';
import reportWebVitals from './reportWebVitals';
import Studentdetail from './Studentdetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routes>
             <Route path='/' element={<App />}/>
             <Route path='/add' element={<Studentdetail/>}/>
             <Route path='/edit/:id' element={<Editdetails/>}/>
        </Routes>
    </BrowserRouter>
    
);

reportWebVitals();
