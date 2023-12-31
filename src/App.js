import "./App.css";

import React, { useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

const App =()=> {
  const pageSize = 6;
  const apiKey = "439e9a15017940949d81fb8631a3a0fe";
  // apiKey=process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0)
  
   
 
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <NavBar />
          <Routes>
            <Route
              path='/JASOOS'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  pageSize={pageSize}
                  country='in'
                  category='general'
                />
              }
            />
            <Route
              exact
              path='/business'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='business'
                  pageSize={pageSize}
                  country='in'
                  category='business'
                />
              }
            />
            <Route
              exact
              path='/entertainment'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='entertainment'
                  pageSize={pageSize}
                  country='in'
                  category='entertainment'
                />
              }
            />
            <Route
              exact
              path='/general'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='general'
                  pageSize={pageSize}
                  country='in'
                  category='general'
                />
              }
            />
            <Route
              exact
              path='/health'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='health'
                  pageSize={pageSize}
                  country='in'
                  category='health'
                />
              }
            />
            <Route
              exact
              path='/science'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='science'
                  pageSize={pageSize}
                  country='in'
                  category='science'
                />
              }
            />
            <Route
              exact
              path='/sports'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='sports'
                  pageSize={pageSize}
                  country='in'
                  category='sports'
                />
              }
            />
            <Route
              exact
              path='/technology'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='technology'
                  pageSize={pageSize}
                  country='in'
                  category='technology'
                />
              }
            />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;


// import "./App.css";

// import React, { Component } from "react";
// import NavBar from "./components/NavBar";
// import News from "./components/News";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// import About from "./components/About";

// export default class App extends Component {
//   pageSize = 6;
//   apiKey = "439e9a15017940949d81fb8631a3a0fe";
//   // apiKey=process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0,
//   };
//   setProgress = (progress) => {
//     setState({ progress: progress });
//   };

//   render() {
//     return (
//       <div>
//         <Router>
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={progress}
//           />
//           <NavBar />
//           <Routes>
//             <Route
//               path='/'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   pageSize={pageSize}
//                   country='in'
//                   category='general'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/business'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='business'
//                   pageSize={pageSize}
//                   country='in'
//                   category='business'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/entertainment'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='entertainment'
//                   pageSize={pageSize}
//                   country='in'
//                   category='entertainment'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/general'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='general'
//                   pageSize={pageSize}
//                   country='in'
//                   category='general'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/health'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='health'
//                   pageSize={pageSize}
//                   country='in'
//                   category='health'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/science'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='science'
//                   pageSize={pageSize}
//                   country='in'
//                   category='science'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/sports'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='sports'
//                   pageSize={pageSize}
//                   country='in'
//                   category='sports'
//                 />
//               }
//             />
//             <Route
//               exact
//               path='/technology'
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apiKey={apiKey}
//                   key='technology'
//                   pageSize={pageSize}
//                   country='in'
//                   category='technology'
//                 />
//               }
//             />
//             <Route exact path='/about' element={<About />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
