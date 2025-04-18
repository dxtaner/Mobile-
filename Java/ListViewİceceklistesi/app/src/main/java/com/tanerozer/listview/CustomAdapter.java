package com.tanerozer.listview;

import android.app.Activity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.ArrayList;

class CustomAdaptor extends ArrayAdapter<Icecek> {
     private ArrayList<Icecek> icecek;
     private Activity context;

     public CustomAdaptor(ArrayList<Icecek> icecek,Activity context){
         super(context,R.layout.customlayout,icecek);
         this.icecek=icecek;
         this.context=context;
     }

     public View getView(int position, @Nullable View contertView,@NonNull ViewGroup parent){
         // Custom_view ile Custom_Adaptoru birbirine bağlıyoruz. Bunun icin
         LayoutInflater layoutInflater = context.getLayoutInflater();
         View customView = layoutInflater.inflate(R.layout.customlayout,null,true);
         TextView adView = customView.findViewById(R.id.customtv);
         adView.setText(icecek.get(position).getAd());
         return customView;
     }

}

