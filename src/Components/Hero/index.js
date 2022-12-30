import React from 'react'
import '../../App.css'
import foto from '../../assets/image/foto.png'

const HeroSection = () => {
    return (
        <>
            <div id='about'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#6B7280" fillOpacity="1" d="M0,320L13.3,288C26.7,256,53,192,80,176C106.7,160,133,192,160,186.7C186.7,181,213,139,240,149.3C266.7,160,293,224,320,250.7C346.7,277,373,267,400,240C426.7,213,453,171,480,165.3C506.7,160,533,192,560,176C586.7,160,613,96,640,64C666.7,32,693,32,720,74.7C746.7,117,773,203,800,213.3C826.7,224,853,160,880,138.7C906.7,117,933,139,960,149.3C986.7,160,1013,160,1040,165.3C1066.7,171,1093,181,1120,197.3C1146.7,213,1173,235,1200,213.3C1226.7,192,1253,128,1280,133.3C1306.7,139,1333,213,1360,218.7C1386.7,224,1413,160,1427,128L1440,96L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path>
                </svg>
            </div>
            <div className='container block mx-auto px-6 lg:px-40 lg:py-38'>
                <div className='md:grid md:grid-cols-2 gap-4'>
                    <div className='text-white flex flex-col mt-40 mx-2'>
                        <h1 className='lg:text-4xl md:text-4xl text-gray-500 font-bold'> Hi... I'm Arif Novrian Pratama</h1>
                        <h2 className='lg:text-3xl md:text-3xl text-gray-500 font-bold'> Frontend Developer</h2>
                        <p className='mt-3'>I'm a frontend developer with less than 1 year of experience. I'm proficient in creating responsive designs using tailwind CSS and bootstrap. I'm also capable of manipulating data on websites using React JS.</p>
                        <a href='https://drive.google.com/file/d/1bceC4sAFLcpxbFI1WpuW2Kl97laH9chm/view?usp=sharing' className='mt-4'>
                            <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2.5 ml-4 mb-4 dark:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Download CV</button>
                        </a>
                    </div>
                    <div className='flex mx-auto mt-16 md:mb-16'>
                        <div className='background mx-auto'>
                            <img src={foto} alt='foto' className=' mx-auto h-[350px] w-[250px] lg:h-[330px] lg:w-[230px]'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection