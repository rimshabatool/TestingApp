import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmailAuthentication from '../screens/authentication/EmailAuthentication';
import LoginSuccess from '../screens/authentication/LoginSuccess';
import PhoneNumberScreen from '../screens/NumberOTP/NumberOTP';
import OTPScreen from '../screens/NumberOTP/OTP';
import SuccessScreen from '../screens/NumberOTP/SuccessScreen';
import UseMemoScreen from '../screens/UseMemo&USeCallback/UseMemoScreen';
import page1 from '../Animations/page1';
import index from '../Animations/Index';
import Index from '../screens/MyAnimations/Index';
import FlatlistAnimation from '../screens/FlatlistAnimation/FlatlistAnimation';
import Flash from '../screens/FireBaseChatting/Flash';
import Signup from '../screens/FireBaseChatting/Signup';
import Login from '../screens/FireBaseChatting/Login';
import Dashboard from '../screens/FireBaseChatting/Dashboard';
// import Setting from '../screens/FireBaseChatting/Setting';
import User from '../screens/FireBaseChatting/User';
import Chat from '../screens/FireBaseChatting/Chat';
import ResponsiveFontsize from '../screens/ResponsiveFontsize/ResponsiveFontsize';
import Localization from '../screens/Localization/Localization';
import CountDown from '../screens/CountDownAnimation/CountDown';
import video1 from '../screens/Animaations/video1';
import Video2 from '../screens/Animaations/Video2';
import Video3 from '../screens/Animaations/Video3';
import Video4 from '../screens/Animaations/Video4';
import Video5 from '../screens/Animaations/Video5';
import Video6 from '../screens/Animaations/Video6';
import MainScreen from '../screens/AnimationTask/MainScreen';
import Testing from '../screens/TestingOfErrorBoundary/Testing';
import UpdateCheck from '../screens/TestingOfErrorBoundary/UpdateCheck';
import DownloadFiles from '../screens/TestingOfErrorBoundary/DownloadFiles';
import GoogleAutoplaces from '../screens/MapTask/GoogleAutoplaces';
import CakeCartComponent from '../screens/Cake/CakeCartComponent';
import ListOfCake from '../screens/Cake/ListOfCake';
import FarwardRefPractice from '../screens/UseMemo&USeCallback/FarwardRefPractice';
import Main from '../screens/PlantApp/Main';
import Recomended from '../screens/PlantApp/Tabs/Recomended';
import Indoor from '../screens/PlantApp/Tabs/Indoor';
import OutDoor from '../screens/PlantApp/Tabs/OutDoor';
import Pot from '../screens/PlantApp/Tabs/Pot';
import ItemScreen from '../screens/PlantApp/ItemScreen';
import Graphql from '../screens/GraphSQL/Graphql';
import ReactQuery from '../screens/ReactQuery/ReactQuery';
import ProductsList from '../Redux/ProductList';
import TextAnimation from '../screens/Animaations/TextAnimation';
import IconAnimation from '../screens/Animaations/IconAnimation';
import MainIcon from '../screens/Animaations/MainIcon';
import MainScreenOfBottomTab from '../screens/BotomTabNavigation/MainScreenOfBottomTab';
import AnimatedButton from '../screens/AnimatedButtons/AnimatedButton';
import CardAnimation from '../screens/CardAnimation.tsx/CardAnimation';
import SamosaCardAnimation from '../screens/SamosaCardAnimation/SamosaCardAnimation';
import ListAnimation from '../screens/ListAnimation/ListAnimation';
import PaperAnimation from '../screens/PaperAnimationm/PaperAnimation';
import BottomTab from '../screens/CircularBottomTab/BottomTab';
import MainScreenOfLinkedIn from '../screens/LinkedInAnimation/MainScreenOfLinkedIn';
import DrawAnimations from '../screens/DrawAnimations/DrawAnimations';
import ListOfBars from '../ListOfBars/ListOfBars';
import CartAnimations from '../screens/CartAnimations/CartAnimations';
import LightBar from '../screens/LightBar/LightBar';
import CheckboxAnimation from '../screens/CheckboxAnimation/CheckboxAnimation';

const stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="CheckboxAnimation"
        screenOptions={{
          headerShown: false,
          headerStyle: {backgroundColor: '#fff'},
        }}>
        <stack.Screen
          name="EmailAuthentication"
          component={EmailAuthentication}
        />
        <stack.Screen name="LoginSuccess" component={LoginSuccess} />
        <stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
        <stack.Screen name="OTPScreen" component={OTPScreen} />
        <stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <stack.Screen name="index" component={index} />
        <stack.Screen name="UseMemoScreen" component={UseMemoScreen} />
        <stack.Screen name="page1" component={page1} />
        <stack.Screen name="Index" component={Index} />
        <stack.Screen name="FlatlistAnimation" component={FlatlistAnimation} />
        <stack.Screen name="Flash" component={Flash} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Dashboard" component={Dashboard} />
        {/* <stack.Screen name="Setting" component={Setting} /> */}
        <stack.Screen name="User" component={User} />
        <stack.Screen
          options={{headerShown: true}}
          name="Chat"
          component={Chat}
        />
        <stack.Screen
          name="ResponsiveFontsize"
          component={ResponsiveFontsize}
        />
        <stack.Screen name="Localization" component={Localization} />
        <stack.Screen name="CountDown" component={CountDown} />
        <stack.Screen name="video1" component={video1} />
        <stack.Screen name="Video2" component={Video2} />
        <stack.Screen name="Video3" component={Video3} />
        <stack.Screen name="Video4" component={Video4} />
        <stack.Screen name="Video5" component={Video5} />
        <stack.Screen name="Video6" component={Video6} />
        <stack.Screen name="MainScreen" component={MainScreen} />
        <stack.Screen name="Testing" component={Testing} />
        <stack.Screen name="UpdateCheck" component={UpdateCheck} />
        <stack.Screen name="DownloadFiles" component={DownloadFiles} />
        <stack.Screen name="GoogleAutoplaces" component={GoogleAutoplaces} />
        <stack.Screen name="CakeCartComponent" component={ListOfCake} />
        <stack.Screen name="Main" component={Main} />
        <stack.Screen name="Recomended" component={Recomended} />
        <stack.Screen name="Indoor" component={Indoor} />
        <stack.Screen name="OutDoor" component={OutDoor} />
        <stack.Screen name="Pot" component={Pot} />
        <stack.Screen name="ItemScreen" component={ItemScreen} />
        <stack.Screen name="Graphql" component={Graphql} />
        <stack.Screen name="ReactQuery" component={ReactQuery} />
        <stack.Screen name="TextAnimation" component={TextAnimation} />
        <stack.Screen name="ProductsList" component={ProductsList} />
        {/* <stack.Screen name="IconAnimation" component={IconAnimation} /> */}
        <stack.Screen name="MainIcon" component={MainIcon} />
        <stack.Screen name="AnimatedButton" component={AnimatedButton} />
        <stack.Screen
          name="MainScreenOfLinkedIn"
          component={MainScreenOfLinkedIn}
        />

        <stack.Screen
          name="MainScreenOfBottomTab"
          component={MainScreenOfBottomTab}
        />

        <stack.Screen
          name="FarwardRefPractice"
          component={FarwardRefPractice}
        />
        <stack.Screen name="CardAnimation" component={CardAnimation} />
        <stack.Screen
          name="SamosaCardAnimation"
          component={SamosaCardAnimation}
        />
        <stack.Screen name="BottomTab" component={BottomTab} />
        <stack.Screen name="ListAnimation" component={ListAnimation} />
        <stack.Screen name="PaperAnimation" component={PaperAnimation} />
        <stack.Screen name="DrawAnimations" component={DrawAnimations} />
        <stack.Screen name="ListOfBars" component={ListOfBars} />
        <stack.Screen name="CartAnimations" component={CartAnimations} />
        <stack.Screen name="LightBar" component={LightBar} />
        <stack.Screen name="CheckboxAnimation" component={CheckboxAnimation} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
