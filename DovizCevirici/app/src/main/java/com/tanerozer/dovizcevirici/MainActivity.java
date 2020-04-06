package com.tanerozer.dovizcevirici;

import androidx.appcompat.app.AppCompatActivity;

import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import org.json.JSONObject;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {
    TextView tltext,jpytext,cadtext,qartext,veftext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tltext=findViewById(R.id.tltext);
        jpytext=findViewById(R.id.jpytext);
        cadtext=findViewById(R.id.Cadtext);
        qartext=findViewById(R.id.qartext);
        veftext=findViewById(R.id.veftext);
    }

    public void getir(View view){
        DownloadData downloadData = new DownloadData();
        try{
            String url = "http://data.fixer.io/api/latest?access_key=62c53fb838f98f862ece83cd86a88fc3&format=1";
            downloadData.execute(url);
        }
        catch (Exception e){
        }
    }

    private class DownloadData extends AsyncTask<String, Void, String>{
        @Override
        protected String doInBackground(String... strings) {
            String sonuc="";
            URL url;
            HttpURLConnection httpURLConnection;

            try{
                url = new URL(strings[0]);
                httpURLConnection = (HttpURLConnection) url.openConnection();
                InputStream inputStream = httpURLConnection.getInputStream();
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);

                int data = inputStreamReader.read();

                while (data > 0) {

                    char character = (char) data;
                    sonuc += character;

                    data = inputStreamReader.read();

                }
                return sonuc;
            }
            catch (Exception e){
                return null;
            }
        }
        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);
            try{
                JSONObject jsonObject = new JSONObject(s);
                String base = jsonObject.getString("base");
                String rates = jsonObject.getString("rates");

                JSONObject jsonObject1 = new JSONObject(rates);
                String tl = jsonObject1.getString("TRY");
                tltext.setText("TL: "+tl);
                String cad = jsonObject1.getString("CAD");
                cadtext.setText("CAD: "+cad);
                String vef = jsonObject1.getString("VEF");
                veftext.setText("VEF: "+vef);
                String jpy = jsonObject1.getString("JPY");
                jpytext.setText("JPY: "+jpy);
                String qar = jsonObject1.getString("QAR");
                qartext.setText("QAR: "+qar);
            }
            catch (Exception e){
            }
        }
    }
}
