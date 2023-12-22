const Info = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Who Can Benefit From Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 p-6">
          {/* Audience Cards */}
          <div
            data-aos="zoom-out-right"
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-700">
              Efficiently manage your project tasks and collaborate with team
              members.
            </p>
          </div>
          <div data-aos="zoom-in" className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Corporate Professionals
            </h3>
            <p className="text-gray-700">
              Stay organized and boost productivity in your daily tasks and
              projects.
            </p>
          </div>
          <div
            data-aos="zoom-out-left"
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-700">
              Simplify task management for financial projects with our
              user-friendly platform.
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Students</h3>
            <p className="text-gray-700">
              Organize your study schedules, assignments, and group projects
              effectively.
            </p>
          </div>
          <div data-aos="zoom-in" className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Entrepreneurs</h3>
            <p className="text-gray-700">
              Manage tasks, deadlines, and collaborations to drive your business
              forward.
            </p>
          </div>
          <div
            data-aos="zoom-out-left"
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Freelancers</h3>
            <p className="text-gray-700">
              Stay on top of your projects and deliverables with our task
              management tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
