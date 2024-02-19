
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'



interface Props{
    fontSize:number,
    increment:()=>void,
    decrement:()=>void
}



const Responsive = ({fontSize,increment,decrement}:Props) => {
  return (
    <section className='lg:w-1/2 lg:mx-auto lg:px-32 lg:mb-20 mb-16 '>
                        <h3  className={`text-${fontSize}xl`}>"Responsive"</h3>
                        <p>Screens shift, site adjusts! Responsive magic adapts content to phones, tablets, laptops, no zoom required. Seamless flow, effortless navigation, happy users, sky-high engagement. The future of browsing, accessible to all.</p>
                        <div className='flex text-3xl w-full lg:justify-center mt-4 lg:gap-2'>
                            <button className='active:scale-75 disabled:text-red-800' disabled={fontSize===2 ? true : false } onClick={()=>decrement()}>
                                <CiCircleMinus />
                            </button>
                            <button className='active:scale-75 disabled:text-red-800' disabled={fontSize=== 8 ? true : false } onClick={()=>{increment()}}>
                                <CiCirclePlus />
                            </button>
                        </div>
                    </section>
  )
}

export default Responsive