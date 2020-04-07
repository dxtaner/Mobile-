package com.tanerozer.yakalama;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.Random;

public class Main2Activity extends AppCompatActivity {
    TextView textSure,textSkor,textisim;
    ImageView img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12;
    int skor=0;
    ImageView[] baliklar;
    Handler handler;
    Runnable runnable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        textSkor=findViewById(R.id.skortext);
        textSure=findViewById(R.id.suretext);
        textisim=findViewById(R.id.isim);
        img1=findViewById(R.id.balik1);
        img2=findViewById(R.id.balik2);
        img3=findViewById(R.id.balik3);
        img4=findViewById(R.id.balik4);
        img5=findViewById(R.id.hamsi1);
        img6=findViewById(R.id.hamsi2);
        img7=findViewById(R.id.hamsi3);
        img8=findViewById(R.id.hamsi4);
        img9=findViewById(R.id.hamsi5);
        img10=findViewById(R.id.hamsi6);
        img11=findViewById(R.id.shark1);
        img12=findViewById(R.id.shark2);

        baliklar=new ImageView[]{img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12};

        Intent i =  getIntent();
        String ad = i.getStringExtra("name").toString();
        textisim.setText(ad);

        baliklarikaldır();



        new CountDownTimer(10000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                textSure.setText("Süre:"+millisUntilFinished/1000);
            }
            @Override
            public void onFinish() {
                textSure.setText("Süre Doldu..");
                handler.removeCallbacks(runnable);
                for (ImageView img:baliklar){
                    img.setVisibility(View.INVISIBLE);
                }
                AlertDialog.Builder alert = new AlertDialog.Builder(Main2Activity.this);
                alert.setTitle("Oyun Bitti...");
                alert.setMessage("Tekrar oynamak ister misin?");
                alert.setCancelable(false);
                alert.setPositiveButton("Evet", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Intent i = getIntent();
                        finish();
                        startActivity(i);
                    }
                });
                alert.setNegativeButton("Hayır", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Intent i = new Intent(Main2Activity.this,MainActivity.class);
                        startActivity(i);
                    }
                });
                alert.show();
            }
        }.start();

    }

    public void hamsiekle(View view){
        skor++;
        textSkor.setText("Skor:"+skor);
    }
    public void balik2ekle(View view){
        skor+=3;
        textSkor.setText("Skor:"+skor);
    }
    public void shrak(View view){
        skor+=10;
        textSkor.setText("Skor:"+skor);
    }

    public void baliklarikaldır(){
        handler=new Handler();
        runnable=new Runnable() {
            @Override
            public void run() {
                for (ImageView img:baliklar){
                    img.setVisibility(View.INVISIBLE);
                }
                Random r=new Random();
                int a=r.nextInt(12);
                baliklar[a].setVisibility(View.VISIBLE);
                handler.postDelayed(this,500);
            }
        };
        handler.post(runnable);
    }
}
