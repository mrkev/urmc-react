import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class QuotePost extends React.Component {
  render() { return (
    <div className={"testimonial " + (this.props.PermalinkPage? 'postpage' : 'thumbnail') }>
      <div className="flex flexvert">
        <div><a className="no-decor" href={this.props.Permalink}>
          <b>
            “
          </b>
          <br/>
          <span>
            {this.props.TimeAgo}
          </span>

        </a></div>
      </div>
      <div className="testimonial-content">
        <p className="paragraph">
          <h2>{this.props.Quote}</h2>
          {this.props.Author && this.props.Author}
        </p>
      </div>
    </div>
  )}
}
