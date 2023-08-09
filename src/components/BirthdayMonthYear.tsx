function BirthdayMonthYear(){
    const currMonth = new Date().getMonth();
    let monthNumber = currMonth;
    const monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = monthnames[monthNumber];
    return    (<div className="page-header">
        <h1>{thisMonth} Birthdays</h1>
        </div>)
  }
  export default BirthdayMonthYear;