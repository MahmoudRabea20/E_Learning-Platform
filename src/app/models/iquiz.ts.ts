export interface IQuiz {
    id:number;
    lessonTitle:string;
    quizname:string;
    quizTotalMarks:number;
    questions:string[];
    mark:number;
    correctAnswer:string;
    options:string[];
}
