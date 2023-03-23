import React from 'react';

function Footer() {   
    return (
    <div id="footer" style={{position: 'fixed',bottom: '0',left: '50%',transform: 'translateX(-50%)',backgroundColor:'#f5f5f5', width: '100%',padding: '10px',textAlign: 'center'}}>
         
      
      <h3 className = " text-lg">Connect with us:</h3>
      <div className="grid md:grid-cols-5 grid-cols-1 mt-6 gap-1"></div>
        <a href="https://github.com/Vnsiah"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
        <a href="https://linkedin.com/in/vida-nsiah-b642bb163"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>  
       
    
    </div>




    )
}

export default Footer;