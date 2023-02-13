import type { IStudentDetail } from '../redux/api'

export const validate = (studentDetail: IStudentDetail): string | null => {
  const nameRegex = /^[A-Za-z]+$/
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
  const classNameRegex = /^[A-Za-z0-9]+$/

  if (studentDetail.classId === '') {
    return 'classId is required'
  }

  const errors: Record<string, string> = {}

  if ((studentDetail.fName === '') || !nameRegex.test(studentDetail.fName)) {
    errors.fName = 'fName is required and should only contain letters'
  }

  if ((studentDetail.lName === '') || !nameRegex.test(studentDetail.lName)) {
    errors.lName = 'lName is required and should only contain letters'
  }

  if ((studentDetail.DOB === '') || !dateRegex.test(studentDetail.DOB)) {
    errors.DOB = 'DOB is required and should be in MM/DD/YYYY format'
  }

  if ((studentDetail.class === '') || !classNameRegex.test(studentDetail.class)) {
    errors.class =
            'class is required and should only contain letters and numbers'
  }

  if (
    studentDetail.Score < 0 ||
        studentDetail.Score > 100 ||
        isNaN(studentDetail.Score)
  ) {
    errors.Score =
            'score is required and should be a number between 0 and 100'
  }

  if ((studentDetail.Grade === '') || !/^[A-F]$/.test(studentDetail.Grade)) {
    errors.Grade =
            'grade is required and should be a single character between A and F'
  }

  if (Object.keys(errors).length > 0) {
    return Object.values(errors)[0]
  }

  return null
}
