import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '40px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
// import React, { Component } from "react";

// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

// // import PropTypes from 'prop-types'

// const News=()=> {
 
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   constructor(props) {
//     super(props);
//     // console.log("hello i am a constuctor from news component");
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults:0
     
//     };
//     document.title = `JASSOS-${this.capitalizeFirstLetter(
//       this.props.category
//     )}`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
    
//     this.props.setProgress(70);

//     this.setState({
//       articles:this.state.articles.concat(parsedData.articles) ,
//       totalResults: parsedData.totalResults,
//        loading: false,
      
//     });
//     this.props.setProgress(100)
//   }
//   async componentDidMount() {
//     this.updateNews();
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac5091cd54c3460397a79f8135cc3861&page=1&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // // console.log(parsedData);
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//   }

//   /* handleNextClick = async () => {
//     if (
//       !(
//         this.state.page + 1 >
//         Math.ceil(this.state.totalResults / this.props.pageSize)
//       )
//     ) {
//       let url = `https://newsapi.org/v2/top-headlines?country=${
//         this.props.country
//       }&category=${
//         this.props.category
//       }&apiKey=ac5091cd54c3460397a79f8135cc3861&page=${
//         this.state.page + 1
//       }&pageSize=${this.props.pageSize}`;

//       this.setState({ loading: true });

//       let data = await fetch(url);
//       let parsedData = await data.json();

//       this.setState({
//         page: this.state.page + 1,
//         articles: parsedData.articles,
//         loading: false,
//       });
//     }
//     // this.setState({page:this.state.page + 1})
//     // this.updateNews()
//   };
//   handlePrevClick = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=ac5091cd54c3460397a79f8135cc3861&page=${
//       this.state.page - 1
//     }&pageSize=${this.props.pageSize}`;

//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       page: this.state.page - 1,
//       articles: parsedData.articles,
//       loading: false,
//     });
//     // this.setState({page:this.state.page - 1})
//     // this.updateNews()
//   }; */
//  fetchMoreData = async () => {
//     // this.setState({page:this.state.page+1})
//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac5091cd54c3460397a79f8135cc3861&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // this.setState({
//     //   articles: this.state.articles.concat(parsedData.articles),
//     //   totalResults: parsedData.totalResults,
    
      
      
//     // })
//     if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//       this.setState(
//       (prevState) => ({
//       page: prevState.page + 1,
//       }),
//       () => {
//       this.updateNews();
//       }
//       );
//       }
  
//   };

//   render() {
//     return (
//       <>
        
//           <h1 className='text-center' style={{ margin: "40px 0px" }}>
//             JASOOS- Top {this.capitalizeFirstLetter(this.props.category)}{" "}
//             Headlines
//           </h1>

//           {/* {this.state.loading && <Spinner />} */}

//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={ this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner/>}>

//               <div className="container">

             
              
//             <div className='row'>
//               {
//                 /* !this.state.loading && */
//                 this.state.articles.map((element) => {
//                   return (
//                     <div className='col-md-4' key={element.url}>
//                       <NewsItem
//                         title={element.title ? element.title : ""}
//                         description={
//                           element.description ? element.description : ""
//                         }
//                         newsUrl={element.url}
//                         imageUrl={element.urlToImage}
//                         author={element.author}
//                         date={element.publishedAt}
//                         source={element.source.name}
//                       />
//                     </div>
//                   );
//                 })
//               }
//             </div>
//             </div>
//           </InfiniteScroll>
//           {/* <div className='container d-flex justify-content-between'>
//             <button
//               disabled={this.state.page <= 1}
//               type='button'
//               class='btn btn-dark'
//               onClick={this.handlePrevClick}>
//               &larr; Previous
//             </button>
//             <button
//               disabled={
//                 this.state.page + 1 >
//                 Math.ceil(this.state.totalResults / this.props.pageSize)
//               }
//               type='button'
//               class='btn btn-dark'
//               onClick={this.handleNextClick}>
//               Next &rarr;
//             </button>
//           </div> */}
        
//       </>
//     );
//   }
// }

// export default News;

