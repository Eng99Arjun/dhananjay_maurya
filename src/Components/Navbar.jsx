import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 function Navbar() {
    return <>
        <div className=" bg-gray-800 text-gray-100 flex flex-row justify-between p-4 text-2xl">
            <div><span className='text-3xl font-bold'>Dhananjay</span>Maurya</div>
            <div className="flex flex-row space-x-4">
                <div>Home</div>
                <div>About</div>
                <div>Work</div>
            </div>
            <div>Github</div>
        </div>
    </>
}

export default Navbar