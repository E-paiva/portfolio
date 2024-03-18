
import LinkButton from "@/app/components/LinkButton"
import CardSecondary from "@/app/components//projects/CardSecondary"
import styles from "@/styles/projects/realestate.module.css"


export default function Landingpage() {



    return <><main className={styles.main}>
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerLogo}>Morris-Raine Real Estate Co. </div>
                <h1 className={styles.bannerTitle}>Let us help you find your dream home.</h1>
                <div className={styles.bannerbuttons}>
                    <LinkButton content="Buy a home" type="primary" />
                    <LinkButton content="List a home" type="secondary" />
                </div>
            </div>
            <div className={styles.bannerImageContainer}>
                <img className={styles.bannerImage} src="../projects-icons/landingpage/realestate/banner1.jpg" />
            </div>
        </section>


        <section className={styles.cta}>
            <div className={styles.bannerImageContainer}>
                <img className={styles.bannerImage} src="../projects-icons/landingpage/realestate/banner2.jpg" />
            </div>
            <div className={styles.ctaContent}>

                <h2 className={styles.ctaTitle}>Our vision is to be the most trusted and respected real estate agency in Roseton.</h2>
                <div className={styles.ctabutton}>

                    <LinkButton content="Contact us" type="secondary" />
                </div>
            </div>


        </section>
        <section className={styles.sale}>
            <div className={styles.saleTitle} >
                <h2 >Properties for Sale</h2>
            </div>
            <div className={styles.saleCardContainer}>
                <CardSecondary />
                <CardSecondary />
                <CardSecondary />
                            

            </div>
        </section>
        <section className={styles.rent}>
            <div className={styles.saleTitle} >
                <h2 >Properties for Rent</h2>
            </div>
            <div className={styles.saleCardContainer}>
                <CardSecondary />
                <CardSecondary />
                <CardSecondary />

            </div>
        </section>
        <section className={styles.testimonial}>
            <div className={styles.testimonialTitle} >
                <h2 >Happy Clients</h2>
            </div>
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonialCard}>
                    <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h5>- Natalia Lowe</h5>
                </div>
                <div className={styles.testimonialCard}>
                    <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.

                        Boost your product and service's credibility by adding testimonials from your clients. </p>
                    <h5>- Elliot Sterling</h5>
                </div>
                <div className={styles.testimonialCard}>
                    <p>Boost your product and service's credibility by adding testimonials from your clients.</p>
                    <h5>- Lillian Pratt</h5>
                </div>
            </div>
        </section>
        <section className={styles.contact}>
            <div className={styles.bannerLogo}>Morris-Raine Real Estate Co. </div>
            <div className={styles.contactContent}>
                <div className={styles.contactFormContainer}>
                    <form action="#" className={styles.contactForm} >
                        <legend><h2>Let's Talk</h2></legend>
                        <label htmlFor="name">Name:</label>
                        <input className={styles.inputContainer} type="text" id="name" required />
                        <label htmlFor="email">Email:</label>
                        <input className={styles.inputContainer} type="email" id="email" required />
                        <label htmlFor="message">Message:</label>
                        <input className={styles.inputContainer} type="text" id="message" required />
                        <button className={styles.contactsSubmit} >
                            Send Email
                        </button>
                    </form>
                </div>
                <div className={styles.hoursContainer}>
                    <h2>Business Hours</h2>

                    <div className={styles.hours}>
                        Monday to Friday<br/>
                        9:00 am to 6:00 pm<br/>
                        Saturday<br/>
                        9:00 am to 12 noon<br/><br/>

                        Sunday by appointment only.
                    </div>

                </div>
                <div className={styles.mapsContainer}>
                    <h2>Find Us</h2>

                    <iframe className={styles.maps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.41434202294!2d-9.242137558483686!3d38.74405052642029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1710171987647!5m2!1spt-PT!2spt" width="300" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>



        </section>


    </main></>
}