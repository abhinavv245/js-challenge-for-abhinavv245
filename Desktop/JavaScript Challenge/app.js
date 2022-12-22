var row=1;
fetch("https://jsonplaceholder.typicode.com/users").then(data=>{
  
    return data.json(); //converted the data to object
}).then(users=>{
    users.forEach(user=>{
       
        const display= document.getElementById('display');
        const newRow= display.insertRow(row);
     
        const cell1=newRow.insertCell(0);
        const cell2=newRow.insertCell(1);
        const cell3=newRow.insertCell(2);
        const cell4=newRow.insertCell(3);
        const cell5=newRow.insertCell(4);
        const cell6=newRow.insertCell(5);
        const cell7=newRow.insertCell(6);
        const cell8=newRow.insertCell(7);
        
     
        cell1.innerText=user.id;
        cell2.innerText=user.name;
        cell3.innerText=user.username;
        cell4.innerText=user.email;
        let addr=user.address;
        cell5.innerText=addr.street+','+addr.suite+','+addr.city+','+addr.zipcode;
        cell6.innerText=user.phone;
        cell7.innerText=user.website;
        let cname=user.company;
        cell8.innerText=cname.name+','+cname.catchPhrase+','+cname.bs;
        row++;
    })
}).catch(error=>{
    const header= document.getElementById('header');
    
     header.innerText='Something went wrong while fetching the users.';
});
 

//assignment-1
const form= document.getElementById('form');
const fname= document.getElementById('fname');
const lname= document.getElementById('lname');
const email= document.getElementById('email');
const address= document.getElementById('address');
const username= document.getElementById('username');
const phone= document.getElementById('phone');
const website= document.getElementById('website');
const company= document.getElementById('company');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   checkInputs();
   if(validate()==true){
    displayDetails();
   }
});

function checkInputs(){

const fnamevalue=fname.value.trim();
const lnamevalue=lname.value.trim();
const emailvalue=email.value.trim();
const addressvalue=address.value;
const usernamevalue=username.value.trim();
const phonevalue=phone.value.trim();
const websitevalue=website.value.trim();
const companyvalue=company.value;

//first name
if(fnamevalue==''){
    setErrorFor(fname,'This field is required.');
} else if(!isValidname(fnamevalue)){
    setErrorFor(fname,'Invalid first name. At least 3 characters required (alphaumeric only).');
}
else{
   setSuccessFor(fname);
}
//last name
if(lnamevalue==''){
    setErrorFor(lname,'This field is required.');
} else if(!isValidname(lnamevalue)){
    setErrorFor(lname,'Invalid last name. At least 3 characters required (alphaumeric only).');
}
else{
   setSuccessFor(lname);
}
//username
if(usernamevalue==''){
    setErrorFor(username,'This field is required.');
} else if(!isValid(usernamevalue)){
    setErrorFor(username,'Invalid username. Only dot and alphanumeric characters allowed.');
}
else{
   setSuccessFor(username);
}
//email
if(emailvalue==''){
    setErrorFor(email,'This field is required.');
}else if(!isEmail(emailvalue)){
    setErrorFor(email,'Please enter a valid email address');
}
else{
   setSuccessFor(email);
}
//address
if(addressvalue==''){
    setErrorFor(address,'This field is required.');
}else{
    setSuccessFor(address);
}
//phone
if(phonevalue==''){
    setErrorFor(phone,'This field is required.');
}else if(!isPhone(phonevalue)){
    setErrorFor(phone,'Invalid phone number. Enter in this format ddd-ddd-dddd.');
}
else{
   setSuccessFor(phone);
}
//website
if(websitevalue==''){
   
}
else if(!isValidWebsite(websitevalue)){
    setErrorFor(website,'Please enter a valid website link');
}else{
    setSuccessFor(website);
}
if(companyvalue==''){
   
}
else{
    setSuccessFor(company);
}

}

function setErrorFor(input,message){
  const formControl=input.parentElement; //.form-control
  const small=formControl.querySelector('small');

  //add error message
  small.innerText=message;

  //add error class
  formControl.className='form-control error';


}

function setSuccessFor(input){
    const formControl=input.parentElement; //.form-control
    //add success class
    formControl.className='form-control success';

}

function isValid(username){
    var expr = /^[a-zA-Z0-9.]*$/;
    return expr.test(username);
}

function isEmail(email){
    var expr = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return expr.test(email);
}

function isValidname(name){
    if(name.length<3) return false;
    return  /^[a-zA-Z0-9]*$/.test(name);
}

function isPhone(phone){
var expr= /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ ;
return expr.test(phone);
}

function isValidWebsite(website){
 return /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(website);
}




function validate(){
    const inputContainers=form.querySelectorAll('.form-control');
    let result=true;
    inputContainers.forEach((container)=>{
     if(container.classList.contains('error')){
    result=false;
     }
    });
    return result;
}
// var row=1;

function displayDetails(){

   const display= document.getElementById('display');
   const newRow= display.insertRow(row);

   
   const cell1=newRow.insertCell(0);
   const cell2=newRow.insertCell(1);
   const cell3=newRow.insertCell(2);
   const cell4=newRow.insertCell(3);
   const cell5=newRow.insertCell(4);
   const cell6=newRow.insertCell(5);
   const cell7=newRow.insertCell(6);
   const cell8=newRow.insertCell(7);

   cell1.innerText=row;
   cell2.innerText=fname.value+' '+lname.value;
   cell3.innerText=username.value;
   cell4.innerText=email.value;
   cell5.innerText=address.value;
   cell6.innerText=phone.value;
   cell7.innerText=website.value;
   cell8.innerText=company.value;
   row++;
   
}
