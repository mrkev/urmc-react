import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class PhotoPost extends React.Component {
  render() { console.log(this.props); return (
    <div className={"testimonial " + (this.props.PermalinkPage? 'postpage' : 'thumbnail') }>
      <div className="flex flexvert">
        <div><a className="no-decor" href={this.props.Permalink}>
          <b>
            📷
          </b>
          <br/>
          <span>
            {this.props.TimeAgo}
          </span>

        </a></div>
      </div>
      <div className="testimonial-content">
        <p className="paragraph">
          {this.props.photos()}
          {this.props.body()}
        </p>
      </div>
    </div>
  )}
}
