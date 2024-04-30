import "./Contact.scss"
function Contact() {
  return (
    <main>
      <section className="contact_section">
            <div className="blog_div">
                <h1 className="blog_h1">Contact Me</h1>
                <p className="blog_p">Have questions? I have answers.</p>
            </div>
        </section>
        <section className="contact_section2">
        <div className="contact_div2">
            <p>
                Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!
            </p>
            <form action="">
               <input className="form_input" placeholder="Name" type="text" />
               <input className="form_input" placeholder="Email address" type="text"/>
               <input className="form_input"  placeholder="Phone Number" type="text"/>
               <input className="form_input"   placeholder="Message" type="text"/>
            </form>
            <button className="contact_btn">SEND</button>
        </div>
    </section>
    </main>
  )
}

export default Contact
