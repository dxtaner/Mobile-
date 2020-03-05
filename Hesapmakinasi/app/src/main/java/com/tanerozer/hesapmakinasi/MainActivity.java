package com.tanerozer.hesapmakinasi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText editText1;
    EditText editText2;
    TextView sonuctext;
    TextView isaret;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText1= (EditText) findViewById(R.id.editText);
        editText2= (EditText) findViewById(R.id.editText2);
        sonuctext= (TextView) findViewById(R.id.textView);
        isaret=(TextView) findViewById(R.id.textView2);

    }

    public void toplama(View view){
    if(editText1.getText().toString().equals("") || editText2.getText().toString().equals("")){
        sonuctext.setText("Sayı girin..");
    }
    else{
        int a=Integer.parseInt(editText1.getText().toString());
        int b=Integer.parseInt(editText2.getText().toString());
        int sonuc=a+b;
        sonuctext.setText("Sonuç :"+sonuc);
        isaret.setText("+");
        }
    }
    public void cikarma(View view)
    {if(editText1.getText().toString().equals("") || editText2.getText().toString().equals("")){
        sonuctext.setText("Sayı girin..");
    }
    else{
        int a=Integer.parseInt(editText1.getText().toString());
        int b=Integer.parseInt(editText2.getText().toString());
        int sonuc=a-b;
        sonuctext.setText("Sonuç :"+sonuc);
        isaret.setText("-");
    }
    }
    public void carpma(View view){
        if(editText1.getText().toString().equals("") || editText2.getText().toString().equals("")){
            sonuctext.setText("Sayı girin..");
        }
        else{
            int a=Integer.parseInt(editText1.getText().toString());
            int b=Integer.parseInt(editText2.getText().toString());
            int sonuc=a*b;
            sonuctext.setText("Sonuç :"+sonuc);
            isaret.setText("X");
        }
    }
    public void bolme(View view){
        if(editText1.getText().toString().equals("") || editText2.getText().toString().equals("")){
            sonuctext.setText("Sayı girin..");
        }
        else if(editText2.getText().toString().equals("0")){
            sonuctext.setText("0'ya bölme hatası.. Lütfen başka sayı giriniz.");
        }
        else{
            int a=Integer.parseInt(editText1.getText().toString());
            int b=Integer.parseInt(editText2.getText().toString());
            int sonuc=a/b;
            sonuctext.setText("Sonuç :"+sonuc);
            isaret.setText("/");
        }
    }
    public void modalma(View view){
        if(editText1.getText().toString().equals("") || editText2.getText().toString().equals("")){
            sonuctext.setText("Sayı girin..");
        }
        else{
            int a=Integer.parseInt(editText1.getText().toString());
            int b=Integer.parseInt(editText2.getText().toString());
            int sonuc=a%b;
            sonuctext.setText("Sonuç :"+sonuc);
            isaret.setText("%");
        }
    }
}
