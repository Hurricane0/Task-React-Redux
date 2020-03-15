import React, { useEffect } from "react";
import { connect } from "react-redux";
import News from "../components/News";
import { getNews } from "../redux/newsReducer";

const NewsContainer = ({ data, getNews, isFetchingNews }) => {
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);
  return <News data={data} isFetchingNews={isFetchingNews} />;
};
const mapStateToProps = state => ({
  data: state.news.newsData,
  isFetchingNews: state.news.isFetchingNews
});
//Try to place it in connect
const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews())
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
