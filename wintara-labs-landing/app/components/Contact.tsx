export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45d1e8]" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45d1e8]" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45d1e8]" required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#45d1e8] text-white font-bold py-2 px-4 rounded hover:bg-[#3bb8cc] transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

