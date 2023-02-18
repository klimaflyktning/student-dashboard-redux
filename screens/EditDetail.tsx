/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useState, useCallback, useMemo } from 'react'
import { Button, Text, TextInput } from 'react-native'
import type { IStudentDetail } from '../redux/api'
import { useAppDispatch } from '../redux/hooks'
import { editStudentDetailsThunk } from '../redux/slices/studentDetailsSlice'
import { getGradeFromScore } from '../utils/helpers'
import PropTypes from 'prop-types'

const EditDetail: React.FC<{ navigation: any, route: any }> = React.memo((props) => {
  const { navigation, route } = props
  const [formValues, setFormValues] = useState({
    classId: 'TTT123',
    fName: 'Hans',
    lName: 'Smecker',
    DOB: '01/02/95',
    className: 'Databases',
    score: 80,
  })
  const { id } = route.params
  const dispatch = useAppDispatch()

  const grade = useMemo(() => getGradeFromScore(formValues.score), [formValues.score])

  const editDetailHandler = useCallback((myId: string, navigation: any) => {
    const mySd: IStudentDetail = {
      classId: formValues.classId,
      fName: formValues.fName,
      lName: formValues.lName,
      DOB: formValues.DOB,
      class: formValues.className,
      Score: Number(formValues.score),
      Grade: grade
    }
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
  }, [dispatch, formValues, grade])

  const handleFormValueChange = useCallback((fieldName: string, value: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [fieldName]: value
    }))
  }, [])

  return (
        <>
            <Text>Fill out form below to edit detail with id {id}:</Text>
            <TextInput
                onChangeText={(newVal: string) => handleFormValueChange('classId', newVal)}
                placeholder="classId"
                value={formValues.classId}
            />
            <TextInput
                onChangeText={(newVal: string) => handleFormValueChange('fName', newVal)}
                placeholder="fName"
                value={formValues.fName}
            />
            <TextInput
                onChangeText={(newVal: string) => handleFormValueChange('lName', newVal)}
                placeholder="lName"
                value={formValues.lName}
            />
            <TextInput
                onChangeText={(newVal: string) => handleFormValueChange('DOB', newVal)}
                placeholder="DOB"
                value={formValues.DOB}
            />
            <TextInput
                onChangeText={(newVal: string) => handleFormValueChange('className', newVal)}
                placeholder="className"
                value={formValues.className}
            />
            <TextInput
  onChangeText={(newVal: string) => handleFormValueChange('score', newVal)}
  placeholder="score"
  value={formValues.score.toString()}
/>
            <Button
                onPress={() => { editDetailHandler(route.params.id, navigation) }}
                title="Edit"
            ></Button>
        </>
  )
})
EditDetail.propTypes = {
  navigation: PropTypes.any.isRequired,
  route: PropTypes.any.isRequired
}

export default EditDetail
