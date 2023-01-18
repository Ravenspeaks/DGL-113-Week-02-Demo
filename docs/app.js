"use strict";

function selectPlan( planName, monthlyRate ) {
    let annualRate = monthlyRate * 12;
    console.log( planName + " plan Selected! ");
    console.log( '$'+ monthlyRate + '/mo' );
    console.log( '$'+ annualRate + '/yr' );
}

