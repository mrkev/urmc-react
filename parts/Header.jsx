import React from 'react'

/** Includes: Blog title, links to pages and description */
export default class Header extends React.Component {
  render() { return (
    <header className="header">
      <div className="container-lrg">
        <div className="col-12 spread">
          <div>
            <a className="logo" href="/">
              URMC
            </a>
          </div>
          <div>
            {!!this.props.Pages &&
            this.props.Pages.map((page, i) =>
            <a className="nav-link" href={page.URL} key={i}>
              {page.Label}
            </a>
            )}

            {!!this.props.AskEnabled &&
            <a className="nav-link" href="/ask">
              Ask
            </a>}

            {!!this.props.SubmissionsEnabled &&
            <a className="nav-link" href="/submit">
              {this.props.SubmitLabel}
            </a>}

            <a className="nav-link" href="https://www.facebook.com/groups/cornellurmc/">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  )}
}
