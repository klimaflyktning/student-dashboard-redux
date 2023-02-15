import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { addStudentDetailsThunk } from '../redux/slices/studentDetailsSlice';
import { useAppDispatch } from '../redux/hooks';
import { generateMockData } from '../utils/mockData';
import { IStudentDetail } from '../redux/api';
import { validate } from '../utils/Validate';
import { styles } from '../types/styles';

interface AddDetailProps {}

const AddDetail: React.FC<AddDetailProps> = () => {
    const [classId, setClassId] = useState<string>('');
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [DOB, setDOB] = useState<string>('');
    const [className, setClassName] = useState<string>('');
    const [score, setScore] = useState<string>('0');
    const [Grade, setGrade] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Define dispatch function from Redux store
    const dispatch = useAppDispatch();

    // Function to add mock data to the store
    const addMockDataHandler = async (): Promise<void> => {
        const mockData = generateMockData(3);
        try {
            await dispatch(addStudentDetailsThunk(mockData[0]));
        } catch (error) {
            console.error('An error occurred while adding mock data:', error);
        }
        for (let i = 0; i < mockData.length; i++) {
            await dispatch(addStudentDetailsThunk(mockData[i]));
        }
    };

    // Function to add the new student detail to the store and reset input fields
    const addDetailHandler = async (): Promise<void> => {
        setError('');
        const mySd: IStudentDetail = {
            classId,
            fName,
            lName,
            DOB,
            class: className,
            Score: parseInt(score, 10),
            Grade
        };
        // Validate input details
        const errorMessage = validate(mySd);
        if (errorMessage !== null) {
            setError(errorMessage);
            return;
        }
        // Add the new student detail to the store
        await dispatch(addStudentDetailsThunk(mySd));
        // Reset input fields to default values
        setClassId('');
        setFName('');
        setLName('');
        setDOB('');
        setClassName('');
        setScore('0');
        setGrade('');
    };

    const handleScoreChange = (text: string) => {
        const numberValue = parseInt(text, 10);
        if (isNaN(numberValue)) {
            setScore('0');
        } else {
            setScore(text);
        }
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { flex: 1 }]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.content}>
                <View style={styles.row}>
                    <View style={styles.col2}>
                        <InputField
                            label="Class ID"
                            placeholder="classId"
                            value={classId}
                            onChangeText={setClassId}
                            error={
                                error?.includes('classId') ? error : undefined
                            }
                        />
                    </View>
                    <View style={styles.col2}>
                        <InputField
                            label="First Name"
                            placeholder="fName"
                            value={fName}
                            onChangeText={setFName}
                            error={error?.includes('fName') ? error : undefined}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col2}>
                        <InputField
                            label="Last Name"
                            placeholder="lName"
                            value={lName}
                            onChangeText={setLName}
                            error={error?.includes('lName') ? error : undefined}
                        />
                    </View>
                    <View style={styles.col2}>
                        <InputField
                            label="Date of Birth"
                            placeholder="DOB"
                            value={DOB}
                            onChangeText={setDOB}
                            error={error?.includes('DOB') ? error : undefined}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col2}>
                        <InputField
                            label="Class"
                            placeholder="className"
                            value={className}
                            onChangeText={setClassName}
                            error={
                                error?.includes('className') ? error : undefined
                            }
                        />
                    </View>
                    <View style={styles.col2}>
                        <InputField
                            label="Score"
                            placeholder="score"
                            value={score.toString()}
                            onChangeText={handleScoreChange}
                            keyboardType="numeric"
                            error={error?.includes('score') ? error : undefined}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col2]}>
                        <InputField
                            label="Grade"
                            placeholder="grade"
                            value={Grade}
                            onChangeText={setGrade}
                            error={error?.includes('grade') ? error : undefined}
                        />
                    </View>
                    <View style={[styles.col2]}>
                        <View style={styles.row}>
                            <View style={[styles.col10]}>
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={addDetailHandler}
                                >
                                    <Text style={styles.addButtonText}>
                                        Add Detail
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.col2]}>
                                <View style={styles.row}>
                                    <View style={[styles.col12]}>
                                        <TouchableOpacity
                                            onPress={addMockDataHandler}
                                            style={styles.addMockButton}
                                        >
                                            <Text style={{ color: '#FFFFFF' }}>
                                                Add Mock Data
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    error?: string;
    onChangeText: (value: string) => void;
    keyboardType?: 'default' | 'numeric';
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    value,
    error,
    onChangeText,
    keyboardType = 'default'
}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default AddDetail;
