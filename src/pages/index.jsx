import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout title="Ai Taskify">
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              href="#"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                AI<span className="text-indigo-600">.</span>
              </span>
            </Link>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <Link
              href="/login"
              className="text-base font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>

      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Boost Your Ability</span>
                  <span className="block text-indigo-600 xl:inline">
                    To Manage Tasks.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Whether you are an administrator assigning work or a member
                  monitoring progress, you can easily manage tasks.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    href="/login"
                    className="flex items-center w-full sm:w-auto px-4 sm:px-6 py-3 text-base sm:text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700 mb-3 sm:mb-0"
                  >
                    Join Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 sm:w-5 h-4 sm:h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <Link
                    href="/signup"
                    className="flex items-center w-full sm:w-auto px-4 sm:px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Registration for an Account
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <Image
                  src="/images/heropic.jpg"
                  alt="Showcase"
                  width={1050} // You need to specify width
                  height={700} // You need to specify height
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
