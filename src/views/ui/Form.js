import React, {Component} from 'react'
import './form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box ">
              <h1 className="title">Controls</h1>
              <div className="block">
                <div className="field">
                  <label className="label">Name</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Username</label>
                  <p className="control has-icon has-icon-right">
                    <input className="input is-success" type="text" placeholder="Text input"/>
                    <span className="icon is-small">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="help is-success">This username is available</span>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <p className="control has-icon has-icon-right">
                    <input className="input is-danger" type="text" placeholder="Email input"/>
                    <span className="icon is-small">
                      <i className="fa fa-warning"></i>
                    </span>
                    <span className="help is-danger">This email is invalid</span>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Subject</label>
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <p className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <label className="checkbox">
                      <input type="checkbox"/>
                        Remember me
                    </label>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <label className="radio">
                      <input type="radio" name="question"/>
                      Yes
                    </label>
                    <label className="radio">
                      <input type="radio" name="question"/>
                      No
                    </label>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary">Submit</a>
                  </p>
                  <p className="control">
                    <a className="button is-link">Cancel</a>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="tile is-parent is-5 is-vertical">
            <article className="tile is-child box">
              <h1 className="title">Colors</h1>
              <div className="block">
                <div className="field">
                  <p className="control">
                    <input className="input is-primary" type="text" placeholder="Primary input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-info" type="text" placeholder="Info input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-success" type="text" placeholder="Success input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-warning" type="text" placeholder="Warning input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-danger" type="text" placeholder="Danger input"/>
                  </p>
                </div>
              </div>
            </article>
            <article className="tile is-child box">
              <h1 className="title">Sizes</h1>
              <div className="block">
                <div className="field">
                  <p className="control">
                    <input className="input is-small" type="text" placeholder="Small input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" placeholder="Normal input"/>
                  </p>
                </div>
                <div className="field">
                <p className="control">
                  <input className="input is-medium" type="text" placeholder="Medium input"/>
                </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-large" type="text" placeholder="Large input"/>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="tile is-parent">
            <article className="tile is-child box">
              <h1 className="title">States</h1>
              <div className="block">
                <h2 className="subtitle">Loading</h2>
                <div className="field">
                  <p className="control is-loading">
                    <input className="input" type="text" placeholder="Loading input"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-loading">
                    <textarea className="textarea" placeholder="Loading textarea"></textarea>
                  </p>
                </div>
              </div>
              <div className="block">
                <h2 className="subtitle">Disabled</h2>
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" placeholder="Disabled input" disabled="disabled"/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Disabled textarea" disabled="disabled"></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="checkbox is-disabled">
                      <input type="checkbox" disabled="disabled"/>
                      Remember me
                    </label>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="radio is-disabled">
                      <input type="radio" name="question" disabled="disabled"/>
                      Yes
                    </label>
                    <label className="radio is-disabled">
                      <input type="radio" name="question" disabled="disabled"/>
                      No
                    </label>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary">Submit</a>
                  </p>
                  <p className="control">
                    <a className="button is-link" disabled="disabled">Cancel</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent is-3">
            <article className="tile is-child box">
              <h1 className="title">With Icon</h1>
              <h2 className="subtitle">
                <a href="http://fontawesome.io/">Font Awesome Icons</a>
              </h2>
              <div className="block">
                <div className="field">
                  <p className="control has-icon">
                    <input className="input" type="email" placeholder="Email"/>
                    <span className="icon is-small">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icon">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success">
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <h1 className="title">Addons</h1>
              <div className="block">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="text" placeholder="Find a repository" />
                  </div>
                  <div className="control">
                    <a className="button is-info">
                      Search
                    </a>
                  </div>
                </div>

                <div className="field has-addons">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                    </span>
                  </p>
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Expanded"/>
                  </p>
                  <p className="control">
                    <a className="button is-success">
                      Transfer
                    </a>
                  </p>
                </div>

                <div className="field has-addons has-addons-centered">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input className="input" type="text" placeholder="Centered"/>
                  </p>
                  <p className="control">
                    <a className="button is-success">
                      Transfer
                    </a>
                  </p>
                </div>
                <div className="field has-addons has-addons-right">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input className="input" type="text" placeholder="Pull right"/>
                  </p>
                  <p className="control">
                    <a className="button is-success">
                      Transfer
                    </a>
                  </p>
                </div>

                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Expanded and Grouped"/>
                  </p>
                  <p className="control">
                    <a className="button is-info">
                      Search
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <h1 className="title">Horizontal form</h1>
              <div className="block">
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">From</label>
                  </div>

                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Name" />
                        <span className="icon is-small is-left">
                          <i className="fa fa-user"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input is-success" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label"></div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <a className="button is-static">
                            +44
                          </a>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" type="tel" placeholder="Your phone number" />
                        </p>
                      </div>
                      <p className="help">Do not enter the first zero</p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Department</label>
                  </div>
                  <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select>
                          <option>Business development</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Member</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <label className="radio">
                          <input type="radio" name="member" />
                          Yes
                        </label>
                        <label className="radio">
                          <input type="radio" name="member" />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Question</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    {/* Left empty for spacing  */}
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
