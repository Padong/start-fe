function random() {
    if (arguments.length === 1) {
      let num = arguments[0];
      if(!isNaN(num)){
        return Math.floor(Math.random() * num);
      }
      else{
        return -1;
      }

    } 
    else if (arguments.length === 2) {
      let min = arguments[0];
      let max = arguments[1];
      if((!isNaN(min)) && (!isNaN(max))){
        return Math.floor(Math.random() * max) + min; 
      }
      else{
        return -1;
      }
    }
}

export default random;