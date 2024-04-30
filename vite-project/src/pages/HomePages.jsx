import "./HomePages.scss"
function HomePages() {
  return (
    <main>
      <section className="home_section">
        <div className="blog_div">
          <h1 className="blog_h1">Clean Blog</h1>
          <p className="blog_p">A Blog Theme by Start Bootstrap</p>
        </div>
      </section>
      <section className="contact_section_2">
            <div className="blog_div_2">
                <a href="">
                    <h2>Man must explore, and this is exploration at its greatest</h2>
                    <h3>Problems look mighty small from 150 miles up</h3>
                </a>
                <p>Posted by Start Bootstrap on September 24, 2023</p>
                <hr/>
                <a href="">
                    <h2>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
                </a>
                <p>Posted by Start Bootstrap on September 18, 2023</p>
                <hr/>
                <a href="">
                    <h2>Science has not yet mastered prophecy</h2>
                    <h3>We predict too much for the next year and yet far too little for the next ten.</h3>
                </a>
                <p>Posted by Start Bootstrap on August 24, 2023</p>
                <hr/>
                <a href="">
                    <h2>Failure is not an option</h2>
                    <h3>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                </a>
                <p>Posted by Start Bootstrap on July 8, 2023</p>
                <hr/>
                <div><button>OLDER POSTS <i className="fa-solid fa-arrow-right"></i></button></div>
            </div>
        </section>
    </main>
  );
}

export default HomePages;
