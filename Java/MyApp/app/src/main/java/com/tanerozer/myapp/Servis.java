package com.tanerozer.myapp;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.widget.Toast;

import androidx.annotation.Nullable;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Servis extends Service {

    Handler handler=new Handler();
    Runnable runnable;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;

    }

    @Override
    public void onCreate() {
        super.onCreate();
        Toast.makeText(Servis.this,"Servis Basladi..",Toast.LENGTH_SHORT).show();
        runnable=new Runnable() {
            @Override
            public void run() {
                long saat= System.currentTimeMillis();
                SimpleDateFormat form=new SimpleDateFormat("dd MMMM YYYY / EEEE / hh:mm:ss");
                final String sonuc=form.format(new Date(saat));
                Toast.makeText(Servis.this,sonuc,Toast.LENGTH_LONG).show();
                handler.postDelayed(this,10000);
            }
        };
        handler.post(runnable);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        handler.removeCallbacks(runnable);
        Toast.makeText(Servis.this,"Servis Durduruldu..",Toast.LENGTH_SHORT).show();
    }

}
