import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import DistributionGraph from './screens/DistributionGraph';
import EditDetail from './screens/EditDetail';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    /*
  const [myStudentDetails, setMyStudentDetails] = useState<
    Array<StudentDetail>
  >([]);
  */

    /*
  useEffect(() => {
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

    setMyStudentDetails(arr);
  }, []);
  */

    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Home' }}
                    />
                    <Stack.Screen
                        name="DistributionGraph"
                        component={DistributionGraph}
                        options={{ title: 'Distribution graph' }}
                    />
                    <Stack.Screen
                        name="EditDetail"
                        component={EditDetail}
                        options={{ title: 'Edit Detail' }}
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
