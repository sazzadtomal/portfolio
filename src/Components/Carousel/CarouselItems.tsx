



interface Props{
  image:string;
  headings: {h1:string,h2:string}
}


const CarouselItems = ({image,headings}:Props) => {
  return (
    <div className="flex h-full w-full  overflow-hidden "> 
      
            <img className="w-full filter brightness-[80%]  h-full object-cover " src={image} alt="coffee in a cup" />
         
            <div className="h-full flex flex-col justify-center md:justify-end w-full  absolute p-8 md:p-24">
                <div className="mb:0 md:mb-8 text-white">
                    <h1 className="text-xl md:text-5xl mb-2 md:mb-6">{headings.h1}</h1>
                    <h2 className="text-lg md:text-3xl">{headings.h2}</h2>
                </div>
            </div>
        </div>
  )
}

export default CarouselItems