function retry(tries, time, func){
 
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{       
         if(tries !== 0 && func() === undefined){
           console.log('tries left: '+tries)
           retry(tries-1,time,func)
         }else if(tries === 0){
           //console.log('failed after '+tries+' tries')
           reject(console.log('failure, '+tries+' tries left'))
         }else if(func() !== undefined){
           //console.log('sukces')
           resolve(console.log('success, '+tries+' tries left'))
         }        
         },time)
     })
   }  
    
   function runAfter(time, func){
     return (...params)=>  {
       
       return new Promise((resolve)=>{      
         setTimeout(()=> {        
           resolve(func(...params))
         }, time)
       })   
     } 
   }
   // "test1"
   let x = 2;
   const retryValidX = retry( 5, 1000, ()=>{
     if(x>3){
       return 12
     }
   });
   
   runAfter(3500,()=> { x = 4})();
   retryValidX.then((r) =>{console.log(r)})
   
   const retryValidXBad = retry(5,1000,()=>{
    if (x > 5) {
    return 24;
    }
   });
   retryValidXBad.then(() => {}, (e) => console.log(e));
   