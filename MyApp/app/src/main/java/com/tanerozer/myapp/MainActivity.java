package com.tanerozer.myapp;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button girisyap,ntsil;
    Notification notification;
    NotificationManager notificationManager;
    int notID=1;
    String notchanell="0";
    Context context=this;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        girisyap=findViewById(R.id.girisyap);
        ntsil=findViewById(R.id.sil);

        girisyap.setOnClickListener(new View.OnClickListener() {
            @RequiresApi(api = Build.VERSION_CODES.O)
            @Override
            public void onClick(View v) {
                Intent i=new Intent(MainActivity.this,Main2Activity.class);
                PendingIntent pendingIntent=PendingIntent.getActivity(context,0,i,0);
                int importance=NotificationManager.IMPORTANCE_DEFAULT;
                NotificationChannel notificationChannel = new NotificationChannel(notchanell,"NOTİFİCATİON NAME",importance);

                notification = new Notification.Builder(context)
                        .setContentTitle("Giris")
                        .setContentText("Giris icin tıklayın")
                        .setWhen(System.currentTimeMillis())
                        .setContentIntent(pendingIntent)
                        .setChannelId(notchanell)
                        .setAutoCancel(true)
                        .setSmallIcon(R.mipmap.ic_launcher_round).build();

                notificationManager=(NotificationManager)getSystemService(context.NOTIFICATION_SERVICE);
                notificationManager.createNotificationChannel(notificationChannel);
                notificationManager.notify(notID,notification);
                Toast.makeText(getApplicationContext(),"Bildirim olusturuldu..",Toast.LENGTH_SHORT).show();
            }
        });

        ntsil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                notificationManager.cancel(notID);
                Toast.makeText(getApplicationContext(), "Bildirim silindi..", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
