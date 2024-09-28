import React from "react";
import { Link } from "react-scroll";  // Use react-scroll for smooth scrolling
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Pinch of Spice, we believe that great food goes beyond taste—it's about creating unforgettable experiences. 
            Our chefs carefully craft each dish using fresh, locally sourced ingredients to ensure quality and authenticity in every bite. 
            Whether you're craving classic comfort foods or adventurous global flavors, our diverse menu offers something for every palate.
            Join us for a meal and discover why we're more than just a restaurant—we're a destination for food lovers.
            </p>

            {/* Use Link from react-scroll to scroll to the menu section */}
            <Link
              to="menu"   // Scroll to the section with id="menu"
              spy={true}
              smooth={true}
              duration={500}
            >
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
