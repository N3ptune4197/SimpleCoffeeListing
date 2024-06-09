import React from "react";
import CafeBg from './../assets/bg-cafe.jpg'
import Vector from './../assets/vector.svg'

export default function SectionOne({children, username}) {

    return(
        <>
            <section className="w-full absolute imageContainer h-[280px] md:h-[400px] -z-10">
                <img src={CafeBg} alt=""  className="w-full h-full object-cover "/>
            </section>
                

            <section className="">
                <div className="absolute flex flex-col container left-[50%] w-[75%] md:w-[70%] -translate-x-[50%] bg-second-bg rounded-xl justify-center px-5 pt-24 md:pt-20 md:px-20 top-[100px] md:top-[170px] align-middle overflow-hidden mb-7">
                    <div className="flex flex-col w-full justify-center mb-10 md:mb-16 align-middle">
                        <img src={Vector} alt="" className="w-[280px] md:w-[300px] z-10 absolute left-[80%] top-[40px] md:left-[65%] md:top-[30px] -translate-x-[50%]" />
                        <h1 className="text-4xl md:text-5xl text-normal font-dmsans font-semibold text-center z-20 mb-5">Our Collection</h1>
                        <div className="w-full lg:w-[75%] xl:w-[70%] md:mx-auto z-10">
                            <p className="mb-5 text-sm leading-snug md:text-xl lg-px-10 text-paragraph font-semibold text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                        </div>
                            
                        <div className="flex flex-row justify-center align-middle">
                            <button className="bg-paragraph px-4 py-2 rounded-xl font-semibold text-normal md:mr-5 text-xs md:text-lg">All Products</button>
                            <button className="px-4 py-2 rounded-xl font-semibold text-normal text-xs md:text-lg">Available Now</button>
                        </div>
                            
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 justify-center md:mb-16">{children}</div>


                    
                        <div href="#" className="flex text-sm md:text-lg justify-center align-middle items-center b-0 relative text-normal bottom-0 mb-5 md:mb-10">

                                <i class="fa-brands fa-github fa-xl"></i>
                                <a href={`https://github.com/${username}`} target="_blank" className="ml-2">{username}</a>
                        </div>
                        
                </div>

            </section>


            

        </>
    );
}