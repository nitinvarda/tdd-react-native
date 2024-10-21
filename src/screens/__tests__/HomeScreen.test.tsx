import {render} from '@testing-library/react-native'
import HomeScreen from '../HomeScreen';
import WeatherCurrent from '../../components/WeatherCurrent';
import { View } from 'react-native';
import WeatherCoordinates from '../../components/WeatherCoordinates';


jest.mock("../../components/WeatherCurrent.tsx",()=>jest.fn().mockReturnValue(null));
jest.mock("../../components/WeatherCoordinates.tsx",()=>jest.fn().mockReturnValue(null));

describe('HomeScreen', () => { 
    test("should render correctly",()=>{
        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId("home-screen");
    })

    describe("Title Section",()=>{
        beforeEach(()=>{
            jest.useFakeTimers();
            jest.setSystemTime(946709999900);

        })

        // afterEach(()=>{
        //     jest.useRealTimers();
        // });

        test("Should contain current date",()=>{
            const wrapper = render(<HomeScreen />);
            wrapper.getByText("Jan 01, 2000")
        });

        test("Should contain current day",()=>{
            const wrapper = render(<HomeScreen />);
            wrapper.getByText('Saturday');
        });
    });

    test("Should contain divider",()=>{
        const wrapper = render(<HomeScreen />)
        wrapper.getByTestId("home-screen-divider");
    });


    test('Should contain a section to get current weather',()=>{
        (WeatherCurrent as jest.Mock).mockReturnValue(<View testID="mock-weather-current"></View>);

        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId("mock-weather-current");
    });

    test('Should contain a section to get weather at given latitudes and longitutes',()=>{
        (WeatherCoordinates as jest.Mock).mockReturnValue(<View testID="mock-weather-coordinates"></View>);

        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId("mock-weather-coordinates");
    });
 });