"use strict";

function calculateAnnualRate( monthlyRate) {
    let annualRate = monthlyRate * 12;
    return annualRate;
}

function selectPlan( planName, monthlyRate ) {
    let annualRate = calculateAnnualRate( monthlyRate );
    console.log( planName + " plan Selected! ");
    console.log( '$'+ monthlyRate + '/mo' );
    console.log( '$'+ annualRate + '/yr' );

    let planNameElement = document.getElementById( "planname" );
    planNameElement.innerHTML = planName;

    let monthlyRateElement = document.getElementById( "monthlyrate" );
    monthlyRateElement.innerHTML = '$' + monthlyRate + '/mo';

    let annualRateElement = document.getElementById( "annualrate" );
    annualRateElement.innerHTML = '$' + annualRate + '/yr';

    let today = new Date();
}


