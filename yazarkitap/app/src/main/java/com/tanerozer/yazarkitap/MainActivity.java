package com.tanerozer.yazarkitap;

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

public class MainActivity extends AppCompatActivity {
    SQLiteDatabase sqLiteDatabase;
    EditText kitapadi, yazaradi;
    Button btnkaydet, btnsilme, btnguncelle, btnbulma, btnlistele;

    ListView listView;
    ArrayList<String> kitapadlari;
    ArrayList<String> yazaradlari;
    ArrayList<Integer> idArray;
    ArrayAdapter arrayAdapter;

    int idindex, kitapindex, yazarindex;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        kitapadi = findViewById(R.id.editText);
        yazaradi = findViewById(R.id.editText2);

        btnbulma = findViewById(R.id.bul);
        btnguncelle = findViewById(R.id.guncelle);
        btnkaydet = findViewById(R.id.kaydet);
        btnlistele = findViewById(R.id.listele);
        btnsilme = findViewById(R.id.sil);

        listView = findViewById(R.id.listview);
        kitapadlari = new ArrayList<String>();
        yazaradlari = new ArrayList<String>();
        idArray = new ArrayList<Integer>();
        arrayAdapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, kitapadlari);
        listView.setAdapter(arrayAdapter);

        try {
            sqLiteDatabase = this.openOrCreateDatabase("Kitaplar", MODE_PRIVATE, null);
            sqLiteDatabase.execSQL("CREATE TABLE IF NOT EXISTS kitaplar (id INTEGER PRIMARY KEY, kitapadi VARCHAR, yazaradi VARCHAR)");


            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    idindex = idArray.get(position);
                    final Cursor cursor = sqLiteDatabase.rawQuery("SELECT * FROM kitaplar", null);
                    kitapindex = cursor.getColumnIndex("kitapadi");
                    yazarindex = cursor.getColumnIndex("yazaradi");
                    cursor.moveToPosition(idindex - 1);
                    kitapadi.setText(cursor.getString(kitapindex));
                    yazaradi.setText(cursor.getString(yazarindex));
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void kaydt(View view){
        try{
            String ktpad = kitapadi.getText().toString();
            String yzrad = yazaradi.getText().toString();

            String sqlString = "INSERT INTO kitaplar (kitapadi,yazaradi) VALUES (?, ?)";
            SQLiteStatement sqLiteStatement = sqLiteDatabase.compileStatement(sqlString);
            sqLiteStatement.bindString(1, ktpad);
            sqLiteStatement.bindString(2, yzrad);
            sqLiteStatement.execute();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void listle(View view){
        try{
            sqLiteDatabase = this.openOrCreateDatabase("Kitaplar", MODE_PRIVATE, null);
            final Cursor cursor = sqLiteDatabase.rawQuery("SELECT * FROM kitaplar", null);
            kitapindex = cursor.getColumnIndex("kitapadi");
            int idIx = cursor.getColumnIndex("id");

            while (cursor.moveToNext()) {
                kitapadlari.add(cursor.getString(kitapindex));
                idArray.add(cursor.getInt(idIx));
            }
            arrayAdapter.notifyDataSetChanged();
            cursor.close();
        }

        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void gunclle(View view){
        try{
            String ktpad=kitapadi.getText().toString();
            String yzrad=yazaradi.getText().toString();
            sqLiteDatabase=this.openOrCreateDatabase("Kitaplar", MODE_PRIVATE, null);
            String sql="UPDATE kitaplar SET yazaradi=? WHERE kitapadi=?";
            SQLiteStatement sqLiteStatement=sqLiteDatabase.compileStatement(sql);
            sqLiteStatement.bindString(1,ktpad);
            sqLiteStatement.bindString(2,yzrad);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void bull(View view){
        try {
            String ktpad=kitapadi.getText().toString();
            yazaradi.setText("");
            sqLiteDatabase = this.openOrCreateDatabase("Kitaplar", MODE_PRIVATE, null);
            Cursor cursor=sqLiteDatabase.rawQuery("SELECT * FROM kitaplar WHERE kitapadi =?",new String[] {ktpad});
            kitapindex = cursor.getColumnIndex("kitapadi");
            yazarindex = cursor.getColumnIndex("yazaradi");
            int idIx = cursor.getColumnIndex("id");
            cursor.moveToNext();
            yazaradi.setText(cursor.getString(yazarindex));
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public void silmee(View view){
        try{
            String ktpad=kitapadi.getText().toString();
            sqLiteDatabase=this.openOrCreateDatabase("Kitaplar", MODE_PRIVATE, null);
            String sqlString = "DELETE FROM kitaplar WHERE name = ?";
            SQLiteStatement statement = sqLiteDatabase.compileStatement(sqlString);
            statement.bindString(1,ktpad);
            kitapadlari.remove(ktpad);
            statement.execute();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}