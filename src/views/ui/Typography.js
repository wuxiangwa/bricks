import React, {Component} from 'react'

class Typography extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <article className="tile is-child box">
            <h1 className="title">Title</h1>
            <h2 className="subtitle">Subtitle</h2>
          </article>
        </div>

        <div className="tile is-parent is-3">
          <article className="tile is-child box">
            <p className="title is-1">Title 1</p>
            <p className="title is-2">Title 2</p>
            <p className="title is-3">Title 3 (default size)</p>
            <p className="title is-4">Title 4</p>
            <p className="title is-5">Title 5</p>
            <p className="title is-6">Title 6</p>
          </article>
        </div>

        <div className="tile is-parent is-3">
          <article className="tile is-child box">
            <p className="subtitle is-1">Subtitle 1</p>
            <p className="subtitle is-2">Subtitle 2</p>
            <p className="subtitle is-3">Subtitle 2</p>
            <p className="subtitle is-4">Subtitle 4</p>
            <p className="subtitle is-5">Subtitle 5 (default size)</p>
            <p className="subtitle is-6">Subtitle 6</p>
          </article>
        </div>

        <div className="tile is-parent is-3">
          <article className="tile is-child box">
            <div className="block">
              <p className="title is-1">Title 1</p>
              <p className="subtitle is-3">Subtitle 3</p>
            </div>
            <div className="block">
              <p className="title is-2">Title 2</p>
              <p className="subtitle is-4">Subtitle 4</p>
            </div>
            <div className="block">
              <p className="title is-3">Title 3</p>
              <p className="subtitle is-5">Subtitle 5</p>
            </div>


          </article>
        </div>
      </div>
    )
  }
}

export default Typography
