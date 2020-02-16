package com.tanerozer.sozlukuygulamasi;

import androidx.appcompat.app.AppCompatActivity;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    SQLiteDatabase sqlData;
    EditText kelime,anlam;
    Button kaydet,listele,guncelle;
    TextView textView;
    ListView listView;
    int nameix,meanix,index;
    ArrayList<String> kelimeArray;
    ArrayList<String> anlamArray;
    ArrayList<Integer> idArray;
    ArrayAdapter arrayAdapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        kelime=findViewById(R.id.editText);
        anlam=findViewById(R.id.editText2);

        kaydet=findViewById(R.id.btn_kaydet);
        listele=findViewById(R.id.btn_listele);
        guncelle=findViewById(R.id.btn_guncelle);

        textView=findViewById(R.id.textView);
        listView=findViewById(R.id.listview);

        kelimeArray= new ArrayList<String>();
        anlamArray= new ArrayList<String>();
        idArray= new ArrayList<Integer>();

        arrayAdapter= new ArrayAdapter(this,android.R.layout.simple_list_item_1,kelimeArray);
        listView.setAdapter(arrayAdapter);

        try {
            sqlData = this.openOrCreateDatabase("Sozluk", MODE_PRIVATE, null);
            sqlData.execSQL("CREATE TABLE IF NOT EXİSTS kelimeler (id INTEGER PRIMARY KEY,kelime VARCHAR,anlam VARCHAR)");
            textView.setText("Veri tabani olusturuldu..");

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    index=idArray.get(position);
                    textView.setText(""+index);

                    final Cursor cursor=sqlData.rawQuery("SELECT * FROM kelimeler",null);
                    nameix=cursor.getColumnIndex("kelime");
                    meanix=cursor.getColumnIndex("anlam");
                    cursor.moveToPosition(index-1);
                    kelime.setText(cursor.getString(nameix));
                    anlam.setText(cursor.getString(meanix));
                    cursor.close();
                }
            });
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void kaydet(View view){
        try {
            String klm=kelime.getText().toString();
            String anlm=anlam.getText().toString();

            sqlData = this.openOrCreateDatabase("Sozluk", MODE_PRIVATE, null);
            //sqlData.execSQL("INSERT INTO kelimeler (kelime,anlam) VALUES (klm,anlm)");

            String sqlstrg="INSERT INTO kelimeler (kelime,anlam) VALUES (?,?)";
            SQLiteStatement sqLiteStatement= sqlData.compileStatement(sqlstrg);
            sqLiteStatement.bindString(1,klm);
            sqLiteStatement.bindString(2,anlm);
            sqLiteStatement.execute();

            textView.setText("kayit eklendi...");
        }
        catch (Exception e){
            e.printStackTrace();;
        }
    }

    public void listele(View view){
        try{
            sqlData = this.openOrCreateDatabase("Sozluk", MODE_PRIVATE, null);
            Cursor cursor=sqlData.rawQuery("SELECT * FROM kelimeler",null);

            nameix=cursor.getColumnIndex("kelime");
            meanix=cursor.getColumnIndex("anlam");
            index=cursor.getColumnIndex("id");

            while (cursor.moveToNext()){
                kelimeArray.add(cursor.getString(nameix));
                idArray.add(cursor.getInt(index));
            }
            arrayAdapter.notifyDataSetChanged();

            cursor.close();
            textView.setText("Kayıtlar listelendi..");
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
