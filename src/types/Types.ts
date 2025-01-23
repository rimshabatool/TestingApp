import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    EmailAuthentication: undefined;
    LoginSuccess: undefined;
  };
  
  type EmailAuthenticationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmailAuthentication'>;
  type LoginSuccessAuthentication = NativeStackNavigationProp<RootStackParamList, 'LoginSuccess'>;

  
export  interface EmailAuthenticationProps {
    navigation: EmailAuthenticationScreenNavigationProp;
  }
  export  interface LoginAuthenticationProps {
    navigation: LoginSuccessAuthentication;
  }
  