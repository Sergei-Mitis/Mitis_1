
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnaname;
    document.getElementById('birthYearOutput').innerText =  initPerson.yar;
    document.getElementById('birthDayOutput').innerText =  initPerson.day;
    document.getElementById('birthMonthOutput').innerText =  initPerson.month;
    document.getElementById('genderOutput').innerText =  initPerson.gender;
};



