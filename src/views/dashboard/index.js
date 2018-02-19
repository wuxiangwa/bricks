import React, {Component} from 'react';
import Chart from 'react-bulma-chartjs';

class Dashboard extends Component {
  state = {
    data: {
      labels: [
        'Red', 'Green', 'Yellow'
      ],
      datasets: [
        {
          data: [
            300, 50, 100
          ],
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56'
          ],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    },
    options: {
      animateRotate: true
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.onChangeData()
    }, 1024)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  onChangeData() {
    this.setState({
      data: {
        labels: [
          'Red', 'Green', 'Yellow'
        ],
        datasets: [
          {
            data: [
              this.onData(), this.onData(), this.onData()
            ],
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    })
  }
  onData() {
    return Math.ceil(Math.random() * 1000)
  }

  render() {
    return (<div>
      <div className={"tile is-ancestor"}>
        <div className={"tile is-parent"}>
          <article className={"tile is-child box"}>
            <p className={"title"}>One</p>
            <p className={"subtitle"}>Subtitle</p>
          </article>
        </div>
        <div className={"tile is-parent"}>
          <article className={"tile is-child box"}>
            <p className={"title"}>Two</p>
            <p className={"subtitle"}>Subtitle</p>
          </article>
        </div>
        <div className={"tile is-parent"}>
          <article className={"tile is-child box"}>
            <p className={"title"}>Three</p>
            <p className={"subtitle"}>Subtitle</p>
          </article>
        </div>
        <div className={"tile is-parent"}>
          <article className={"tile is-child box"}>
            <p className={"title"}>Four</p>
            <p className={"subtitle"}>Subtitle</p>
          </article>
        </div>
      </div>

      <div className={"tile is-ancestor"}>
        <div className={"tile is-parent is-6"}>
          <article className={"tile is-child box"}>
            <h4 className={"title"} onClick={() => this.onChangeData()}>Five</h4>
            <div className={"content"}>
              <Chart type={'doughnut'} data={this.state.data} options={this.state.options}/>
            </div>
          </article>
        </div>
        <div className={"tile is-parent is-6"}>
          <article className={"tile is-child box"}>
            <h4 className={"title"}>Six</h4>
            <div className={"content"}>
              <Chart type={'pie'} data={this.state.data} options={this.state.options}/>
            </div>
          </article>
        </div>
      </div>

      <div className={"tile is-ancestor"}>
        <div className={"tile is-vertical is-9"}>
          <div className={"tile"}>
            <div className={"tile is-parent"}>
              <article className={"tile is-child box"}>
                <p className={"title"}>Seven</p>
                <p className={"subtitle"}>Subtitle</p>
                <div className={"content"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
            <div className={"tile is-8 is-parent"}>
              <article className={"tile is-child box"}>
                <p className={"title"}>Eight</p>
                <p className={"subtitle"}>Subtitle</p>
                <div className={"content"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
          <div className={"tile"}>
            <div className={"tile is-8 is-parent"}>
              <article className={"tile is-child box"}>
                <p className={"title"}>Nine</p>
                <p className={"subtitle"}>Subtitle</p>
                <div className={"content"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
            <div className={"tile is-parent"}>
              <article className={"tile is-child box"}>
                <p className={"title"}>Ten</p>
                <p className={"subtitle"}>Subtitle</p>
                <div className={"content"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className={"tile is-parent"}>
          <article className={"tile is-child box"}>
            <div className={"content"}>
              <p className={"title"}>Eleven</p>
              <p className={"subtitle"}>Subtitle</p>
              <div className={"content"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>)
  }
}

export default Dashboard
