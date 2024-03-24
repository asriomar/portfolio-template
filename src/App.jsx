import React from 'react';
import TestimonialCarousel from './Testimonials';
import NavigationBar from './NavigationBar';
import SkillsSection from './SkillsSection';
import SocialMediaSection from './SocialMediaSection';
import GetInTouch from './GetInTouch';

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

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hey! I'm [Your Name], a front-end developer passionate about
            crafting exceptional web experiences. With years of experience, I
            specialize in creating visually stunning websites using cutting-edge
            technologies.
            <br />
            <br />
            My coding journey started years ago. Since then, I've mastered HTML,
            CSS, JavaScript, and frameworks like React.js. I'm committed to
            learning and staying updated with industry trends.
            <br />
            <br />
            I bring creativity and precision to every project, solving complex
            problems with innovative solutions. Whether crafting layouts,
            optimizing performance, or debugging code, I aim for excellence.
            <br />
            <br />
            Beyond coding, I enjoy exploring design trends, trying new
            techniques, and savoring coffee with a captivating tech or design
            book. I thrive in collaborative environments and look forward to
            working with like-minded individuals.
            <br />
            <br />
            Let's connect and create something remarkable!
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
                <h3 className="text-xl font-bold mb-2">Project Title 4</h3>
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
                <h3 className="text-xl font-bold mb-2">Project Title 5</h3>
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
                <h3 className="text-xl font-bold mb-2">Project Title 6</h3>
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
                <h3 className="text-xl font-bold mb-2">Project Title 7</h3>
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
          <GetInTouch />

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">Contact Information</p>
            <p className="text-gray-700">
              Also feel free to reach out via email.
            </p>
            <p className="text-gray-700">
              Email:{' '}
              <a
                href="mailto:youremail@example.com"
                className="text-blue-500 hover:underline"
              >
                mohdasriomar84@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <SocialMediaSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Mohd Asri. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
