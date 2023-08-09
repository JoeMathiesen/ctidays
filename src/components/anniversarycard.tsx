import {useState, useEffect} from 'react';
import data from "./adata.json";

const currMonth = new Date().getMonth();
    let monthNumber = currMonth;
    const monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthnumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    let thisMonth = monthnames[monthNumber]; 
    let thisMonthNumber = monthnumbers[monthNumber]

function getPageQuantity() {
    const itemsPerPage = 18;
    let totalItems = data.length;
    let pageQuantity;
    if (totalItems % itemsPerPage != 0)
        {
            pageQuantity = Math.floor(totalItems / itemsPerPage) + 1;
        }
    else {
        pageQuantity = totalItems / itemsPerPage;
        }
    return pageQuantity;    
}

function AnniversaryCard () {
    let [showElement, setShowElement] = useState(0);
    let [delayElement, setDelayElement] = useState(true);
    let [count, setCount] = useState(0);
    let currentMonth = thisMonth;
    let currentMonthNumber = thisMonthNumber;
    let endShowElement = showElement + 18;
    
    useEffect(() => {
        setTimeout(() =>{
            setDelayElement(false);
        },28000)
    })

    useEffect(() =>{
        if (!delayElement) {
            setTimeout(() => {
                setShowElement(showElement + 18)
                setCount(count = count + 1)
                
            }, 7000)
        }
    })
    
    const innerHTML = <div className="card-list">{data.filter(data => data.AnniMonth == currentMonthNumber).slice(showElement, endShowElement).map(n => 
        <div key={n.EmployeeNumber} className="birthday-card">
            <div className="birthday-card-content">
                <h2>{n.FirstName.charAt(0).toUpperCase()}{n.FirstName.substring(1, 20).toLowerCase()} {n.LastName.charAt(0).toUpperCase()}{n.LastName.substring(1,50).toLowerCase()}</h2>
                <h4>Years: {n.YearsOfService} | {n.AnniMonth.replace(n.AnniMonth, currentMonth)} {n.AnniDate}</h4>
            </div>
        </div>)}
    </div>
    return(
        <>
            {delayElement ? <div></div> : <>{innerHTML}</>}
        </>
        )
    };

export default AnniversaryCard;
