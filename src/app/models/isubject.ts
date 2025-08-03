export interface ISubject {
  id: number,
  teacherName : string,
  subjectName: string,
  subjectDescription: string,
  subjectPrice: number,
  imgUrl: string
}

export interface IISubject {
    subjectID:number;
    subjectName:string;
    subjectDescription:string;
    instructorID:number;
    classID:number;
    trackID:number;
}

