import React, {Component} from 'react'

import Chart from 'react-bulma-chartjs';

export default class Chartjs extends Component {
  state = {
    labels: [
      'Sleeping', 'Designing', 'Coding', 'Cycling'
    ],
    data: [
      20, 40, 5, 35
    ],
    options: {
      segmentShowStroke: false
    },
    backgroundColor: [
      '#1fc8db', '#fce473', '#42afe3', '#ed6c63', '#97cd76'
    ],

    labels_2: [
      'April',
      'May',
      'June',
      'Jule',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    data_2: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),
    labels_3: [
      'May',
      'June',
      'Jule',
      'August',
      'September',
      'October',
      'November'
    ],
    data_3: [
      [
        65,
        59,
        90,
        81,
        56,
        55,
        40
      ],
      [
        28,
        48,
        40,
        19,
        88,
        27,
        45
      ]
    ],
    options_3: {
      tooltips: {
        mode: 'label'
      }
    },
    backgroundColor_3: [
      'rgba(31, 200, 219, 1)', 'rgba(151, 205, 118, 1)'
    ],
    series: ['Product A', 'Product B']
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.onChangeData()
    }, 377)
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onChangeData () {
    let data = [...this.state.data_2]
    data.unshift(data.pop())
    this.setState({
      data_2: data
    })
  }

  pieData () {
    return {
      labels: this.state.labels,
      datasets: [{
        data: this.state.data,
        backgroundColor: this.state.backgroundColor
      }]
    }
  }

  waveData () {
    return {
      labels: this.state.labels_2,
      datasets: [{
        label: 'My Radar',
        data: this.state.data_2,
        backgroundColor: this.state.backgroundColor[0]
      }
      ]
    }
  }

  seriesData () {
    let data = {
      labels: this.state.labels_3
    }
    data.datasets = this.state.series.map((e, i) => {
      return {
        data: this.state.data_3[i],
        label: this.state.series[i],
        borderColor: this.state.backgroundColor_3[i].replace(/1\)$/, '.5)'),
        pointBackgroundColor: this.state.backgroundColor_3[i],
        backgroundColor: this.state.backgroundColor_3[i].replace(/1\)$/, '.5)')
      }
    })
    return data
  }

  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">PIE</h4>
              <Chart type={'pie'} data={this.pieData()} options={this.state.options}></Chart>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">DOUGHNUT</h4>
              <Chart type={'doughnut'} data={this.pieData()} options={this.state.options}></Chart>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">POLAR</h4>
              <Chart type={'polarArea'} data={this.pieData()} options={this.state.options}></Chart>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <h4 className="title">ANIMATED RADAR</h4>
              <Chart type={'radar'} data={this.waveData()} options={this.state.options}></Chart>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <h4 className="title" >ANIMATED BARS</h4>
              <Chart type={'bar'} data={this.waveData()}
                width={300} height={150} options={this.state.options}></Chart>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">RADAR</h4>
              <Chart type={'radar'} data={this.seriesData()} options={this.state.options_3}></Chart>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">LINE</h4>
              <Chart type={'line'} data={this.seriesData()}
                width={300} height={150} options={this.state.options_3}></Chart>
            </article>
          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <h4 className="title">BARS</h4>
              <Chart type={'bar'} data={this.seriesData()}
                width={300} height={150} options={this.state.options_3}></Chart>
            </article>
          </div>
        </div>
      </div>
    )
  }
}
