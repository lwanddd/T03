"use strict";
document.addEventListener('DOMContentLoaded', function() {
  let digitbtns = document.getElementsByClassName('number');
  let op = document.getElementsByClassName('operator');
  let dotb = document.getElementById('dot');
  let clb = document.getElementById('clear');
  let eqb = document.getElementById('equals');
 let rs = "0"
 let endwith = "0"
  for (let i = 0; i < digitbtns.length; i++) {
    digitbtns[i].addEventListener('click', digitOnClick);

    function digitOnClick() {
      if (rs == "0") {
        rs = rs.substring(1)
        displayvalue.textContent = displayvalue.textContent.substring(2)
      }
      rs += digitbtns[i].textContent
      displayvalue.textContent = rs
      //alert(digitbtns[i].textContent);
    }
  }
  for (let o = 0; o < op.length; o++) {
    op[o].addEventListener('click', oponclick);
    function oponclick() {
      if (op[o].textContent == "x") {
        rs += "*"
        //alert(rs.charAt(rs.length-1))
        if(rs.charAt(rs.length-1)== rs.charAt(rs.length-3)){
          rs = rs.slice(0,rs.length-1)
          alert("Input error")
        }
        if(rs.charAt(rs.length-2)=="+" || rs.charAt(rs.length-2)=="-" || rs.charAt(rs.length-2)=="/" || rs.charAt(rs.length-2)=="." ){
          rs = rs.slice(0,rs.length-1)
          alert("Input error")
        }
        displayvalue.textContent = rs
        //alert("*");
      }
      else {
        rs += op[o].textContent
        if(rs.charAt(rs.length-1)== rs.charAt(rs.length-2)){
          rs = rs.slice(0,rs.length-1)
          alert("Input error")
        }
        if(rs.charAt(rs.length-2)=="+" || rs.charAt(rs.length-2)=="-" || rs.charAt(rs.length-2)=="*" || rs.charAt(rs.length-2)=="/" || rs.charAt(rs.length-2)=="." ){
          rs = rs.slice(0,rs.length-1)
          alert("Input error")
        }
        displayvalue.textContent = rs
        //alert(op[o].textContent);
      }
    }
  }
  dotb.addEventListener('click', dotclick);

  function dotclick() {
    rs += "."
    if(rs.charAt(rs.length-1)== rs.charAt(rs.length-2)){
      rs = rs.slice(0,rs.length-1)
      alert("Input error")
    }
    if(rs.charAt(rs.length-2)=="+" || rs.charAt(rs.length-2)=="-" || rs.charAt(rs.length-2)=="*" || rs.charAt(rs.length-2)=="/" || rs.charAt(rs.length-2)=="." ){
          rs = rs.slice(0,rs.length-1)
          alert("Input error")
        }
    displayvalue.textContent = rs
    //alert(".");
  }
  clb.addEventListener('click', clclick);

  function clclick() {
    rs = "0"
    displayvalue.textContent = "0"
    //alert("0");
  }
  eqb.addEventListener('click', eqclick);

  function eqclick() {
    let r = eval(rs)
    displayvalue.textContent = r
    rs = "0"
    //alert("=");
  }
});
