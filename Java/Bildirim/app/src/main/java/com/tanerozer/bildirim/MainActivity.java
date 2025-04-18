package com.tanerozer.bildirim;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.BatteryManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.io.InputStreamReader;

public class MainActivity extends AppCompatActivity {
    Vibrator vibrator;
    Button btn,olustur,yoket;
    TextView textView;
    Notification notification;
    NotificationManager notificationManager;
    String urrl="https://twitter.com/";
    int notID=1;
    String notchanell="0";
    Context context=this;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn=findViewById(R.id.button);
        olustur=findViewById(R.id.olustur);
        yoket=findViewById(R.id.yoket);
        textView=findViewById(R.id.textView);
        vibrator=(Vibrator) getSystemService(Context.VIBRATOR_SERVICE);

        IntentFilter baterylewel = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        registerReceiver(receiver,baterylewel);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                vibrator.vibrate(2000);
            }
        });
    }

    private BroadcastReceiver receiver= new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            int lewel=intent.getIntExtra(BatteryManager.EXTRA_LEVEL,-1);
            textView.setText("Su anki pil seviyesi :"+lewel+"%");
        }
    };

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void notolustur(View view){
        Intent i=new Intent(Intent.ACTION_VIEW, Uri.parse(urrl));
        PendingIntent pendingIntent=PendingIntent.getActivity(context,0,i,0);
        int importance=NotificationManager.IMPORTANCE_HIGH;
        //API 26 ust surumuyse challe tanımla
        NotificationChannel notificationChannel = new NotificationChannel(notchanell,"NOTİFİCATİON NAME",importance);

        notification = new Notification.Builder(context)
                .setContentTitle("tick Notification")
                .setContentText("acmak için tıklayın")
                .setWhen(System.currentTimeMillis())
                .setContentIntent(pendingIntent)
                .setChannelId(notchanell)
                .setAutoCancel(true)
                .setSmallIcon(R.mipmap.ic_launcher).build();

                notificationManager=(NotificationManager)getSystemService(context.NOTIFICATION_SERVICE);
                notificationManager.createNotificationChannel(notificationChannel);
                notificationManager.notify(notID,notification);
    }

    public void yoket(View view){
        notificationManager.cancel(notID);
    }
}
