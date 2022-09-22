import { NextPage } from 'next'; 
import Link from 'next/link';

const Error: NextPage = () => {
    return (
        <>
        <div className="mt-10">

          <h1 className='flex  justify-center  text-2xl '>page not found</h1>   
          <div className="flex justify-center mt-5"><Link href="/" className='  '>Go to home</Link> </div>
          
        </div>
       
        </>
    );
};

export default Error;