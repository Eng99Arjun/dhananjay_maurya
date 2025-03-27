import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 function Navbar() {
    return <>
        <div className=" font-mono bg-gray-800 text-gray-100 flex flex-row justify-between p-4">
            <div><span className='text-lg font-bold'>Dhananjay</span>Maurya</div>
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