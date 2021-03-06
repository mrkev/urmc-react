import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'


export default class LinkPost extends React.Component {
  render() { return (
    <div className="r_post_link">
      <div className="link post">

        <h2>
          <a href={this.props.URL}
             target={!!this.props.Target ? "_blank" : "_self"}>
             {this.props.Name}
          </a>
        </h2>

        { this.props.body() }

        <PostMeta {... this.props}/>
      </div>

      <PostNotes PostNotes={this.props.PostNotes} />
    </div>
  )}
}
