// func => func => promise
function runAfter(time, func){
  return (...params)=>  {
    
    return new Promise((resolve)=>{      
      setTimeout(()=> {        
        resolve(func(...params))
      }, time)
    })   
  } 
}
  
  const delayedAdd = runAfter(2000, (x, y) => x + y);
  delayedAdd(2, 4).then((r) => console.log("2 + 4 =", r));