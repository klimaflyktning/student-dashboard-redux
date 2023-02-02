import { DataTable } from "react-native-paper";
import { Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IStudentDetailWithId } from "../redux/api";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import {
  deleteStudentDetailsThunk,
  fetchStudentDetailsThunk,
} from "../redux/slices/studentDetailsSlice";

const DashboardTable = ({ navigation }: any) => {
  const headerNames = [
    "classId",
    "fName",
    "lName",
    "DOB",
    "className",
    "Score",
    "Grade",
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStudentDetailsThunk());
  }, []);

  //const [studentDetails, setStudentDetails] = useContext(studentDetailsContext);
  const studentDetails: IStudentDetailWithId[] = useAppSelector(
    (state: RootState): IStudentDetailWithId[] =>
      state.studentDetails.studentDetails
  );

  const deleteDetailHandler = (id: string) => {
    //setStudentDetails((sd_arr) => sd_arr.filter((x) => x.id !== id));
    dispatch(deleteStudentDetailsThunk(id));
  };

  const idWidth = 300;

  return (
    <ScrollView>
      <DataTable style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: "column" }}
        >
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={{ width: idWidth }}>Id</DataTable.Title>
            {headerNames.map((my_name: string) => (
              <DataTable.Title style={{ width: 100 }}>
                {my_name}
              </DataTable.Title>
            ))}
            <DataTable.Title style={{ width: 100 }}>
              Deleteknapp
            </DataTable.Title>
            <DataTable.Title style={{ width: 100 }}>Editknapp</DataTable.Title>
          </DataTable.Header>
          {studentDetails.map((sd: IStudentDetailWithId) => (
            <DataTable.Row>
              <DataTable.Cell style={{ width: idWidth }}>
                {sd.id}{" "}
                <Button
                  title="distribution"
                  onPress={() =>
                    navigation.navigate("DistributionGraph", {
                      classId: sd.classId,
                    })
                  }
                />
              </DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>
                {sd.classId}
              </DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.fName}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.lName}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.DOB}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.class}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.Score}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>{sd.Grade}</DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>
                <Button
                  onPress={() => deleteDetailHandler(sd.id)}
                  title="Delete"
                ></Button>
              </DataTable.Cell>
              <DataTable.Cell style={{ width: 100 }}>
                <Button
                  onPress={() =>
                    navigation.navigate("EditDetail", { id: sd.id })
                  }
                  title="Edit"
                ></Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
      </DataTable>
    </ScrollView>
  );
};

export default DashboardTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
