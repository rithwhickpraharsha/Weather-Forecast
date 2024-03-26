import Login from "./Login";


export default function LoginMain(){
    return (
        <div className='h-screen flex justify-center  bg-black m-0'>
         <div className='flex flex-col text-white m-10'>
          <div className='font-bold text-4xl mb-10 font-serif'>ApplyIn.co Welcomes You! 💐</div>
         <img src='https://www.svgrepo.com/show/303108/google-icon-logo.svg' className='h-20 mb-10'></img>
         <div className='font-bold text-4xl mb-10 font-serif flex justify-center'>Log in  with Google</div> 
        <div className='flex justify-center'><Login /></div> 
        </div>
        </div>
      )
}