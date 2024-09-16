function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    }

    if (typeof obj.testScore !== "number" ||typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean") {
        return "Invalid Input";
    }
    if (obj.testScore >= 50 || obj.schoolGrade >= 30) {
        return "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        totalScore += 20;
    } else {
        return false;
    }
    return totalScore >= 80;
}

console.log(calculateFinalScore( {name: "Rajib", testScore: 15, schoolGrade:25,
    isFFamily:true }));