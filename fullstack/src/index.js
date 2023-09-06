// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Hello(props){
//   return <h1>Hello World</h1>
// }
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Hello/>);


// import React from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   return(
//     <div>
//       <h1>Hello React</h1>
//       <p>This is a P</p>
//     </div>
//   );
// }
// ReactDOM.render(<App />,document.getElementById('root'));



// import React from 'react'
// import ReactDOM from "react-dom";

// export const App = () => {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <form>
//         UserNmae: <input type="text" />
//         Password: <input type="password" />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// }
// ReactDOM.render(<App />,document.getElementById('root'));


// import React from 'react'
// import ReactDOM from "react-dom";

// export const App = () => {
//   const username = "NithisKumar";
//   return (
//     <div>
//       <h1>My Name:{username} i'm programmer</h1>
//       <h3>{new Date().toLocaleDateString()}</h3>
//     </div>
//   );
// }
// ReactDOM.render(<App />,document.getElementById('root'));



// import React from 'react'
// import ReactDOM from "react-dom";

//  const App = () => {
//   const h1 = '<strong> This is<em>HTML</em>Markup.</strong>';
//   return (
//    <div dangerouslySetInnerHTML={{__html:h1}}/>
//   );
// }
// ReactDOM.render(<App />,document.getElementById('root'));




// import React from 'react';
// import ReactDOM from 'react-dom/client'

// const myelem = <h1>Welcome to JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelem);

//Expression in JSX

// import React from 'react';
// import ReactDOM from 'react-dom/client'

// const myelem = <h1>Welcome to you{100+100}</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelem);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myelem = {
//   <form>
//           UserNmae: <input type="text" />
//           Password: <input type="password" />
//           <input type="submit" value="Login" />
//         </form>
// }

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const my1 = {

// }

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// class Sample extends React.Component{
//   render(){
//     return <h1>Welcome</h1>
//   }
// }
// const c1 = document.getElementById('root');
// const root = ReactDOM.createRoot(c1)
// root.render(<Sample/>);

//Function Component

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Sample(props){
//   return <h2>Welcome to the {props.a1} function component</h2> 
// }
// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample a1="$goodboyz"/>)




//  import React from 'react';
//  import ReactDOM from 'react-dom/client';
//  import Sample from './Smaple';

//  const r1 = ReactDOM.createRoot(document.getElementById('root'));
//  r1.render(<Sample/>);



//COMPONENT CONSTRUCTOR

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Sample extends React.Component{
//   constructor(){
//     super();
//     this.state = {c1:"welcome"}
//   }render(){
//     return <h2>I am in sample component</h2>
//   }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample/>);



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Sample extends React.Component {
//   constructor(){
//     super();
//     this.state = {a1:"welcome"}
//   }render(){
//     return <h2>I am {this.state.a1} component </h2>
//   }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample/>);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);