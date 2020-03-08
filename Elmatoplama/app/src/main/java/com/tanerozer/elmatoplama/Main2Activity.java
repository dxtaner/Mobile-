package com.tanerozer.elmatoplama;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Random;

public class Main2Activity extends AppCompatActivity {
    TextView text1,text2,text3,text4;
    int adet=0;
    ImageView img1,img2,img3,img4,img5,img6;
    ImageView[] elmalar;
    Handler handler;
    Runnable runnable;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        text1=findViewById(R.id.textView);
        text2=findViewById(R.id.textView2);
        text3=findViewById(R.id.textView3);
        text4=findViewById(R.id.textView4);
        img1=findViewById(R.id.imageView1);
        img2=findViewById(R.id.imageView2);
        img3=findViewById(R.id.imageView3);
        img4=findViewById(R.id.imageView4);
        img5=findViewById(R.id.imageView5);
        img6=findViewById(R.id.imageView6);

        elmalar=new ImageView[] {img1,img2,img3,img4,img5,img6};

        Intent i=getIntent();
        String name=i.getStringExtra("username");
        text1.setText("Hoşgeldin.. "+name);
        resimyoket();

        adet=0;

        new CountDownTimer(10000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                text3.setText("Süre: "+millisUntilFinished/1000);
            }
            @Override
            public void onFinish() {
                text3.setText("Süre doldu..");
                handler.removeCallbacks(runnable);
                for (ImageView image:elmalar){
                    image.setVisibility(View.INVISIBLE);
                }
                AlertDialog.Builder alert = new AlertDialog.Builder(Main2Activity.this);
                alert.setCancelable(false);
                alert.setTitle("Devam mı?");
                alert.setMessage("Devam etmek istiyor musun?");
                alert.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Intent i=getIntent();
                        finish();
                        startActivity(i);
                    }
                });
                alert.setNegativeButton("No", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Toast.makeText(Main2Activity.this,"Oyun Bitti..",Toast.LENGTH_LONG).show();
                        Intent j = new Intent(Main2Activity.this,MainActivity.class);
                        startActivity(j);
                    }
                });
                alert.show();
            }
        }.start();
    }
    public void sepeteat(View view){
        adet++;
        text4.setText("Skor: "+adet);
    }
    public void resimyoket(){
        handler = new Handler();
        runnable = new Runnable() {
            @Override
            public void run() {
                for (ImageView image:elmalar){
                    image.setVisibility(View.INVISIBLE);
                    }
                Random random=new Random();
                int index = random.nextInt(6);
                elmalar[index].setVisibility(View.VISIBLE);
                handler.postDelayed(this,800);
                }
        };
        handler.post(runnable);
    }
}
