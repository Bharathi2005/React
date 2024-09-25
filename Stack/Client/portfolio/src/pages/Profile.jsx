
import Profilex from '../assets/img/profile.jpg'
import Navbar from '../components/Navbar'



const Profile = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center flex-col">
                <div className="h-[70vh] w-screen flex justify-center items-center">
                    <div className='h-[80%] w-[80%] flex flex-row justify-center items-center'>
                        <div className='h-2/3 w-7/12 flex flex-col justify-center items-center px-4'>
                            <div className="w-full h-1/4 justify-center">
                                <h1 className='text-4xl font-medium'> Hi, I'm <span className='text-purple-500 font-bold'>Bharathi AK</span> ,</h1>
                            </div>
                            <div className="w-full h-3/4 justify-start">
                                <h4>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem earum obcaecati voluptate quo reprehenderit, esse, dolore delectus accusantium enim, tempore dolores maiores aperiam nesciunt odit beatae saepe. Quae eaque ducimus fuga dolores officia at magni consequuntur ut esse, eos odio. Itaque, odit commodi sapiente fuga quia dicta repellat nostrum reprehenderit!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fugit sequi repellendus maiores reiciendis? Repellat ipsa veritatis aliquam facere quasi ipsum minus velit aperiam libero, similique nisi in cupiditate laudantium.
                                </h4>
                            </div>
                        </div>
                        <div className='h-full w-5/12 flex flex-row justify-center items-center '>
                            <img src={Profilex} alt="profile" className="rounded-full h-60 w-60 object-contain" />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile