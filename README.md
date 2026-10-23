# Gojek Home Screen UI Clone (React Native & Expo)

Proyek ini adalah tugas implementasi antarmuka (*User Interface*) halaman utama aplikasi **Gojek** menggunakan **React Native**, **Expo**, serta penerapan **StyleSheet** dan **Flexbox**.

---

## Screenshots UI

| Header | Services (Menu Layanan) | Banner |
| :---: | :---: | :---: |
| *<img width="1179" height="351" alt="header" src="https://github.com/user-attachments/assets/7ce2df1d-6970-4fa2-9d07-d7741a48daa4" />* | *<img width="1179" height="843" alt="services" src="https://github.com/user-attachments/assets/c65038fa-85ec-4eb5-b5cf-a47589d02f0b" />* | *<img width="1178" height="1174" alt="banner3" src="https://github.com/user-attachments/assets/328e0381-4d33-4a7b-b85d-7e78d3d8f278" />* |

| Merchants | Bottom Navigation Bar |
| :---: | :---: |
| *<img width="1178" height="935" alt="merchants3" src="https://github.com/user-attachments/assets/e9498622-c31b-4569-96b5-52d4c4732cc4" />* | *<img width="1179" height="222" alt="navbar" src="https://github.com/user-attachments/assets/1900d80b-cc98-4b15-bab8-fd20390d2833" />* |

## Screenshots UI Full

| Gojek | Gojek2 |
| :---: | :---: |
| <img width="590" height="1280" alt="gojekclone" src="https://github.com/user-attachments/assets/51e4a88d-47af-439a-81ee-f711a6ce2205" /> | <img width="590" height="1280" alt="gojekclone2" src="https://github.com/user-attachments/assets/a3ec5e14-d2ed-4e9d-802e-698231974269" />
---

## Project Description
* **What we built**: Mengembangkan tiruan halaman utama (Home Screen) aplikasi super app Gojek yang mencakup komponen header profil pengguna, menu grid layanan utama (seperti GoRide, GoCar, GoFood, dll), banner informasi promo, daftar rekomendasi merchant atau layanan pilihan, serta bilah navigasi bawah (bottom navigation).
* **What we learned**: Memahami cara menyusun komponen antarmuka berlapis di React Native, mengelola tata letak responsif dengan Flexbox, serta membiasakan diri memisahkan kode tampilan menggunakan StyleSheet.create.

---

## Tech Stack
* **Framework**: React Native (via Expo)
* **Styling**: StyleSheet.create (Tanpa *inline styles* demi performa dan keterbacaan kode yang optimal)
* **Layout Engine**: Flexbox (flexDirection, justifyContent, alignItems, flexWrap)
* **Components**: View, Text, ScrollView, Image, Pressable, Dimensions

---

## Challenges & Solutions
* **Tantangan**: Mengatur tata letak menu layanan (ikon grid) agar rapi, simetris, dan tetap responsif di berbagai ukuran layar perangkat yang berbeda (baik mode potret maupun lanskap).
* **Solusi**: Menerapkan kombinasi properti Flexbox seperti flexWrap: wrap dengan perhitungan persentase lebar elemen (width) menggunakan modul Dimensions dari React Native agar elemen tersusun secara proporsional.

---

## Tautan Akses & Pengujian
* **GitHub Repository**: [Gojek Clone Repository](https://github.com/gladys-beep/gojekclone)
* **Expo Snack Link**: https://snack.expo.dev/@gladys_expo/gojek-clone
