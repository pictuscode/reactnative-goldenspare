
import React from 'react'
import { View,Button } from 'react-native';

import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const Notification = () => {

    return (
        <AlertNotificationRoot  >
            <View>
  
                <Button
                    title={'dialog box'}
                    onPress={() =>
                        Dialog.show({
                            type: ALERT_TYPE.SUCCESS,
                            title: 'Success',
                            textBody: 'Congrats! this is dialog box success',
                            button: 'OK',
                        })
                    }
                />
   
                <Button
                    title={'toast notification'}
                    onPress={() =>
                        Toast.show({
                        
                            type: ALERT_TYPE.SUCCESS,
                            title: 'Success',
                            textBody: 'Congrats! this is toast notification success',
                        })
                    }
                />
            </View>
        </AlertNotificationRoot>
    )
}

export default Notification


