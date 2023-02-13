/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react'
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { IStudentDetail } from '../redux/api'
import { useAppDispatch } from '../redux/hooks'
import { addStudentDetailsThunk } from '../redux/slices/studentDetailsSlice'
import { styles } from '../styles.js'
import { validate } from '../utils/Validate'
import { generateMockData } from '../utils/mockData'

const AddDetail = (): JSX.Element => {
  const [classId, setClassId] = useState<string>('')
  const [fName, setFName] = useState<string>('')
  const [lName, setLName] = useState<string>('')
  const [DOB, setDOB] = useState<string>('')
  const [className, setClassName] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [Grade, setGrade] = useState<string>('B')
  const [error, setError] = useState<string>('')

  // Define dispatch function from Redux store
  const dispatch = useAppDispatch()

  // Create an object containing the details of a new student
  const mySd: IStudentDetail = {
    classId,
    fName,
    lName,
    DOB,
    class: className,
    Score: score,
    Grade
  }
  const addMockDataHandler = async (): Promise<void> => {
    const mockData = generateMockData(3)
    try {
      await dispatch(addStudentDetailsThunk(mockData[0]))
    } catch (error) {
      console.error('An error occurred while adding mock data:', error)
    }
    for (let i = 0; i < mockData.length; i++) {
      await dispatch(addStudentDetailsThunk(mockData[i]))
    }
  }
  // Function to add the new student detail to the store and reset input fields
  const addDetailHandler = async (): Promise<void> => {
    setError('')
    // Validate input details
    const errorMessage = validate(mySd)
    if (errorMessage !== null) {
      setError(errorMessage)
      return
    }
    // Add the new student detail to the store
    await dispatch(addStudentDetailsThunk(mySd))
    // Reset input fields to default values
    setClassId('')
    setFName('')
    setLName('')
    setDOB('')
    setClassName('')
    setScore(8)
    setGrade('')
  }

  return (
        <KeyboardAvoidingView
            style={[styles.container, { flex: 1 }]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.content}>
                <View style={styles.row}>
                    <View style={[styles.col, styles.col1]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="classId"
                                value={classId}
                                onChangeText={setClassId}
                            />
                        </View>
                        {error?.includes('classId') && error !== '' && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                    <View style={[styles.col, styles.col2]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="fName"
                                value={fName}
                                onChangeText={setFName}
                            />
                        </View>
                        {error?.includes('fName') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                    <View style={[styles.col, styles.col3]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="lName"
                                value={lName}
                                onChangeText={setLName}
                            />
                        </View>
                        {error?.includes('lName') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                    <View style={[styles.col, styles.col4]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="DOB"
                                value={DOB}
                                onChangeText={setDOB}
                            />
                        </View>
                        {error?.includes('DOB') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, styles.col5]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="className"
                                value={className}
                                onChangeText={setClassName}
                            />
                        </View>
                        {error?.includes('className') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                    <View style={[styles.col, styles.col5]}>
                        <View
                            style={[
                              styles.inputWrapper,
                              styles.inputWrapperNumeric
                            ]}
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="score"
                                value={score.toString()}
                                onChangeText={(text) => {
                                  setScore(Number(text))
                                }}
                                keyboardType="numeric"
                            />
                        </View>
                        {error?.includes('score') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                    <View style={[styles.col, styles.col5]}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="grade"
                                value={Grade}
                                onChangeText={setGrade}
                            />
                        </View>
                        {error?.includes('grade') && (
                            <Text style={styles.error}>{error}</Text>
                        )}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.addButton} onPress={addDetailHandler}>
  <Text style={styles.addButtonText}>Add Detail</Text>
</TouchableOpacity>
                        <Text style={{ color: '#FFFFFF' }}>Add</Text>

                    <TouchableOpacity
                        onPress={addMockDataHandler}
                        style={styles.addMockButton}
                    >
                        <Text style={{ color: '#FFFFFF' }}>Add Mock Data</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
  )
}

export default AddDetail
