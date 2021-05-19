function avg() {
    let sum = 0;
    let num = 0;
    for (let i = 0; i < arguments.length; i++) {
      num = Number.parseInt(arguments[i]);
      if (!isNaN(num)) sum += num;
    }
  
    let result = sum / arguments.length;
    return result;
}
  
export default avg;
