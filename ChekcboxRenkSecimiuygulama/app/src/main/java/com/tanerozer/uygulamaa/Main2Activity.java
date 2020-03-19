package com.tanerozer.uygulamaa;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class Main2Activity extends AppCompatActivity {
    TextView textView3;
    Button geridon;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        textView3=findViewById(R.id.textView3);
        geridon=findViewById(R.id.geri);

        Intent i = getIntent();
        String text = i.getStringExtra("toastmesaji");
        textView3.setText(text);

    }
    public void geri(View view){
        Intent k = new Intent(Main2Activity.this,MainActivity.class);
        startActivity(k);
    }
}
