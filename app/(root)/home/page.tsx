
export default async function Blogs(){

    return (
        
       <div className="px-4">
         
          <div className="bg-gray-100 text-black rounded-2xl w-full h-56 p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">Hemanth Ramesh</p>
                <p className="text-sm">Creator</p>
              </div>
              <img src="/chip.png" className="w-8" alt="" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">Available Credit : 5000</p>
              <div className="flex items-center justify-between">
                <p className="text-sm">12/2025</p>
                
              </div>
              <p>Weekly Credit : 1000</p>
            </div>
          </div>
         
       </div>
    )
}