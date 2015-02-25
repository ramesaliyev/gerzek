// Haftaiçi günler, 08:00:00.
global.registerCronJob('00 00 08 * * 1-5', "Günaydın :) Hadi lan çalışın mesai başladı!");

// Haftaiçi günler, 17:00:00.
global.registerCronJob('00 00 17 * * 1-5', "Mesai bitti, şimdi o mouse'u yavaşça yerine bırak.");

// Her ay 20-22 tarihleri arasında, Saat 11 ve 15'te.
global.registerCronJob('00 00 11,15 20 * *', "Masrafları yollayın lan, girmesin sonra.");

// Her hafta perşembe, Saat 11 ve 15'te.
global.registerCronJob('10 00 11,15 * * 4', "Eforları girin la, üşenmeyin hadi birikcek sonra.");

// Haftaiçi günler, 00:00:00.
global.registerCronJob('00 00 00 * * 1-5', "Yatın uyuyun lan, sabah kalkamıyorsunuz sonra.");

// Her hafta cuma, Saat 17'de.
global.registerCronJob('00 30 16 * * 5', "Bugün cuma beyler, yapıyor muyuz bi kadıköy?");