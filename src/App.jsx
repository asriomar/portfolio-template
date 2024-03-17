import React from 'react';
import TestimonialCarousel from './Testimonials';
import NavigationBar from './NavigationBar';
import SkillsSection from './SkillsSection';
import SocialMediaSection from './SocialMediaSection';

const PortfolioWebsite = () => {
  return (
    <div>
      <NavigationBar />

      {/* Hero Section */}
      <section className="bg-blue-100 text-blue-900 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          {/* Avatar */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/018/716/098/small/programmer-line-gradient-icon-vector.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-6 border-4 border-white shadow-lg"
          />

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>

          {/* Subtitle */}
          <p className="text-lg mb-8">Front-end Developer | UI/UX Enthusiast</p>

          {/* Call-to-Action Button */}
          <a
            href="#portfolio"
            className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hello! I'm [Your Name], a dedicated front-end developer with a
            passion for creating exceptional web experiences. With [X] years of
            industry experience, I specialize in transforming ideas into
            visually stunning and user-friendly websites using cutting-edge
            technologies.
            <br />
            <br />
            My journey in web development began [X years ago] when I discovered
            my love for coding. Since then, I've honed my skills in HTML, CSS,
            JavaScript, and various front-end frameworks like React.js. I'm
            committed to continuous learning and staying updated with the latest
            industry trends and advancements.
            <br />
            <br />
            I approach development with a blend of creativity and precision. I
            thrive on solving complex problems with innovative solutions and
            meticulously refining every aspect of my work to deliver an
            outstanding user experience. Whether it's crafting responsive
            layouts, optimizing performance, or debugging code, I strive for
            excellence in every project.
            <br />
            <br />
            Outside of coding, I enjoy exploring the latest design trends,
            experimenting with new coding techniques, and indulging in a good
            cup of coffee while immersing myself in a captivating book on
            technology or design. I thrive in collaborative environments and am
            always excited to collaborate with like-minded individuals on
            exciting projects.
            <br />
            <br />
            Let's connect and create something remarkable together!
          </p>
        </div>
      </section>

      <SkillsSection />

      {/* Projects Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/238/200/300"
                alt="Project 1"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/239/200/300"
                alt="Project 2"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/240/200/300"
                alt="Project 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/241/200/300"
                alt="Project 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/242/200/300"
                alt="Project 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/243/200/300"
                alt="Project 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/244/200/300"
                alt="Project 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
                <p className="text-gray-700 mb-4">
                  Brief project description goes here...
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              </div>
            </div>

            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* Contact Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

          {/* Contact Form */}
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">Contact Information</p>
            <p className="text-gray-700">
              Feel free to reach out via email or phone.
            </p>
            <p className="text-gray-700">
              Email:{' '}
              <a
                href="mailto:youremail@example.com"
                className="text-blue-500 hover:underline"
              >
                youremail@example.com
              </a>
            </p>
            <p className="text-gray-700">
              Phone: <span className="text-blue-500">+1234567890</span>
            </p>
          </div>
        </div>
      </section>

      <SocialMediaSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
