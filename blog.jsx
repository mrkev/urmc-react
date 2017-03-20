import React from 'react'
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
import { IndexPagination, PermalinkPagination } from './parts/pagination.jsx'

require('normalize.css'); // always good to start clean
require('./css/main.css'); // main for a launchaco site
require('./css/devices.css'); // for mobile devices? idk
require('./css/main2.css'); // main for a launchaco site
require('./css/devices2.css'); // for mobile devices? idk
require('./css/extras.css'); // for extra css stuff

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {

  componentDidMount() {
    // Some annoying tumblr analytics thing that won't let
    // the user click through. Hacky as balls tho
    setTimeout(function () { console.log('removing');
    console.log(document.getElementById('ga_target'));
    document.getElementById('ga_target').remove(); });
  }

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

    const content = this.props.Content
      ? (
      <div className="socialproof">
        <div className="container-lrg">
          <div className="col-12">
            {postelem(this.props.Content.Post)}
          </div>
        </div>
        {this.props.Content.Pagination &&
        <div className="container-sml">
          <div className="col-12">
            <div className="testimonial-navigation" style={{'height': '20px'}}>
              {this.props.Content.Pagination.NextPost && <a href={this.props.Content.Pagination.NextPost}>←</a>}
              | {this.props.Content.Pagination.PreviousPost && <a href={this.props.Content.Pagination.PreviousPost}>→</a>}
            </div>
          </div>
        </div>}
      </div>)
      : (
      <div className="socialproof">
        {this.props.HomePage &&
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

            {this.props.Index.Posts.map(function (post, i) {
              const p = postelem(post)
              return <div className="col-4" key={i}>{p}</div>
            })}

            {this.props.Index.Pagination.NextPage &&
            <div className="col-4">
              <div className="testimonial">
                <div className="flex flexvert">
                  <div><a className="no-decor" href={this.props.Index.Pagination.NextPage}>
                    <b>
                      {this.props.HomePage? "More..." : "Next..." }
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

      {this.props.HomePage && <HomePage />}

      {content}

      <Footer {... this.props} />

    </div>)
  }
}

