import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

    <div>
        <div className="row">
            <div className="col">
                <div className='d-flex justify-content-center align-items-center position-absolute top-50 start-50'  style={{backgroundColor:"black",opacity:"80%", width:"300px", height:"200px"}}>
                   <div className='m-5'  style={{width:"100%"}}>
                     <Link to={'/register'} className='btn btn-success m-1 p-2 form-control'>Register</Link><br />
                    <Link to={'/login'} className='btn btn-success m-1 p-2 form-control'>Login</Link>
                   </div>
                </div>
                <img style={{width:'100%', height:'100vh'}} src="https://images.assetsdelivery.com/compings_v2/pitinan/pitinan2109/pitinan210901353.jpg" alt="" />
            </div>
        </div>
        <div className="row m-5">
            <div className="col" style={{backgroundColor:"green"}}>
                <h1 className='m-4' style={{color:"yellow"}}>Product ManagerApp</h1>
                <p style={{color:"white"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vel ullam ab laboriosam esse similique dolores harum illo, iure quia sint odio. Reprehenderit amet veniam minus! Similique quasi itaque nostrum!
                Nostrum asperiores voluptatum ad sit atque natus error. Expedita voluptatum nesciunt temporibus ipsam porro nemo aliquam omnis qui, repellendus quos enim sapiente quaerat obcaecati culpa architecto sequi, doloribus rem totam.
                Earum facilis autem consequatur, nobis aliquam sunt excepturi quam voluptatem perspiciatis veritatis ullam nesciunt veniam assumenda harum quisquam quo fugiat alias ipsum. Fuga quidem maxime placeat, voluptates aut voluptas eveniet.</p>
            </div>
            <div className="col">
                <img style={{width:'100%', height:'100%'}} src="https://www.shutterstock.com/image-photo/smart-warehouseinventory-management-system-conceptmanager-600nw-2281829879.jpg" alt="" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Home
