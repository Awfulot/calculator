
    //function that display value
    function dis(val)
    {
    document.getElementById("result").value+=val;
    }
  
    function clearScreen()
    {
        document.getElementById("result").value="";
    }
  
 
    function calc()
    {
      
      let x=document.getElementById("result").value
      let y=eval(x)
      
      document.getElementById("result").value=y


    }

  

