export interface IStudentDetail {
  classId: string
  fName: string
  lName: string
  DOB: string
  class: string
  Score: number
  Grade: string
}

export interface IStudentDetailWithId extends IStudentDetail {
  id: string
}

// utility function to simulate slowness in an API call
export const sleep = async (time: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, time))
}
