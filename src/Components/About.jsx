export default function About(){
    return <div className="bg-gray-800 text-white ">
        <div className="ml-10 mr-10 bg-gray-800 align-middle">
            <div className="flex flex-row justify-evenly   ">
            <div className="text-blue-200 text-3xl font-bold">
                about
            </div>
            <div className=" bg-blue-200 border-2 w-full h-1 rounded-full mt-5 ml-2 ">
            </div>
            </div>
            
        <div className="text-gray-200 ml-10 mr-10 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi
             doloremque veritatis possimus saepe magnam labore id animi minima,
              accusamus consequatur, optio eius recusandae reiciendis, ab natus distinctio nobis asperiores!        
        </div>

             <div className="flex flex-row mt-10 mb-10 justify-evenly">
                <div className="flex flex-col ">
                    <div className="text-4xl font-semibold mb-1">Front-End</div>
                    <div className="underline">1 Year Experience </div>
                </div>
                <div className="flex flex-col ">
                    <div className="text-4xl font-semibold mb-1">Back-End</div>
                    <div className="underline">1 Year Experience </div>
                </div>
                <div className="flex flex-col ">
                    <div className="text-4xl font-semibold mb-1">Application Support</div>
                    <div className="underline">1 Year Experience </div>
                </div>
             </div>
        </div>
    
    </div>
}