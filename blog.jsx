import PhotoPost from './post/photo.jsx'
import QuotePost from './post/quote.jsx'
import VideoPost from './post/video.jsx'
import LinkPost  from './post/link.jsx'
import ChatPost  from './post/chat.jsx'
import TextPost  from './post/text.jsx'
import AudioPost from './post/audio.jsx'
import HomePage  from './parts/HomePage.jsx'
import Header    from './parts/Header.jsx'
import Footer    from './parts/Footer.jsx'

import React from 'react'

require('normalize.css'); // always good to start clean
require('./css/main.css'); // main for a launchaco site
require('./css/devices.css'); // for mobile devices? idk
require('./css/main2.css'); // main for a launchaco site
require('./css/devices2.css'); // for mobile devices? idk
require('./css/extras.css'); // for extra css stuff

/** Pagination shown on post-list pages (like the index page of the blog, for example) */
class Pagination extends React.Component {
  render() { return (
    <div id="navigation">

      {!!this.props.NextPage &&
        <a href={this.props.NextPage} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.PreviousPage &&
        <a href={this.props.PreviousPage} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  )}
}

/** Pagination shown on permalink pages */
class PermalinkPagination extends React.Component {
  render() { return (
    <nav>

      {!!this.props.PreviousPost &&
        <a href={this.props.PreviousPost} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.NextPost &&
        <a href={this.props.NextPost} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </nav>
  )}
}


/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {
  render() {

    const postelem = post => { switch (post.PostType) {
      case "photo": return <PhotoPost {... post}/>
      case "quote": return <QuotePost {... post}/>
      case "video": return <VideoPost {... post}/>
      case  "link": return <LinkPost  {... post}/>
      case  "chat": return <ChatPost  {... post}/>
      case  "text": return <TextPost  {... post}/>
      case "audio": return <AudioPost {... post}/>
    }}

    const content = this.props.PermalinkPage
      ? (
      <div className="socialproof">
        <div className="container-lrg">
          <div className="col-12">
            {postelem(this.props.Post)}
          </div>
        </div>
        {this.props.PermalinkPagination &&
        <div className="container-sml">
          <div className="col-12">
            <div className="testimonial-navigation" style={{'height': '20px'}}>
              {this.props.PermalinkPagination.NextPost && <a href={this.props.PermalinkPagination.NextPost}>←</a>}
              | {this.props.PermalinkPagination.PreviousPost && <a href={this.props.PermalinkPagination.PreviousPost}>→</a>}
            </div>
          </div>
        </div>}
      </div>)
      : (
      <div className="socialproof">
        {this.props.is_home &&
        <div className="container-sml">
          <div className="text-center">
            <div className="col-12">
              <h4 className="heading">
                Some news we've shared with the web
              </h4>
            </div>
          </div>
        </div>}
        <div className="container-lrg">
          <div className="tweets flex">

            {this.props.Posts.map(function (post, i) {
              const p = postelem(post)
              return <div className="col-4" key={i}>{p}</div>
            })}

            {this.props.Pagination.NextPage &&
            <div className="col-4">
              <div className="testimonial">
                <div className="flex flexvert">
                  <div><a className="no-decor" href={this.props.Pagination.NextPage}>
                    <b>
                      {this.props.is_home? "More..." : "Next..." }
                    </b>
                    <br/>
                    <span>
                    </span>
                  </a></div>
                </div>
                <div className="testimonial-content">
                  <p className="paragraph">
                  </p>
                </div>
              </div>
            </div>}

          </div>
        </div>
      </div>
    )

    window.home = this.props

    return (<div>
      <Header {... this.props} />

      {this.props.is_home && <HomePage />}

      {content}

      <Footer {... this.props} />

    </div>)
  }
}

