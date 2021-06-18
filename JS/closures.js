const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary; //приватная переменная, которую нельзя изменить напрямую, 
                            //а  только через конкретные методы

    return {
        raise(amount) {
            salary += amount;
        },

        lower(amount) {
            salary -= amount;
        },

        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`;
        },
    };
};

const obj = {
    salary: 1000
};

const salaryManager = salaryManagerFactory();
console.log('salaryManager (Bob) :>> ', salaryManager('Bob', 1234));