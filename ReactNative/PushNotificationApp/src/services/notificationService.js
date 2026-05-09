import PushNotification from 'react-native-push-notification';

export const configureNotification = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
    },
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: 'default-channel-id',
      channelName: 'Default Channel',
    },
    created => console.log(`Channel created: ${created}`),
  );
};

export const showNotification = () => {
  PushNotification.localNotification({
    channelId: 'default-channel-id',
    title: 'Merhaba 👋',
    message: 'Local notification çalışıyor!',
  });
};
