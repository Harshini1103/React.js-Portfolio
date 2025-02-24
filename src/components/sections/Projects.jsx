import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> HTML and CSS Project</h3>
              <h4 className="text-xl font-bold mb-2 underline"> Harsh Biryani Restaurant</h4>
              <p className="text-gray-400 mb-4">
              Experience the rich and authentic flavors of biryani at Harsh Biryani Restaurant, where tradition meets taste. Our carefully crafted recipes bring out the perfect blend of spices, tender meat, and fragrant basmati rice, creating a dish that satisfies every craving. Whether you love classic Hyderabadi biryani, spicy Kolkata biryani, or our chef’s special variations, we promise an unforgettable dining experience. Join us for a feast of flavors and indulge in the magic of true biryani!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5","CSS3"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
               <h3 className="text-xl font-bold mb-2"> HTML and CSS Project</h3>
              <h4 className="text-xl font-bold mb-2 underline"> Harsh Shoes - Nike Collection</h4>
              <p className="text-gray-400 mb-4">
              Step into style and performance with Harsh Shoes, your ultimate destination for the latest Nike footwear. Whether you're looking for cutting-edge running shoes, stylish sneakers, or high-performance sports footwear, we bring you the best from Nike’s premium collection. Designed for comfort, durability, and innovation, our shoes help you push your limits in both sports and fashion. Explore our range and find the perfect pair to match your energy and style!              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5","CSS3"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Vehicle Parking Management System</h3>
              <p className="text-gray-400 mb-4">
                Efficient, secure, and hassle-free parking with Harsh Vehicle Parking Management System. Our system is designed to streamline parking operations, ensuring smooth vehicle entry, exit, and space allocation. With advanced features like real-time availability tracking, digital ticketing, and secure payment options, we provide a seamless experience for both vehicle owners and parking administrators. Whether for commercial spaces, malls, or offices, our system enhances convenience while optimizing parking space utilization. Say goodbye to parking troubles and experience a smarter way to park!
</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP","Mysql"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Doctor's Appointment and Online Consultation</h3>
              <p className="text-gray-400 mb-4">
             Simplify healthcare access with the Doctor's Appointment & Online Consultation System. Our platform enables patients to easily book appointments with doctors, access medical consultations online, and receive expert healthcare advice from the comfort of their homes. With secure video consultations, prescription management, and real-time scheduling, we bridge the gap between patients and healthcare professionals. Whether for routine checkups or specialized care, our system ensures a hassle-free and efficient medical experience, making quality healthcare more accessible than ever.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "Javascript","TaiwindCSS", "React.js","Postman API", "Node.js","EXpress.js","MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
