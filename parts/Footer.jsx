import React from 'react'

/** Includes: theme attribution and search field */
export default class Footer extends React.Component {
  render() { return (
    <div className="footer">
      <div className="container-sml text-center">
        <div className="col-12">
          <h5 className="heading">
            Don't miss a beat. <br/>
            Sign up to recieve updates.
          </h5>
          <div className="ctas">
            <a className="ctas-button" href="https://www.facebook.com/groups/cornellurmc/">
              Facebook
            </a>
            <a className="ctas-button-2" href="/#mailsubscribe">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="container-lrg footer-nav">
        <div className="col-12 spread">
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
          <div>
            <a className="nav-link" href="http://cs.cornell.edu">
              Cornell CS
            </a>
          </div>
        </div>
      </div>
    </div>
  )}
}
