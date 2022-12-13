import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root  = ReactDOM.createRoot(document.getElementById('subContain'));

if(window.location.pathname === '/page1'){
import('./page1').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}
else if(window.location.pathname === '/page2'){
import('./page2').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}
else if(window.location.pathname === '/page3'){
import('./page3').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}
else if(window.location.pathname === '/page4'){
import('./page4').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}
else if(window.location.pathname === '/page5'){
import('./page5').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}
else if(window.location.pathname === '/page6'){
    import('./page6').then(Res=>{
    root.render(
    <Res.default />
    );   
})
}    


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

