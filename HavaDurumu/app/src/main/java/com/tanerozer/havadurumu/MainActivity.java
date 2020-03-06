package com.tanerozer.havadurumu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;


import org.json.JSONObject;
import java.io.InputStream;
import java.io.InputStreamReader;

import java.net.URL;
import javax.net.ssl.HttpsURLConnection;

public class MainActivity extends AppCompatActivity {
    EditText edittext;
    TextView textView;
    Button getir;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        edittext=findViewById(R.id.editText);
        textView=findViewById(R.id.textView);
        getir=findViewById(R.id.get);
    }

    public void getir(View view){
        Download downloadData=new Download();
        String sehir=edittext.getText().toString();
        try{
            String url="https://openweathermap.org/data/2.5/weather?q="+sehir+"&appid=b6907d289e10d714a6e88b30761fae22";
            downloadData.execute(url);
            Toast.makeText(this,"Veriler indiriliyor..",Toast.LENGTH_SHORT).show();
        }
        catch (Exception e){
        }
    }

    private class Download extends AsyncTask<String, Void, String> {
        @Override
        protected String doInBackground(String... strings) {
            String sonuc="";
            URL url;
            HttpsURLConnection httpsURLConnection;

            try {
                url = new URL(strings[0]);
                httpsURLConnection=(HttpsURLConnection) url.openConnection();
                InputStream inputStream=httpsURLConnection.getInputStream();
                InputStreamReader inputStreamReader=new InputStreamReader(inputStream);

                int data=inputStreamReader.read();

                while (data > 0) {
                    char c=(char) data;
                    sonuc+=c;
                    data=inputStreamReader.read();
                }
                return sonuc;
            } catch (Exception e) {
                return null;
            }
        }

        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);
            try {
                JSONObject jsonObject = new JSONObject(s);

                String main=jsonObject.getString("main");
                JSONObject jsonObject1=new JSONObject(main);
                String temp=jsonObject1.getString("temp");
                String enyuksek=jsonObject1.getString("temp_max");
                String endusuk=jsonObject1.getString("temp_min");
                String nem=jsonObject1.getString("humidity");
                String sys=jsonObject.getString("sys");
                JSONObject jsonObject2=new JSONObject(sys);
                String ulke=jsonObject2.getString("country");
                String rüzgar=jsonObject.getString("wind");
                JSONObject jsonObject3=new JSONObject(rüzgar);
                String rHızı=jsonObject3.getString("speed");

                textView.setText("Sıcaklık:"+temp+" C"+"\nEnyuksek derece:"+enyuksek+" C"+"\nEndüsük:"+endusuk+" C"+
                        "\nNem:%"+nem+"\nRuzgar Hızı:"+rHızı+"\nUlke:"+ulke);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
