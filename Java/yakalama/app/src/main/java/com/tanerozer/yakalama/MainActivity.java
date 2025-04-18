package com.tanerozer.yakalama;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText editText;
    Button btn1,btn2;
    SharedPreferences sharedPreferences;
    String adshpref;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editText=findViewById(R.id.editText);
        btn1=findViewById(R.id.btn1);
        btn2=findViewById(R.id.btn3);

        sharedPreferences=this.getSharedPreferences("com.tanerozer.yakalama", Context.MODE_PRIVATE);
        adshpref=sharedPreferences.getString("username","");
        if (!adshpref.isEmpty()){
            editText.setText(adshpref);
        }
    }

    public void ismikaydet(View view){
        String name = editText.getText().toString();
        sharedPreferences.edit().putString("username",name).apply();
    }

    public void unut(View view){
        String storeAd = sharedPreferences.getString("username","");
        if (!storeAd.isEmpty()){
            sharedPreferences.edit().remove("username").apply();
            editText.setText("");
        }
    }

    public void oyunabasla(View View){
        if (editText.getText().toString().isEmpty()){
            Toast.makeText(getApplicationContext(),"İsminizi Giriniz..",Toast.LENGTH_LONG).show();
        }
        else {
            String ad=editText.getText().toString();
            Intent i = new Intent(MainActivity.this, Main2Activity.class);
            i.putExtra("name",ad);
            startActivity(i);
        }
    }
}
