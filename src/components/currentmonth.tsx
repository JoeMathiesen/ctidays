function CurrentMonth(){
    const currMonth = new Date().getMonth();
    let monthNumber = currMonth;
    const monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = monthnames[monthNumber];
    return    (<div>{thisMonth}</div>)
  }
  export default CurrentMonth;