package com.tanerozer.listview;

import java.io.Serializable;

public class Icecek implements Serializable {
    private String ad;
    private int fiyat;
    private int resimId;

    public Icecek(String ad, int fiyat, int resimId) {
        this.ad = ad;
        this.fiyat = fiyat;
        this.resimId = resimId;
    }

    public String getAd() {
        return ad;
    }

    public void setAd(String ad) {
        this.ad = ad;
    }

    public int getFiyat() {
        return fiyat;
    }

    public void setFiyat(int fiyat) {
        this.fiyat = fiyat;
    }

    public int getResimId() {
        return resimId;
    }

    public void setResimId(int resimId) {
        this.resimId = resimId;
    }
}
