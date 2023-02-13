/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import type { IStudentDetail } from '../redux/api'
import { useAppDispatch } from '../redux/hooks'
import { editStudentDetailsThunk } from '../redux/slices/studentDetailsSlice'
import { getGradeFromScore } from '../utils/helpers'
import PropTypes from 'prop-types'

const EditDetail: React.FC<{ navigation: any, route: any }> = ({
  navigation,
  route
}) => {
  const [classId, setClassId] = useState<string>('TTT123')
  const [fName, setFName] = useState<string>('Hans')
  const [lName, setLName] = useState<string>('Smecker')
  const [DOB, setDOB] = useState<string>('01/02/95')
  const [className, setClassName] = useState<string>('Databases')
  const [score, setScore] = useState<number>(80)
  // const [grade, setGrade] = useState<string>("B");

  // const [studentDetails, setStudentDetails] = useContext(studentDetailsContext);
  /*
  const studentDetails: IStudentDetailWithId[] = useAppSelector(
    (state: RootState): IStudentDetailWithId[] => state.studentDetails.studentDetails
  );
  */

  const { id } = route.params
  const dispatch = useAppDispatch()

  const editDetailHandler = (myId: string, navigation: any): void => {
    const mySd: IStudentDetail = {
      classId,
      fName,
      lName,
      DOB,
      class: className,
      Score: score,
      Grade: getGradeFromScore(score)
    }

    // setStudentDetails((sd_arr) => sd_arr.filter((x) => x.id !== my_id));
    // setStudentDetails((sd_arr) => [...sd_arr, my_sd]);

    // dispatching delete and then add, less than ideal..
    // dispatch(deleteStudentDetailsThunk(my_id));
    // dispatch(addStudentDetailsThunk(my_sd));

    dispatch(editStudentDetailsThunk({ id: myId, sd: mySd }))
      .then((result) => {
        // Handle result as necessary
        console.log('Edit student details successful', result)
        navigation.navigate('Home')
      })
      .catch((error) => {
        // Handle error as necessary
        console.error('Failed to edit student details:', error)
      })
  }

  return (
        <>
            <Text>Fill out form below to edit detail with id {id}:</Text>
            <TextInput
                onChangeText={(newVal: string) => { setClassId(newVal) }}
                placeholder="classId"
            />
            <TextInput
                onChangeText={(newVal: string) => { setFName(newVal) }}
                placeholder="fName"
            />
            <TextInput
                onChangeText={(newVal: string) => { setLName(newVal) }}
                placeholder="lName"
            />
            <TextInput
                onChangeText={(newVal: string) => { setDOB(newVal) }}
                placeholder="DOB"
            />
            <TextInput
                onChangeText={(newVal: string) => { setClassName(newVal) }}
                placeholder="className"
            />
            <TextInput
                onChangeText={(newVal: string) => { setScore(Number(newVal)) }}
                placeholder="score"
            />
            <Button
                onPress={() => { editDetailHandler(route.params.id, navigation) }}
                title="Edit"
            ></Button>
        </>
  )
}
EditDetail.propTypes = {
  navigation: PropTypes.any.isRequired,
  route: PropTypes.any.isRequired
}

export default EditDetail
