'use strict';
let money, time, appData;

function detectDayBudget() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    };

     appData = {
        budget: money,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {},
        income: [],
        savings: true
     };


    for (let i = 0; i < 2; i++){
        var a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется");
    
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    };

     appData.moneyPerDay = (appData.budget / 30).toFixed();

     alert("Ежедневный бюджет: " + appData.moneyPerDay);
     return appData;
};
detectDayBudget();

function detectLevel() {
 if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
 } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
 } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
 } else {
    console.log("Произошла ошибка");
 }
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
   for (let i = 1; i < 4; i++){
      var a = prompt("Статья необязательных расходов");
          
      if ((typeof(a)) === "string" && (typeof(a)) != null  && a != ""  && a.length < 50) {
          console.log("done");
          appData.optionalExpenses[i] = a;
      } else {
          i--;
      }
    }
};
chooseOptExpenses();
