import React from 'react';

function Footer() {   
    return (
    <div className="footer" id="footer absolute bottom-0 bg-slate-900 text-white inset-x-0 md:text-md text-sm py-4 text-center font-mono mt-20">
         
      
    
      <div className="grid md:grid-cols-5 grid-cols-1 mt-6 gap-4"></div>
        <a href="https://github.com/Vnsiah"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
        <a href="https://linkedin.com/in/vida-nsiah-b642bb163"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>  
        <h2 className = "mt-4">Developed using <span className="text-yellow-400">React</span> and <span className="text-yellow-400">SASS</span></h2>
    
    </div>




    )
}

export default Footer;