/* eslint-disable react/react-in-jsx-scope */
import { DataTable } from 'react-native-paper';
import { Button, StyleSheet, View, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import type { IStudentDetailWithId } from '../redux/api';
import type { RootState } from '../redux/store';
import { useEffect } from 'react';
import {
    deleteStudentDetailsThunk,
    fetchStudentDetailsThunk
} from '../redux/slices/studentDetailsSlice';
import React from 'react';
const DashboardTable = ({ navigation }: any): JSX.Element => {
    const headerNames = [
        'classId',
        'fName',
        'lName',
        'DOB',
        'className',
        'Score',
        'Grade'
    ];

    const dispatch = useAppDispatch();
    const studentDetails: IStudentDetailWithId[] = useAppSelector(
        (state: RootState): IStudentDetailWithId[] =>
            state.studentDetails.studentDetails
    );

    useEffect(() => {
        dispatch(fetchStudentDetailsThunk())
            .then((result) => {
                // handle result as necessary
                console.log('Student details fetched successfully:', result);
            })
            .catch((error) => {
                console.error('Failed to fetch student details:', error);
                // handle error as necessary
            });
    }, [dispatch]);

    const deleteDetailHandler = (id: string): void => {
        dispatch(deleteStudentDetailsThunk(id))
            .then((result) => {
                // Handle result as necessary
                console.log(
                    `Student detail with id ${id} deleted successfully`,
                    result
                );
            })
            .catch((error) => {
                // Handle error as necessary
                console.error(
                    `Failed to delete student detail with id ${id}:`,
                    error
                );
            });
    };

    const idWidth = 300;

    return (
        <View style={{ flex: 2 }}>
            <ScrollView style={{ height: 700 }}>
                <DataTable style={styles.container}>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ flexDirection: 'column' }}
                    >
                        <DataTable.Header style={styles.tableHeader}>
                            <DataTable.Title style={{ width: idWidth }}>
                                Id
                            </DataTable.Title>
                            {headerNames.map(
                                (myName: string, index: number) => (
                                    <DataTable.Title
                                        key={index}
                                        style={{ width: 100 }}
                                    >
                                        {myName}
                                    </DataTable.Title>
                                )
                            )}
                            <DataTable.Title style={{ width: 100 }}>
                                Deleteknapp
                            </DataTable.Title>
                            <DataTable.Title style={{ width: 100 }}>
                                Editknapp
                            </DataTable.Title>
                        </DataTable.Header>
                        {studentDetails.map((sd: IStudentDetailWithId) => (
                            <DataTable.Row key={sd.id}>
                                <DataTable.Cell style={{ width: idWidth }}>
                                    {sd.id}{' '}
                                    <Button
                                        title="distribution"
                                        onPress={() =>
                                            navigation.navigate(
                                                'DistributionGraph',
                                                {
                                                    classId: sd.classId
                                                }
                                            )
                                        }
                                    />
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.classId}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.fName}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.lName}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.DOB}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.class}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.Score}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    {sd.Grade}
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    <Button
                                        onPress={() => {
                                            deleteDetailHandler(sd.id);
                                        }}
                                        title="Delete"
                                    ></Button>
                                </DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }}>
                                    <Button
                                        onPress={() =>
                                            navigation.navigate('EditDetail', {
                                                id: sd.id
                                            })
                                        }
                                        title="Edit"
                                    ></Button>
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </ScrollView>
                </DataTable>
            </ScrollView>
        </View>
    );
};

export default DashboardTable;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    tableHeader: {
        backgroundColor: '#FFA500',
        borderWidth: 1
    }
});
