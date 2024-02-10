const Footer = () => {
  return (
    <div>
     <footer className="bg-white">
    <div className="container px-16 pt-16 pb-5 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">Subscribe our newsletter to get update.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"></input>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8"></hr>
        
        <div className="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-7" src="data:image/png;base64,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" alt=""></img>
            </a>
            
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
