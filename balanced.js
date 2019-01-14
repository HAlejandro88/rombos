const balancedOrNot = (expressions,maxReplacements)=>{

    let rombo = new RegExp("<>", "g");
    let mayor = new RegExp(">", "g");
	let status = 1;
	for (let [index,symbol] of expressions.entries()){
        
        expressions[index]=symbol.replace(rombo,"");
        while(expressions[index].includes("<>")){
            expressions[index] = expressions[index].replace(rombo,"");
        }
       if(expressions[index].includes('<')){
           status=0;
       } else if (expressions[index].includes(mayor) && expressions[index].length <= maxReplacements[index]){
           status = 1;
       }else {
           status = 0;
       }
       return status;
    }
    

    
    
    console.log(expressions);
    
		

   
}

balancedOrNot(["<<<>>>>><<<<<<>", "<>><>><<<<<<<", "<><>>><<<>", "<><>"], [5,3,5])