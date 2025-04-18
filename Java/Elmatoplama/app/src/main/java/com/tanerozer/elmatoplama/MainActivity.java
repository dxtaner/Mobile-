package com.tanerozer.elmatoplama;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button btn1,btn2;
    CheckBox checkBox;
    EditText editText;
    SharedPreferences sharedPreferences;
    String adPref;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editText=findViewById(R.id.editText);
        checkBox=findViewById(R.id.ismisakla);
        btn1=findViewById(R.id.unut);
        btn2=findViewById(R.id.oyunabasla);

        sharedPreferences=this.getSharedPreferences("com.tanerozer.elmatoplama", Context.MODE_PRIVATE);
        adPref = sharedPreferences.getString("username", "");
        if (!adPref.isEmpty()){
            editText.setText(adPref);
        }
    }
    public void kaydet(View view){
        if(editText.getText().toString().matches("Name") || editText.getText().toString().isEmpty()){
         Toast toast=Toast.makeText(getApplicationContext(),"isim giriniz..",Toast.LENGTH_SHORT);
         toast.setGravity(Gravity.CENTER,0,0);
         toast.show();
         editText.setFocusable(true);
         editText.requestFocus();
         editText.setText("");
        }
        else{
            String name=editText.getText().toString();
            if(checkBox.isChecked()){
                sharedPreferences.edit().putString("username",name).apply();
            }
            Intent i = new Intent(MainActivity.this,Main2Activity.class);
            i.putExtra("username",name);
            startActivity(i);
        }
    }
    public void unut(View view){
        String storedAd=sharedPreferences.getString("username","");
        if(!storedAd.isEmpty()){
            sharedPreferences.edit().remove("username").apply();
            editText.setText("");
        }

    }
}
