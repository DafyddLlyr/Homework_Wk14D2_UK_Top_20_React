import React, {Component} from 'react';
import Song from '../components/Song'

class TopTwenty extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chart: null
    }
    this.getChart = this.getChart.bind(this)
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(result => this.setState({ chart: result.feed }))
    .catch(err => console.error(err));
  }

  getChart() {
    let chartSongs = []
    if(this.state.chart) {
      this.state.chart.entry.map((entry, index) => {
        return chartSongs.push(
          <Song entry={entry} key={index} index={index} />);
      })
    }
    return chartSongs;
  }

  render() {

    return (
      <>
        {this.getChart()}
      </>
    )
  }
}

export default TopTwenty;
