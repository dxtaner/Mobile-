package com.tanerozer.listview;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    ListView listView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listView=findViewById(R.id.listview);

        Icecek cay= new Icecek("çay",2,R.drawable.cay);
        Icecek kahve= new Icecek("kahve",5,R.drawable.kahve);
        Icecek su= new Icecek("su",1,R.drawable.su);
        Icecek kola= new Icecek("kola",4,R.drawable.kola);


        final ArrayList<Icecek> icecekArrayList = new ArrayList<>();
        icecekArrayList.add(cay);
        icecekArrayList.add(kahve);
        icecekArrayList.add(su);
        icecekArrayList.add(kola);

        CustomAdaptor customAdaptor=new CustomAdaptor(icecekArrayList,MainActivity.this);
        listView.setAdapter(customAdaptor);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent i=new Intent(MainActivity.this,Main2Activity.class);
                i.putExtra("secilenicecek",icecekArrayList.get(position));
                startActivity(i);
            }
        });



        /*
        ArrayList<String> icecekisimleri = new ArrayList<>();

        for (int i=0; i<icecekArrayList.size(); i++){
            icecekisimleri.add(icecekArrayList.get(i).getAd());
        }

        ArrayAdapter  arrayAdapter = new ArrayAdapter(MainActivity.this,android.R.layout.simple_list_item_1,icecekisimleri);
        listView.setAdapter(arrayAdapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent i= new Intent(MainActivity.this,Main2Activity.class);
                i.putExtra("ad",icecekArrayList.get(position).getAd());
                i.putExtra("fiyat",icecekArrayList.get(position).getFiyat());
                startActivity(i);
            }
        });
*/
    }
}
