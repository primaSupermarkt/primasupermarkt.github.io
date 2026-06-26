importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCQZUY_5PEDWG2aHXK7HA-oBp56sX0-qsE",
  authDomain: "taxi-markus.firebaseapp.com",
  projectId: "taxi-markus",
  storageBucket: "taxi-markus.firebasestorage.app",
  messagingSenderId: "739502094844",
  appId: "1:739502094844:web:0c0e8cbca40c8b15c99a79"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Hintergrund-Nachricht:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png'
  });
});
