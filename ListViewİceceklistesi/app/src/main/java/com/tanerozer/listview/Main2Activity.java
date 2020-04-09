package com.tanerozer.listview;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class Main2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        TextView textView1=findViewById(R.id.textView);
        TextView textView2=findViewById(R.id.textView2);
        ImageView imageview=findViewById(R.id.imageView);

        Intent i=getIntent();
        Icecek secilenicecek=(Icecek) i.getSerializableExtra("secilenicecek");
        Bitmap bitmap = BitmapFactory.decodeResource(getApplicationContext().getResources(),secilenicecek.getResimId());
        imageview.setImageBitmap(bitmap);
        textView1.setText("İçecek Adı:"+secilenicecek.getAd());
        textView2.setText("Fiyatı:"+secilenicecek.getFiyat()+" TL");

        /*
        Intent i = getIntent();
        String ad = i.getStringExtra("ad");
        int fiyat = i.getIntExtra("fiyat",0);
        textView1.setText("Ad :"+ad);
        textView2.setText("Fiyat :"+fiyat);
         */
    }
}
