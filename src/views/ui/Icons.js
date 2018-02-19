import React, {Component} from 'react';

class Icons extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <h1 className="title">Font Awesome</h1>
            <h3 className="subtitle">
              <a href="https://fontawesome.com/icons?d=gallery">More  Examples</a>
            </h3>
            <div className="content">
              <p>
                <i className="fas fa-camera-retro"></i>
              </p>
              <p>
                <i className="fas fa-camera-retro fa-lg"></i>
                 fa-lg
              </p>
              <p>
                <i className="fa fa-camera-retro fa-2x"></i>
                 fa-2x
              </p>
              <p>
                <i className="fas fa-camera-retro fa-3x"></i>
                 fa-3x
              </p>
              <p>
                <i className="fas fa-camera-retro fa-4x"></i>
                 fa-4x
              </p>
              <p>
                <i className="fas fa-camera-retro fa-5x"></i>
                 fa-5x
              </p>
            </div>
          </article>
        </div>

         <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <h1 className="title">Material Design Icons</h1>
            <h3 className="subtitle">
              <a href="https://materialdesignicons.com">More Examples</a>
            </h3>
            <div className="content">
              <p>
                <i className="mdi mdi-face"></i>
              </p>
              <p>
                <i className="mdi mdi-face mdi-18px"></i> mdi-18px
              </p>
              <p>
                <i className="mdi mdi-face mdi-24px"></i> mdi-24px
              </p>
              <p>
                <i className="mdi mdi-face mdi-36px"></i> mdi-36px
              </p>
              <p>
                <i className="mdi mdi-face mdi-48px"></i> mdi-48px
              </p>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
export default Icons
