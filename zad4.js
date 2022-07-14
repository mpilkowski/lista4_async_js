// func => func => promise
function runAfter(time, func){
    return (x,y)=>  {
      let result = func(x,y)
      return new Promise((res)=>{
        setTimeout(res(result), time)
      })   
    } 
  }
  
  const delayedAdd = runAfter(2000, (x, y) => x + y);
  delayedAdd(2, 4).then((r) => console.log("2 + 4 =", r));