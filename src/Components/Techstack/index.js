import React from 'react'

const Techstack = () => {
    return (
        <>
            <section className="py-8 sm:py-16 lg:py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-10 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mt-2 py-6 lg:py-1">
                        <h2 className="text-2xl font-bold text-white sm:text-4xl sm:leading-tight">Techstack</h2>
                    </div>

                    <div className="grid items-center mt-2 max-w-4xl grid-cols-4 mx-auto md:mt-20 gap-x-10 gap-y-16">
                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                            <p className='text-white text-center mt-2'>React Js</p>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn0.iconfinder.com/data/icons/HTML5/256/HTML_Logo.png" alt="" />
                            <p className='text-white text-center mt-2'>HTML 5</p>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-256.png" alt="" />
                            <p className='text-white text-center mt-2'>CSS 3</p>
                        </div>

                        <div>
                            <img className="object-contain w-full mx-auto h-8" src="https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/bootstrap-256.png" alt="" />
                            <p className='text-white text-center mt-2'>Bootstrap</p>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-256.png" alt="" />
                            <p className='text-white text-center mt-2'>Tailwind</p>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn1.iconfinder.com/data/icons/social-media-2106/24/social_media_social_media_logo_git-256.png" alt="" />
                            <p className='text-white text-center mt-2'>Git</p>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/wordpress-256.png" alt="" />
                            <p className='text-white text-center mt-2'>Wordpress</p>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Techstack