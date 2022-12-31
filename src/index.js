import React  from 'react'; 
import ReactDOM from 'react-dom'; 
 import App from './App';
 import { BrowserRouter } from 'react-router-dom';
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(

    <>
<BrowserRouter>
<App/>
</BrowserRouter>

</>,

document.getElementById("root"));