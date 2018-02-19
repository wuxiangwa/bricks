import React, {Component} from 'react'
import './buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div className="button-component">
        <div className={"tile is-ancestor"}>
          <div className={"tile is-parent is-4"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>Options</h1>
              <div className={"bd-snippet-preview "}>
                <button className={'button'}>Button</button>
                <button className={"button is-white"}>White</button>
                <button className={"button is-light"}>Light</button>
                <button className={"button is-dark"}>Dark</button>
                <button className={"button is-black"}>Black</button>
                <button className={"button is-link"}>Link</button>
              </div>
              <div className={"block"}>
                <button className={"button is-primary"}>Primary</button>
                <button className={"button is-info"}>Info</button>
                <button className={"button is-success"}>Success</button>
                <button className={"button is-warning"}>Warning</button>
                <button className={"button is-danger"}>Danger</button>
              </div>
            </article>
          </div>

          <div className={"tile is-parent is-4"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>Sizes</h1>
              <a className={"button is-small"}>Small</a>
              <a className={"button"}>Normal</a>
              <a className={"button is-medium"}>Medium</a>
              <a className={"button is-large"}>Large</a>
            </article>
          </div>

          <div className={"tile is-parent is-4"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>Styles</h1>
              <div className={"block"}>
                <h2 className={"subtitle"}>Outlined</h2>
                <a className={"button is-outlined"}>Outlined</a>
                <a className={"button is-primary is-outlined"}>Outlined</a>
                <a className={"button is-info is-outlined"}>Outlined</a>
                <a className={"button is-success is-outlined"}>Outlined</a>
                <a className={"button is-danger is-outlined"}>Outlined</a>
              </div>
              <h2 className={"subtitle"}>Inverted (the text color becomes the background color, and vice-versa)</h2>
              <div className={"notification is-primary"}>
                <a className={"button is-primary is-inverted"}>Inverted</a>
                <a className={"button is-info is-inverted"}>Inverted</a>
                <a className={"button is-success is-inverted"}>Inverted</a>
                <a className={"button is-danger is-inverted"}>Inverted</a>
              </div>
            </article>
          </div>
        </div>

        <div className={"tile is-ancestor"}>
          <div className={"tile is-parent"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>States</h1>
              <div className={"columns"}>
                <div className={"column"}>
                  <h2 className={"subtitle"}>Loading</h2>
                  <a className={"button is-loading"}>Loading</a>
                  <a className={"button is-primary is-loading"}>Loading</a>
                  <a className={"button is-info is-loading"}>Loading</a>
                  <a className={"button is-success is-loading"}>Loading</a>
                  <a className={"button is-warning is-loading"}>Loading</a>
                  <a className={"button is-danger is-loading"}>Loading</a>
                </div>
                <div className={"column"}>
                  <h2 className={"subtitle"}>Active</h2>
                  <a className={"button is-active"}>Active</a>
                  <a className={"button is-primary is-active"}>Active</a>
                  <a className={"button is-info is-active"}>Active</a>
                  <a className={"button is-success is-active"}>Active</a>
                  <a className={"button is-warning is-active"}>Active</a>
                  <a className={"button is-danger is-active"}>Active</a>
                </div>
                <div className={"column"}>
                  <h2 className={"subtitle"}>Disabled</h2>
                  <a className={"button is-disabled"}>Disabled</a>
                  <a className={"button is-primary is-disabled"}>Disabled</a>
                  <a className={"button is-info is-disabled"}>Disabled</a>
                  <a className={"button is-success is-disabled"}>Disabled</a>
                  <a className={"button is-warning is-disabled"}>Disabled</a>
                  <a className={"button is-danger is-disabled"}>Disabled</a>
                </div>
                <div className={"column"}>
                  <h2 className={"subtitle"}>With Font Awesome icons</h2>
                  <a className={"button"}>
                    <span className={"icon"}>
                      <i className={"fab fa-github"}></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                  <a className={"button is-primary"}>
                    <span className={"icon"}>
                      <i className={"fab fa-twitter"}></i>
                    </span>
                    <span>Twitter</span>
                  </a>
                  <a className={"button is-success"}>
                    <span className={"icon"}>
                      <i className={"fa fa-check"}></i>
                    </span>
                    <span>Save</span>
                  </a>
                  <a className={"button is-danger"}>
                    <span>Delete</span>
                    <span className={"icon"}>
                      <i className={"fa fa-times"}></i>
                    </span>
                  </a>
                  <a className={"button is-danger is-outlined"}>
                    <span className={"icon"}>
                      <i className={"fa fa-times"}></i>
                    </span>
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className={"tile is-ancestor"}>
          <div className={"tile is-parent"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>Button group</h1>
              <h2 className={"subtitle"}>If you want to group buttons together, use the is-grouped modifier on the control container:</h2>
              <div className={"field is-grouped"}>
                <p className={"control"}>
                  <a className={"button is-link"}>
                    Save changes
                  </a>
                </p>
                <p className={"control"}>
                  <a className={"button"}>
                    Cancel
                  </a>
                </p>
                <p className={"control"}>
                  <a className={"button is-danger"}>
                    Delete post
                  </a>
                </p>
              </div>
            </article>
          </div>
          <div className={"tile is-parent"}>
            <article className={"tile is-child box"}>
              <h1 className={"title"}>Button addons</h1>
              <h2 className={"subtitle"}>If you want to use buttons as addons, use the has-addons modifier on the control container:</h2>
              <p className={"control has-addons"}>
                <a className={"button"}>
                  <span className={"icon is-small"}>
                    <i className={"fa fa-align-left"}></i>
                  </span>
                  <span>Left</span>
                </a>
                <a className={"button"}>
                  <span className={"icon is-small"}>
                    <i className={"fa fa-align-center"}></i>
                  </span>
                  <span>Center</span>
                </a>
                <a className={"button"}>
                  <span className={"icon is-small"}>
                    <i className={"fa fa-align-right"}></i>
                  </span>
                  <span>Right</span>
                </a>
              </p>
            </article>
          </div>
        </div>
      </div>
    )
  }
}
export default Buttons
