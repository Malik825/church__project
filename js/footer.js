function createFooter() {
  let footer = (document.querySelector("footer").innerHTML = `
          <div class="container">
                <div class="row">
                    <div class="footer-item">
                        <h2>Follow Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore commodi! Aspernatur.</p>
                        <div class="social_lines">
                            <a href="avascript:void(0);"><i class="fab fa-facebook-f"></i></a>
                            <a href="avascript:void(0);"><i class="fab fa-youtube"></i></a>
                            <a href="avascript:void(0);"><i class="fab fa-twitter"></i></a>
                            <a href="avascript:void(0);"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="footer-item">
                        <h2>Contact Us</h2>
                        <div class="row">
                            <div class="contact">
                                <i class="fa fa-location-arrow"></i>
                                <div class="contact-details">
                                    <p><a href="#">Address</a></p>
                                    <h4>University Of Cape Coast, Centeral Ghana.</h4>
                                </div>
                            </div>
                            <div class="contact">
                                <i class="fa fa-mobile-alt"></i>
                                <div class="contact-details">
                                    <p><a href="tel:0559069195">Phone:</a></p>
                                    <h4>0559069195</h4>
                                </div>
                            </div>
                            <div class="contact">
                                <i class="fa fa-envelope-square"></i>
                                <div class="contact-details">
                                    <p><a href="mailto:abdulmaliksuleman75@gmail.com">Email:</a></p>
                                    <h4>mail@.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div class="row row-footer">

                    <div class="footer-item2 flex50">
                        <h2>Information</h2>
                        <a href="#">About Us</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div class="footer-item2 flex50">
                        <h2>My Account</h2>
                        <a href="about.html">my Account</a>
                        <a href="#">Order History</a>
                        <a href="#">Wishlist</a>
                        <a href="#">NewsLetter</a>
                        <a href="#">Resume</a>
                    </div>
        

                </div>
             
            </div>
            <div class="copy"><p>&copy;All rights reserved 2022</p></div>
    
        `);
}
createFooter();
