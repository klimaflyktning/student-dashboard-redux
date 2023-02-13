import type { IStudentDetail } from '../redux/api'
export const generateMockData = (count: number): IStudentDetail[] => {
  const newMockData: IStudentDetail[] = []
  const grades = ['A', 'B', 'C', 'D', 'F']
  for (let i = 0; i < count; i++) {
    const randomGrade = grades[Math.floor(Math.random() * grades.length)]
    newMockData.push({
      classId: `421-${i}`,
      fName: `qrw-${i}`,
      lName: `wrq-${i}`,
      DOB: `11/11/199${i}`,
      class: `${i + 1}`,
      Score: 70 + i * 3,
      Grade: randomGrade
    })
  }
  return newMockData
}
