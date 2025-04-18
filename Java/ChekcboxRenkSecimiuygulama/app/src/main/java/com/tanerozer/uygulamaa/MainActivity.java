package com.tanerozer.uygulamaa;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    TextView text,text2;
    CheckBox mesajaktar,renkseciniz,radiogrup,ayarla;
    RadioGroup rdgrp;
    RadioButton kirmizi,siyah,yesil,gri,mavi;
    Button btn1,btn2;
    String toastmesaj;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        text=findViewById(R.id.textView);
        text2=findViewById(R.id.textView2);
        mesajaktar=findViewById(R.id.mesajaktar);
        renkseciniz=findViewById(R.id.renkseciniz);
        radiogrup=findViewById(R.id.radiogrup);
        ayarla=findViewById(R.id.ayarla);
        rdgrp=findViewById(R.id.radioGroup);
        kirmizi=findViewById(R.id.kirmizi);
        siyah=findViewById(R.id.siyah);
        yesil=findViewById(R.id.yesil);
        gri=findViewById(R.id.gri);
        mavi=findViewById(R.id.mavi);
        btn1=findViewById(R.id.button);
        btn2=findViewById(R.id.button2);

        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String t="Seçilen renk:";
                if (kirmizi.isChecked()){
                    t+=" Kırmızı";
                    String s="Seçilen bileşen :";
                    if (renkseciniz.isChecked()){
                        s+=" Text View";
                        text2.setBackgroundColor(Color.RED);
                    }
                    else{
                        text2.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (radiogrup.isChecked()){
                        s+=" RadioGroup";
                        rdgrp.setBackgroundColor(Color.RED);
                    }
                    else{
                        rdgrp.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (ayarla.isChecked()){
                        s+=" Ayarla Butonu";
                        btn2.setBackgroundColor(Color.RED);
                    }
                    else{
                        btn2.setBackgroundColor(Color.LTGRAY);
                    }
                    if (mesajaktar.isChecked()){
                        s+=" Mesaj Aktar Butonu";
                        btn1.setBackgroundColor(Color.RED);
                    }
                    else{
                        btn1.setBackgroundColor(Color.LTGRAY);
                    }
                    Toast.makeText(getApplicationContext(),t+" ve "+s,Toast.LENGTH_LONG).show();
                    toastmesaj=t+" ve "+s;
                }
                if (siyah.isChecked()){
                    t+=" Siyah";
                    String s="Seçilen bileşen :";
                    if (renkseciniz.isChecked()){
                        s+=" Text View";
                        text2.setBackgroundColor(Color.BLACK);
                        text2.setTextColor(Color.WHITE);
                    }
                    else{
                        text2.setBackgroundColor(Color.TRANSPARENT);
                        text2.setTextColor(Color.BLACK);
                    }
                    if (radiogrup.isChecked()){
                        s+=" RadioGroup";
                        rdgrp.setBackgroundColor(Color.BLACK);
                        kirmizi.setTextColor(Color.WHITE);
                        siyah.setTextColor(Color.WHITE);
                        mavi.setTextColor(Color.WHITE);
                        yesil.setTextColor(Color.WHITE);
                        gri.setTextColor(Color.WHITE);
                    }
                    else{
                        rdgrp.setBackgroundColor(Color.TRANSPARENT);
                        kirmizi.setTextColor(Color.BLACK);
                        siyah.setTextColor(Color.BLACK);
                        gri.setTextColor(Color.BLACK);
                        yesil.setTextColor(Color.BLACK);
                        mavi.setTextColor(Color.BLACK);
                    }
                    if (ayarla.isChecked()){
                        s+=" Ayarla Butonu";
                        btn2.setBackgroundColor(Color.BLACK);
                        btn2.setTextColor(Color.WHITE);
                    }
                    else{
                        btn2.setBackgroundColor(Color.LTGRAY);
                        btn2.setTextColor(Color.BLACK);
                    }
                    if (mesajaktar.isChecked()){
                        s+=" Mesaj Aktar Butonu";
                        btn1.setBackgroundColor(Color.BLACK);
                        btn1.setTextColor(Color.WHITE);
                    }
                    else{
                        btn1.setBackgroundColor(Color.LTGRAY);
                        btn1.setTextColor(Color.BLACK);
                    }
                    Toast.makeText(getApplicationContext(),t+" ve "+s,Toast.LENGTH_LONG).show();
                    toastmesaj=t+" ve "+s;
                }
                if (yesil.isChecked()){
                    t+=" Yeşil";
                    String s="Seçilen bileşen :";
                    if (renkseciniz.isChecked()){
                        s+=" Text View";
                        text2.setBackgroundColor(Color.GREEN);
                    }
                    else{
                        text2.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (radiogrup.isChecked()){
                        s+=" RadioGroup";
                        rdgrp.setBackgroundColor(Color.GREEN);
                    }
                    else{
                        rdgrp.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (ayarla.isChecked()){
                        s+=" Ayarla Butonu";
                        btn2.setBackgroundColor(Color.GREEN);
                    }
                    else{
                        btn2.setBackgroundColor(Color.LTGRAY);
                    }
                    if (mesajaktar.isChecked()){
                        s+=" Mesaj Aktar Butonu";
                        btn1.setBackgroundColor(Color.GREEN);
                    }
                    else{
                        btn1.setBackgroundColor(Color.LTGRAY);
                    }
                    Toast.makeText(getApplicationContext(),t+" ve "+s,Toast.LENGTH_LONG).show();
                    toastmesaj=t+" ve "+s;
                }
                if (gri.isChecked()){
                    t+=" Gri";
                    String s="Seçilen bileşen :";
                    if (renkseciniz.isChecked()){
                        s+=" Text View";
                        text2.setBackgroundColor(Color.GRAY);
                    }
                    else{
                        text2.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (radiogrup.isChecked()){
                        s+=" RadioGroup";
                        rdgrp.setBackgroundColor(Color.GRAY);
                    }
                    else{
                        rdgrp.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (ayarla.isChecked()){
                        s+=" Ayarla Butonu";
                        btn2.setBackgroundColor(Color.GRAY);
                    }
                    else{
                        btn2.setBackgroundColor(Color.LTGRAY);
                    }
                    if (mesajaktar.isChecked()){
                        s+=" Mesaj Aktar Butonu";
                        btn1.setBackgroundColor(Color.GRAY);
                    }
                    else{
                        btn1.setBackgroundColor(Color.LTGRAY);
                    }
                    Toast.makeText(getApplicationContext(),t+" ve "+s,Toast.LENGTH_LONG).show();
                    toastmesaj=t+" ve "+s;
                }
                if (mavi.isChecked()){
                    t+=" Mavi";
                    String s="Seçilen bileşen :";
                    if (renkseciniz.isChecked()){
                        s+=" Text View";
                        text2.setBackgroundColor(Color.BLUE);
                    }
                    else{
                        text2.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (radiogrup.isChecked()){
                        s+=" RadioGroup";
                        rdgrp.setBackgroundColor(Color.BLUE);
                    }
                    else{
                        rdgrp.setBackgroundColor(Color.TRANSPARENT);
                    }
                    if (ayarla.isChecked()){
                        s+=" Ayarla Butonu";
                        btn2.setBackgroundColor(Color.BLUE);
                    }
                    else{
                        btn2.setBackgroundColor(Color.LTGRAY);
                    }
                    if (mesajaktar.isChecked()){
                        s+=" Mesaj Aktar Butonu";
                        btn1.setBackgroundColor(Color.BLUE);
                    }
                    else{
                        btn1.setBackgroundColor(Color.LTGRAY);
                    }
                    Toast.makeText(getApplicationContext(),t+" ve "+s,Toast.LENGTH_LONG).show();
                    toastmesaj=t+" ve "+s;
                }
            }
        });

        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this,Main2Activity.class);
                i.putExtra("toastmesaji",toastmesaj);
                startActivity(i);
            }
        });
    }
}
