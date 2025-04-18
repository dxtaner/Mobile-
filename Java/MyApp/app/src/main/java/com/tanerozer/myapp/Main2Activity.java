package com.tanerozer.myapp;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class Main2Activity extends AppCompatActivity {
    TextView textView;
    Button geri,serviss;
    boolean servisDurumu=false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        textView=findViewById(R.id.textView);
        geri=findViewById(R.id.geridon);
        serviss=findViewById(R.id.serviss);

        IntentFilter batlevel=new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        registerReceiver(receiver,batlevel);

        serviss.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!servisDurumu) {
                    Intent i=new Intent(Main2Activity.this, Servis.class);
                    startService(i);
                    servisDurumu=true;
                    serviss.setText("SERVİSİ DURDUR");
                } else {
                    Intent k=new Intent(Main2Activity.this, Servis.class);
                    stopService(k);
                    servisDurumu=false;
                    serviss.setText("SERVİSİ BAŞLAT");
                }
            }
        });

        geri.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent k=new Intent(Main2Activity.this,MainActivity.class);
                startActivity(k);
            }
        });
    }

    private BroadcastReceiver receiver=new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            int seviye=intent.getIntExtra(BatteryManager.EXTRA_LEVEL,-1);
            textView.setText("Pil seviyesi: %"+seviye);
        }
    };

}
