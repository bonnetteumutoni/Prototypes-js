// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// eatureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature,
//  and simulate access attempts using if-else and switch statements for different roles.

function featureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName=featureName;
    this.isEnabled=isEnabled;
    this.userGroupAccess=userGroupAccess;
    this.enableOrDisable=function(flagStatus){
     if(flagStatus=="Disabled"){
        return flagStatus="Enabled"; 
     }else{
        return flagStatus="Disabled";
     }
    }
}
featureToggle.prototype.canAccess=function(userRole){
    switch(userRole){
        case "betaTesters":
           return true;
        case "admin":
           return true;
        case "cutomer":
            return false;
        default:
            return false;
    }}


const feature=new featureToggle("Product catalog",true,["admins","beta testers"]);
console.log(feature);
console.log(feature.enableOrDisable("Enabled"));
console.log(feature.canAccess("betaTesters"));
console.log(feature.canAccess("admin"));
console.log(feature.canAccess("customer"));
console.log(feature.canAccess("Guest"));

// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// then add prototype methods to calculate total earnings, 
// filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function freelancerTimeLog(freelancerName,projectDetails,logs){
    this.freelancerName=freelancerName;
    this.projectDetails=projectDetails;
    this.logs=logs;
    let weeklyDate=logs.filter(item=>item.date==1 && item.date<=7)
    let totalHours=0;
    for(let i=0;i<weeklyDate.length;i++){
        totalHours+=logs.hoursWorked[i];
    }
    if(totalHours>40){
        console.log(" Weekly hours exceed 40");
    }else{
        console.log("Weekly hours don't exceed 40");
    }
}
freelancerTimeLog.prototype.calculateEarnings=function(earnings){
    let total=0;
     for(let i=0;i<earnings.length;i++){
     total+=earnings[i];
     }
     return `The total earnings is ${total}`;
}

const freelancer=new freelancerTimeLog("Jonathan",["Construction",4],[{dates:[1,2,3,4,5,6,7],hoursWorked:[3,4,7,10,9,15,9]}]);
console.log(freelancer);
console.log(freelancer.calculateEarnings([10000,500000,30000,70000]));

// // You are developing a startup’s order management system where an Order constructor function should contain customer
// //  (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string),
// //   then implement prototype methods to compute total cost, update order status based on payment,
// //  and categorize order urgency using switch and conditional statements.

function orderManagement(customer,items){
    this.customer=customer;
    this.items=items;
    this.orderUrgencyCategory=function(order){
         switch(order){
            case "high":
                console.log("Emergent");
                break;
            case "middle":
                console.log("Moderate");
                break;
            case "low":
                console.log("Approve later");
                break;
            default:
                console.log("Disapproved");
                break;
         }
    }
}
orderManagement.prototype.calculateCost=function(unitPrice){
    let totalCost=0;
   for(let i=0;i<unitPrice.length;i++){
    totalCost+=unitPrice[i];
   }
   return totalCost;
}

orderManagement.prototype.updateStatus=function(){
   if(this.status=="pending"){
    return this.status="Paid";
   }else{
    return this.status="Pending"
   }
}
const order=new orderManagement(["Jony","jony@gmail.com"],["Juice","30litres",8300,"pending"]);
console.log(order);
console.log(order.calculateCost([45,8300,374]));
console.log(order.updateStatus());
// // In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
// //  performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// //  then use prototypes to calculate an average score,
// //  classify performance level using control flow, and add new feedback based on conditions.

class Employee{
    constructor(idNumber,name,performanceMetrics,feedback){
        this.idNumber=idNumber;
        this.name=name;
        this.performanceMetrics=performanceMetrics;
        this.feedback=feedback;
    }
    performance(feedback){
        if(feedback=="Awesome"){
            return this.feedback.push(feedback);
        }else{
            return "Feedback is not aprroved"
        }
    }
}
Employee.prototype.calculateAverage=function(score){
    let totalCost=0;
   for(let i=0;i<score.length;i++){
    totalCost+=score[i];
   }
   let average=totalCost/score.length;
   return average;
}

const employee=new Employee(21,"Jane",["communication", "efficiency", "reliability"],["Excellent","Genius"]);
console.log(employee);
console.log(employee.performance("Awesome"));
console.log(employee.calculateAverage([45,78,98,56,98]))
// // Build a simple e-learning system where a Course class has properties: title (string), instructor 
// // (object with name and expertise), and students (array of objects with name and completionStatus), 
// // then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, 
// // and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
    this.title=title;
    this.instructor=instructor;
    this.students=students;
    }
}
Course.prototype.studentCompleted=function(){

}