import React from 'react'

/**
  This is the homepage. It should only be shown on the
  first 'page' of posts. Has all the landing stuff and
  whatnot
**/

export default class HomePage extends React.Component {
  render() { return ( <div>
    <header className="header">
      <div className="container-sml">
        <div className="col-12 text-center">
          <h1 className="heading">
            Under-Represented Minorities in Computing <br/> @ Cornell
          </h1>
          <a name="mailsubscribe"></a>
          <h2 className="paragraph">
            URMC is the Under-Represented Minority in Computing organisation at Cornell. Currently, at Cornell only 6% of CS students are hispanic and 1% are black. We want to change this. Enter your email to recieve updates about our events.
          </h2>

          <div className="ctas">
            <form action="https://www.list.cornell.edu/subscribe/subscribe.tml" method="POST">
              <input className="ctas-input" type="text" placeholder="Your Email Address" name="email"/>
              <button className="ctas-button">
                Sign Up
              </button>

              <input type="hidden" name="name" value="" />
              <input type="hidden" name="list" value="urmc-l" />
              <input type="hidden" name="lists" value="urmc-l" />
              <input type="hidden" name="demographics" value="" />
              <input type="hidden" name="name_required" value="" />
              <input type="hidden" name="pw_required" value="" />
              <input type="hidden" name="confirm" value="one" />
              <input type="hidden" name="showconfirm" value="F" />
              <input type="hidden" name="url" value="" />
              <input type="hidden" name="appendsubinfotourl" value="" />
              <input type="hidden" name="secx" value="cfe1b6e8" />
            </form>
          </div>
        </div>
      </div>
      <div className="container-lrg">
        <div className="centerdevices col-12">
          <div className="iphoneipad">
            <div className="iphone">
              <div className="mask">
                <img className="mask-img" src="https://dl.dropboxusercontent.com/u/25751237/Sites/URMC/IMG_3930.jpg" />
              </div>
            </div>
            <div className="ipad">
              <div className="mask">
                <img className="mask-img" src="https://dl.dropboxusercontent.com/u/25751237/Sites/URMC/tumblr_ogfzfc2HIF1vizqhdo1_1280.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="all">
      <div className="feature3">
        <div className="container-lrg flex">
          <div className="col-4">
            <b className="emoji">
              🎓
            </b>
            <h3 className="subheading">
              Mentorship.
            </h3>
            <p className="paragraph">
              URMC organises mentorship events, designed to connect underclassmen thinking of pursuing CS with upperclassmen in such majors, to provide guidance and precedent.
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              💐
            </b>
            <h3 className="subheading">
              Community.
            </h3>
            <p className="paragraph">
              Through social events and gatherings, URMC fosters connections and a tighter community amongst the UR minority student body at Cornell.
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              🚀
            </b>
            <h3 className="subheading">
              Career Growth.
            </h3>
            <p className="paragraph">
Recruiting events and company-sponsored tech talks are an opportunity for minority students to connect with leading companies in the industry.
            </p>
          </div>
        </div>
      </div>
      <div className="socialproof">
        <div className="container-sml">
          <div className="flex text-center">
            <div className="col-12">
              <h4 className="subheading">
                We are creating a community of mentorship and support for under-represented CS students with valuable help from several corporate sponsors.
              </h4>
              <p className="paragraph">
                2016-2017 sponsors
              </p>
            </div>
          </div>
        </div>
        <div className="container-lrg">
          <div className="logos flex">
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="https://dl.dropboxusercontent.com/u/25751237/img/urmc/sponsors/google.png" /></div>
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="https://dl.dropboxusercontent.com/u/25751237/img/urmc/sponsors/palantir.png" /></div>
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="https://dl.dropboxusercontent.com/u/25751237/img/urmc/sponsors/microsoft.png" /></div>
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="https://dl.dropboxusercontent.com/u/25751237/img/urmc/sponsors/capitalone.png" /></div>
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="https://dl.dropboxusercontent.com/u/25751237/img/urmc/sponsors/airbnb.png" /></div>
            <div className="col-4" style={{textAlign:'center'}}><img style={{height:'auto'}} src="http://logonoid.com/images/cornell-university-logo.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>)}
}
