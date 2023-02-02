import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { IStudentDetail } from "../redux/api";
import { useAppDispatch } from "../redux/hooks";
import { addStudentDetailsThunk } from "../redux/slices/studentDetailsSlice";
import { getGradeFromScore } from "../utils/helpers";

const AddDetail = () => {
  const [classId, setClassId] = useState<string>("TTT123");
  const [fName, setFName] = useState<string>("Hans");
  const [lName, setLName] = useState<string>("Smecker");
  const [DOB, setDOB] = useState<string>("01/02/95");
  const [className, setClassName] = useState<string>("Databases");
  const [score, setScore] = useState<number>(80);
  // const [grade, setGrade] = useState<string>("B");

  //const [studentDetails, setStudentDetails] = useContext(studentDetailsContext);

  const dispatch = useAppDispatch();

  const addDetailHandler = () => {
    let my_sd: IStudentDetail = {
      classId: classId,
      fName: fName,
      lName: lName,
      DOB: DOB,
      class: className,
      Score: score,
      Grade: getGradeFromScore(score),
    };

    //setStudentDetails((sd_arr) => [...sd_arr, my_sd]);
    dispatch(addStudentDetailsThunk(my_sd));
  };

  return (
    <>
      <Text>Fill out form below to add new detail:</Text>
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
      <Button onPress={addDetailHandler} title="Add"></Button>
    </>
  );
};

export default AddDetail;
