// import React from 'react'
// import User from './User'

// function Users() {
//     return (
//         <div>
//             <h1 className='mt-3 px-8 py-2 text-gray-800 font-semibold bg-slate-500 rounded-md text-xl'>
//                 Messages
//             </h1>
//             {/* this div is for displaying users */}
//             <div className='flex-1 overflow-y-hidden' style={{maxHeight:"calc(84vh-10vh)"}}>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             <User/>
//             </div>
//         </div>
//     )
// }

// export default Users


import React from 'react'
import User from './User'

function Users() {
    return (
        <div>
            <h1 className='mt-2 px-8 py-2 text-gray-800 font-semibold bg-slate-500 rounded-md text-xl'>
                Messages
            </h1>
            {/* this div is for displaying users */}
            <div className='py-2 flex-1 overflow-y-auto custom-scroll' style={{maxHeight:"calc(84vh - 13vh)"}}>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    )
}

export default Users
