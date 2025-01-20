export type TSemesterTable = {
    _id: string,
    name: string,
    code: number,
    startMonth: string,
    endMonth: string,
    year: string
}

export type TAcademicSemester = {
    _id: string,
    name: string,
    year: string,
    code: string,
    startMonth: string,
    endMonth: string,
    createdAt: string,
    updateAt: string,
    __v: number,
}