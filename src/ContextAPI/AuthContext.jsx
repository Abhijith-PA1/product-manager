// import React, {  createContext, useEffect, useState } from 'react'

// export const tokenAuthContext  = createContext()

// function AuthContext({Children}) {

//     const [ AuthContext,setAuthContext ]=useState(false);

//     useEffect(()=>{
//         if(sessionStorage.getItem('token')){
//             setAuthContext(true);
//         }else{
//             setAuthContext(false)
//         }
//     },[AuthContext])

//   return (
//     <div>
//         <tokenAuthContext.Provider value={{ AuthContext,setAuthContext }}>
//             {Children}
//         </tokenAuthContext.Provider>
      
//     </div>
//   )
// }

// export default AuthContext
