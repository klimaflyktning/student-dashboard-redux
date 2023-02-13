import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sleep, IStudentDetailWithId, IStudentDetail } from '../api';
import { db } from '../../firebase-config';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc
} from 'firebase/firestore';

/*
export interface StudentDetailsState {
  studentDetails: { [id: string]: StudentDetail };
}

const initialState: StudentDetailsState = {
  studentDetails: {},
};
*/

/*
export interface StudentDetailsState {
  studentDetails: StudentDetail[];
}
*/

const initialState = {
    studentDetails: [] as IStudentDetailWithId[]
};

export const fetchStudentDetailsThunk = createAsyncThunk(
    'studentDetails/fetch',
    async () => {
        /*
    let arr: StudentDetail[] = [];
    arr.push({
      id: "1",
      classId: "MGMT329",
      fName: "Aaron",
      lName: "French",
      DOB: "04/09/2000",
      className: "Database",
      score: 80,
      grade: "B",
    });

    arr.push({
      id: "2",
      classId: "TTT123",
      fName: "Ronald",
      lName: "McDonald",
      DOB: "04/09/2010",
      className: "Fysikk 1",
      score: 95,
      grade: "A",
    });

    await sleep(500);
    return arr;
    */

        const studentDetailsCollectionRef = collection(db, 'studentDetails');
        const data: any = await getDocs(studentDetailsCollectionRef);
        const ret = [
            ...data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
        ];
        //console.log(ret);
        return ret;
    }
);

export const addStudentDetailsThunk = createAsyncThunk(
    'studentDetails/add',
    async (sd: IStudentDetail) => {
        const studentDetailsCollectionRef = collection(db, 'studentDetails');
        let ret_sd: IStudentDetailWithId = { id: '', ...sd };
        await addDoc(studentDetailsCollectionRef, sd).then((docRef) => {
            ret_sd = { ...sd, id: docRef.id };
        });

        return ret_sd;
    }
);

export const deleteStudentDetailsThunk = createAsyncThunk(
    'studentDetails/delete',
    async (id: string) => {
        //await sleep(200);

        const studentDetailDoc = doc(db, 'studentDetails', id);
        await deleteDoc(studentDetailDoc);
        return id;
    }
);

export const editStudentDetailsThunk = createAsyncThunk(
    'studentDetails/edit',
    async (myPayload: any) => {
        const id = myPayload.id;
        const sd = myPayload.sd;

        //await sleep(250);
        const studentDetailDoc = doc(db, 'studentDetails', id);
        await updateDoc(studentDetailDoc, sd);
        const ret_sd: IStudentDetailWithId = { ...sd, id: id };
        return ret_sd;
    }
);

const studentDetailsSlice = createSlice({
    initialState,
    name: 'studentDetails',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentDetailsThunk.fulfilled, (state, action) => {
                state.studentDetails = action.payload;
            })
            .addCase(addStudentDetailsThunk.fulfilled, (state, action) => {
                state.studentDetails.push(action.payload);
            })
            .addCase(deleteStudentDetailsThunk.fulfilled, (state, action) => {
                const id = action.payload;
                state.studentDetails = state.studentDetails.filter(
                    (sd: IStudentDetailWithId) => sd.id !== id
                );
            })
            .addCase(editStudentDetailsThunk.fulfilled, (state, action) => {
                const my_sd = action.payload;
                const id = my_sd.id;

                const existingStudentDetailIndex =
                    state.studentDetails.findIndex((sd) => sd.id === id);
                state.studentDetails[existingStudentDetailIndex] = my_sd;
            });
    }
});

export default studentDetailsSlice.reducer;
