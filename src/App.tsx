import React from 'react';
import logo from './logo.svg';
import BirthdayCard from "./components/birthdaycard";
import BirthdayMonthYear from "./components/BirthdayMonthYear";
import AnniversaryMonthYear from "./components/AnniversaryMonthYear";
import AnniversaryCard from "./components/anniversarycard";
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  let page_one = <div>{BirthdayMonthYear()}{BirthdayCard()}</div>
  let page_two = <div>{AnniversaryMonthYear()}{AnniversaryCard()}</div>
  let pages = [{pagecontent: page_one, pageid: 1}, {pagecontent: page_two, pageid:2}]
  let [showBirthdays, setShowBirthdays] = useState(0)
  let [isBirthday, setIsBirthday] = useState(true)
  let [showAnniversaries, setShowAnniversaries] = useState(1)
  let [isAnniversary, setIsAnniversary] = useState(false)
  
  
  
  useEffect(() =>{
    setTimeout(() => {
      setShowBirthdays(showAnniversaries)
      setIsBirthday(false)
      setIsAnniversary(true)
    }, 28000)
  })

  return (
    <>
      {isBirthday? <>{pages.slice(showBirthdays, showBirthdays+1).map(n => <div key={n.pageid}>{n.pagecontent}</div>)}</>:<></>}
      {isAnniversary? <>{pages.slice(showAnniversaries, showAnniversaries+1).map(n => <div key={n.pageid}>{n.pagecontent}</div>)}</>:<></>}
    </>
  )
}

export default App;
