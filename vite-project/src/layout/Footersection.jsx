import "./Footersection.scss"
function Footer() {
  return (
    <footer>
      <hr />
        <div className="footer_div_1">
            <div className="footer_div_2">
                <div className="icon_div">
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="div_p">
                    <p>Copyright © Your Website 2023</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
