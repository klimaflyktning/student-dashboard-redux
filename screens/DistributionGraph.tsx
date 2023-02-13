import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useAppSelector } from '../redux/hooks';
import { IStudentDetailWithId } from '../redux/api';
import { RootState } from '../redux/store';

const DistributionGraph = ({ navigation, route }: any) => {
    //const dispatch = useAppDispatch();
    const studentDetails: IStudentDetailWithId[] = useAppSelector(
        (state: RootState): IStudentDetailWithId[] =>
            state.studentDetails.studentDetails
    );

    const filteredArray = studentDetails.filter(
        (sd) => sd.classId == route.params.classId
    );

    const numA = filteredArray.filter((sd) => sd.Grade === 'A').length;
    const numB = filteredArray.filter((sd) => sd.Grade === 'B').length;
    const numC = filteredArray.filter((sd) => sd.Grade === 'C').length;
    const numD = filteredArray.filter((sd) => sd.Grade === 'D').length;
    const numE = filteredArray.filter((sd) => sd.Grade === 'E').length;
    const numF = filteredArray.filter((sd) => sd.Grade === 'F').length;

    const horizontalData = ['A', 'B', 'C', 'D', 'E', 'F'];

    const barData = {
        labels: horizontalData,
        datasets: [
            {
                data: [numA, numB, numC, numD, numE, numF]
            }
        ]
    };

    return (
        <View style={styles.container}>
            <Text>Distributiongraph for id {route.params.classId}:</Text>
            <BarChart
                // style={graphStyle}
                data={barData}
                width={Dimensions.get('window').width}
                height={220}
                yAxisLabel={''}
                yAxisSuffix={''}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
            />
        </View>
    );
};

export default DistributionGraph;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
