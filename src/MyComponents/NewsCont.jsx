import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from 'prop-types';
export default class NewsCont extends Component {
  static defaultProp = {
    category:"politics",
    pageSize: PropTypes.number
  }
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 20,
    };
    document.title = `Newzz - Top ${this.capitalizeWord(this.props.category)} Headlines`
  }
  capitalizeWord(word) {
    if (word.length === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  
  async pageUpdate(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=21ae8852aaf14d6faf5a7af5859eb22f&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=21ae8852aaf14d6faf5a7af5859eb22f&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrev = async () => {
    this.setState(this.state.page-1);
    this.pageUpdate();
  };
  handleNext = async () => {
    this.setState(this.state.page+1);
    this.pageUpdate();
  };
  render() {
    return (
      <>
        <div className="container">
          <h2
            className="text-center mt-4"
            style={{
            fontFamily: "'Poppins', sans-serif",
            }}
          >
        Top {this.capitalizeWord(this.props.category)} Headlines!
          </h2>
          {this.state.loading && <Loading />}
          {/* IF LOADING IS TRUE, COMPONENT LOADING WOULD BE DISPLAYED */}
          <div className="row" style={{ margin: "0" }}>
            {!this.state.loading &&
              this.state.articles.map((e) => {
                return (
                  <>
                    <div className="col-md-4" key={e.url}>
                      <Newsitem
                        title={e.title}
                        //   change the card as such they hold a fix space
                        description={e.description}
                        img={
                          !e.urlToImage
                            ? "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg?w=1060&t=st=1676906561~exp=1676907161~hmac=140f83ee651a7449a91e626d5a0df552f2f3e0322b111d2f143b60013fcbdbb4"
                            : e.urlToImage
                        }
                        url={e.url} author={e.author} date={e.publishedAt} source={e.source}
                      />
                    </div>
                  </>
                );
              })}
          </div>
          {/* Prev and Next BuTTONS */}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
// style={{outline:"1px solid black"}}
//   // select the form element by its ID
//     let myForm = document.getElementById("search");

// listen for the form's submit event

//     myForm.addEventListener("submit", async (event)=> {
//     event.preventDefault();
//     let nameValue = myForm.elements["inp-search"].value;
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${nameValue}&apiKey=21ae8852aaf14d6faf5a7af5859eb22f`;
//     let data = await fetch (url);
//     let parsedData = await data.json();
//     this.setState({articles: parsedData.articles})
//     // prevent the form from submitting
// });
