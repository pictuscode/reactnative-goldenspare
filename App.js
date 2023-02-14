import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/BottomTabbar/BottomTabbar';
import Categories from './src/Pages/categories/categories';
import AddRecom from './src/Pages/home/newRecomentations';
import { BG_COLOR, FONT_BLACK } from './src/Components/Common/Variable';
import { Fonts } from './src/Components/Common/Fonts';
import SignUP_1 from './src/Pages/signUp/signUP_1';
import SignUP_2 from './src/Pages/signUp/signUP_2';
import Profile from './src/Pages/profile/profile';
import ChangePassword from './src/Pages/profile/changePassword';
import CategoriesView from './src/Pages/categories/categoriesView';
import Categoriesdetails from './src/Pages/categories/categoriesdetails';
import AllBrands from './src/Pages/categories/allBrands';
import AllCategories from './src/Pages/categories/allCategories';
import ContactSupliers from './src/Pages/categories/contactSupliers';
import Filter from './src/Pages/categories/filter';
import UserAdddata from './src/Pages/categories/userAdddata';
import Login from './src/Pages/login/login';
import VerificationLogin from './src/Pages/login/verificationLogin';
import AgencyDetails_1 from './src/Pages/signUp/agencyDetails_1';
import VessalOwerDetails from './src/Pages/signUp/vessalOwerDetails';
import AgencyDetails_2 from './src/Pages/signUp/agencyDetails_2';
import VerificationSignUp from './src/Pages/signUp/verificationSignUp';
import Notification from './src/Pages/home/notification';
import AgencyList from './src/Pages/fevorite/agencyList';
import VesselPost from './src/Pages/fevorite/vesselPost';
import BidPage from './src/Pages/fevorite/bidPage';
import AddServices from './src/Pages/profile/addServices';
const Stack = createNativeStackNavigator();
const App = () => {
  const Tabs = () => {
    return <SignUP_1 />;
  }
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName='first'>
        <Stack.Screen
          name="first"
          component={Tabs}
          options={{ headerShown: false, headerLeft: () => null, }}


        />
        <Stack.Screen
          name='SignUP_1'
          component={SignUP_1} options={{
            headerShown: false, headerLeft: () => null,
          }} />
        <Stack.Screen
          name='SignUP_2'
          component={SignUP_2} options={{
            headerShown: false, headerLeft: () => null,
          }} />
        <Stack.Screen
          name='Login'
          component={Login} options={{
            headerShown: false, headerLeft: () => null,
          }} />
        <Stack.Screen
          name='MyTabs'
          component={MyTabs} options={{
            headerShown: false, headerLeft: () => null,
          }} />



        <Stack.Screen
          name='Categories'
          component={Categories} options={{
            headerTitleStyle: { fontSize: 15, color: FONT_BLACK, fontFamily: Fonts.fontmedium },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
          }} />
        <Stack.Screen
          name='AddItem'
          component={AddRecom} options={{
            headerTitleStyle: { fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
          }} />
        <Stack.Screen
          name='Profile'
          component={Profile} options={{
            headerTitleStyle: {
              fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='Change password'
          component={ChangePassword} options={{
            headerTitleStyle: {
              fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />

        <Stack.Screen
          name='Categories View'
          component={CategoriesView} options={{
            headerTitleStyle: {
              fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='Categoriesdetails'
          component={Categoriesdetails} options={{
            headerTitleStyle: {
              fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='All Brands'
          component={AllBrands} options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='All Categories'
          component={AllCategories} options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='Contact Supliers'
          component={ContactSupliers} options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='Filter'
          component={Filter} options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='UserAddData'
          component={UserAdddata} options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }} />
        <Stack.Screen
          name='VerificationLogin'
          component={VerificationLogin}
          options={{
            headerShown: false, headerLeft: () => null,
          }} />
        <Stack.Screen
          name='VerificationSignUp'
          component={VerificationSignUp}
          options={{
            headerShown: false, headerLeft: () => null,
          }} />

        <Stack.Screen
          name='AgencyDetails'
          component={AgencyDetails_1}

          options={{
            headerShown: false, headerLeft: () => null,
          }} />
        <Stack.Screen
          name='VessalOwerDetails'
          component={VessalOwerDetails}
          options={{
            headerShown: false, headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name='AgencyDetails_2'
          component={AgencyDetails_2}
          options={{
            headerShown: false, headerLeft: () => null,
          }}

        />
   

 
        <Stack.Screen
          name='Notification'
          component={Notification}
          options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }}

        />
        <Stack.Screen
          name='AgencyList'
          component={AgencyList}
          options={{
            headerShown: false, headerLeft: () => null,
          }}

        />
        <Stack.Screen
          name='VesselPost'
          component={VesselPost}
          options={{
            headerShown: false, headerLeft: () => null,
          }}

        />
        <Stack.Screen
          name='BidPage'
          component={BidPage}
          options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }}

        />
        <Stack.Screen
          name='AddServices'
          component={AddServices}
          options={{
            headerTitleStyle: {
              fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

            },
            headerStyle: { backgroundColor: BG_COLOR },
            headerTintColor: FONT_BLACK,
            headerTitleAlign: "center"
          }}

        />


      </Stack.Navigator>
    </NavigationContainer>
  );


};

export default App;