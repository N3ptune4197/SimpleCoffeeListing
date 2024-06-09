import React from "react";
import Star from './../assets/Star.svg'
import StarFill from './../assets/Star_fill.svg'



const Coffees = ( {coffees = []}) => {
    return(
        <>

            {
                coffees.map((item) => (

                    <div className="w-full">
                        
                        <div className="w-full">                            
                            { item.popular? <span className="px-3 py-1 bg-tag absolute mt-2 ml-2 rounded-full font-dmsans font-medium text-xs md:text-sm text-first-bg">Popular</span> :''}

                            <img src={item.image} alt="" className="w-full rounded-xl" />
                        </div>

                        <div className="pt-3 pb-20 w-full">  

                            <div className="flex justify-between items-center w-full mb-1">
                                <h4 className="mb-2 text-xl font-bold tracking-tight text-normal font-dmsans">{item.name}</h4>
                                <a href="#" className="px-3 py-1 bg-button rounded-md text-first-bg font-bold font-dmsans text-sm">{item.price}</a>

                            </div>
                            
                            <div className="flex w-full pl-1 items-center justify-between ">
                                <div className="flex pl-1 items-center">
                                    {
                                        (item.votes >= 1) ?  
                                                <>
                                                <img src={StarFill} alt="" className="" />
                                                <span className="text-normal font-bold text-md ">{item.rating}</span>
                                                <span className="text-paragraph font-bold ml-1 text-md">({item.votes} votes)</span>

                                                </>
                                            :
                                                <>
                                                    <img src={Star} alt="" />
                                                    <span className="text-paragraph font-bold ml-1 text-md">(No ratings)</span>
                                                </>
                                    }
                                </div>
                                <div>
                                    {item.available? '' : <span className="text-soldout font-semibold">Sold Out</span>}
                                </div>
                            </div>

                        </div>
                    </div>

                ))
            }

        </>
    );
}
export default Coffees