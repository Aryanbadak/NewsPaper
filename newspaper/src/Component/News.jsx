import React, { Component } from 'react'
import Itemnews from './Itemnews'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 0
    }
    document.title = this.capitalizeFirstLetter(`${this.props.category} - NewsPaper`)

  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(30)
    let parseData = await data.json()
    this.props.setProgress(50)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false })
  }

  render() {
    return (
      <div>
        <div className='container pt-lg-5  pt-0'>
          <h1 className='pt-sm-5 text-center setMg'>NewsPaper - Top {this.props.category} Headlines</h1>
          <InfiniteScroll className='overflow-visible'
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Loader />}
            endMessage={<p style={{ textAlign: 'center', color: 'green' }}><b>Yay! You've seen it all!</b></p>}
            scrollableTarget="scrollableDiv">
            <div className='row pb-5 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3'>
              {
                this.state.articles.map((element) => {
                  return <div className='col' key={element.url}>
                    <Itemnews title={element.title ? element.title.slice(0, 50) : ''} description={element.description ? element.description.slice(0, 70) : 'Sorry do not have details about this news'} imgurl={element.urlToImage} date={element.publishedAt} url={element.url ? element.url : ''} source={element.source.name} />
                  </div>
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

