import React from 'react'
import '../../App.css'
import portfolio1 from '../../assets/image/portfolio1.png'
import portfolio2 from '../../assets/image/portfolio2.png'
import portfolio3 from '../../assets/image/portfolio3.png'
import portfolio4 from '../../assets/image/portfolio4.png'

const Project = () => {
    return (
        <>
            <div className='container mx-auto mt-20' id='project'>
                <h1 className='text-2xl font-bold text-white sm:text-4xl sm:leading-tight text-center'> Project </h1>
            </div>

            <div className="container gap-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-center items-center mx-auto mt-10">
                <div className="max-w-xs mx-6 my-2 overflow-hidden rounded-lg shadow-2xl">
                    <img className="w-full h-48"
                        src={portfolio1}
                        alt="product" />
                    <div className="flex flex-col px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-blue-500">Job Portal</h4>
                        <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-900" />
                        <h6 className="mb-3 text-xl font-semibold tracking-tight text-white">Finished</h6>
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">React Js, Tailwind</h4>
                    </div>
                    <a href='https://pengen-kerja.netlify.app'>
                        <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mb-4 dark:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Go to website</button>
                    </a>
                </div>
                <div className="max-w-xs mx-6 my-2 overflow-hidden rounded-lg shadow-2xl">
                    <img className="w-full h-48"
                        src={portfolio2}
                        alt="product" />
                    <div className="flex flex-col px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-blue-500">Bookshelf</h4>
                        <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-900" />
                        <h6 className="mb-3 text-xl font-semibold tracking-tight text-white">Finished</h6>
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">React Js</h4>
                    </div>
                    <a href='https://my-bookshelf-tama.netlify.app'>
                        <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mb-4 dark:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Go to website</button>
                    </a>
                </div>
                <div className="max-w-xs mx-6 my-2 overflow-hidden rounded-lg shadow-2xl">
                    <img className="w-full h-48"
                        src={portfolio3}
                        alt="product" />
                    <div className="flex flex-col px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-blue-500">Web Movie</h4>
                        <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-900" />
                        <h6 className="mb-3 text-xl font-semibold tracking-tight text-white">On Progress</h6>
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">React Js, Bootstrap</h4>
                    </div>
                    <a href='https://tama-movie.netlify.app'>
                        <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mb-4 dark:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Go to website</button>
                    </a>
                </div>
                <div className="max-w-xs mx-6 my-2 overflow-hidden rounded-lg shadow-2xl">
                    <img className="w-full h-48"
                        src={portfolio4}
                        alt="product" />
                    <div className="flex flex-col px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-blue-500">Travel Agent</h4>
                        <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-900" />
                        <h6 className="mb-3 text-xl font-semibold tracking-tight text-white">Finished</h6>
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Wordpress</h4>
                    </div>
                    <a href='https://www.mahendtour.com/'>
                        <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mb-4 dark:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Go to website</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project