import React from 'react';

class footer extends React.Component {
    state = {  } 
    render() { 
        return (

            <footer className="footer">
            <div className="container">
              <div className="row">             
                <div className="col-4 offset-1 col-sm-2">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="'/aboutus.html">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="col-7 col-sm-5">
                  <h5>Address</h5>
                  <address>
                    C/103 4B SK road<br />
                    New Delhi<br />
                    Tel.: +91 1234 5678<br />
                    Fax: +91 1223 94857<br />
                  </address>
                </div>
                <div className="row justify-content-center">             
                  <div className="col-auto">
                    <p>© Copyright Ayush Kumar</p>
                  </div>
                </div>
              </div>
            </div></footer>
          );
    }
}


  export default footer;