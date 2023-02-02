import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { IStudentDetail } from "../redux/api";
import { useAppDispatch } from "../redux/hooks";
import {
  addStudentDetailsThunk,
  deleteStudentDetailsThunk,
  editStudentDetailsThunk,
} from "../redux/slices/studentDetailsSlice";
import { RootState } from "../redux/store";
import { getGradeFromScore } from "../utils/helpers";

const EditDetail = ({ navigation, route }: any) => {
  const [classId, setClassId] = useState<string>("TTT123");
  const [fName, setFName] = useState<string>("Hans");
  const [lName, setLName] = useState<string>("Smecker");
  const [DOB, setDOB] = useState<string>("01/02/95");
  const [className, setClassName] = useState<string>("Databases");
  const [score, setScore] = useState<number>(80);
  //const [grade, setGrade] = useState<string>("B");

  //const [studentDetails, setStudentDetails] = useContext(studentDetailsContext);
  /*
  const studentDetails: IStudentDetailWithId[] = useAppSelector(
    (state: RootState): IStudentDetailWithId[] => state.studentDetails.studentDetails
  );
  */

  const dispatch = useAppDispatch();

  const editDetailHandler = (my_id: string, navigation: any) => {
    let my_sd: IStudentDetail = {
      classId: classId,
      fName: fName,
      lName: lName,
      DOB: DOB,
      class: className,
      Score: score,
      Grade: getGradeFromScore(score),
    };

    //setStudentDetails((sd_arr) => sd_arr.filter((x) => x.id !== my_id));
    //setStudentDetails((sd_arr) => [...sd_arr, my_sd]);

    // dispatching delete and then add, less than ideal..
    //dispatch(deleteStudentDetailsThunk(my_id));
    //dispatch(addStudentDetailsThunk(my_sd));

    dispatch(editStudentDetailsThunk({ id: my_id, sd: my_sd }));
    navigation.navigate("Home");
  };

  return (
    <>
      <Text>Fill out form below to edit detail with id {route.params.id}:</Text>
      <TextInput
        onChangeText={(newVal: string) => setClassId(newVal)}
        placeholder="classId"
      />
      <TextInput
        onChangeText={(newVal: string) => setFName(newVal)}
        placeholder="fName"
      />
      <TextInput
        onChangeText={(newVal: string) => setLName(newVal)}
        placeholder="lName"
      />
      <TextInput
        onChangeText={(newVal: string) => setDOB(newVal)}
        placeholder="DOB"
      />
      <TextInput
        onChangeText={(newVal: string) => setClassName(newVal)}
        placeholder="className"
      />
      <TextInput
        onChangeText={(newVal: string) => setScore(Number(newVal))}
        placeholder="score"
      />
      <Button
        onPress={() => editDetailHandler(route.params.id, navigation)}
        title="Edit"
      ></Button>
    </>
  );
};

export default EditDetail;
