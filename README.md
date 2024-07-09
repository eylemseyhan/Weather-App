# Hava Durumu Uygulaması

Bu proje, HTML, CSS ve JavaScript kullanılarak oluşturulmuş bir hava durumu uygulamasıdır. OpenWeatherAPI kullanılarak hava durumu verileri alınmaktadır. Kullanıcılar, şehir adını girerek anlık hava durumu bilgilerini görüntüleyebilirler.

## Proje Özellikleri

- Kullanıcı dostu arayüz
- Anlık hava durumu bilgileri (sıcaklık, hava durumu açıklaması, nem oranı, rüzgar hızı)
- Türkçe dil desteği
- Şık ve modern tasarım

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- [OpenWeatherAPI](https://openweathermap.org/)

## Kurulum ve Kullanım

1. Bu projeyi klonlayın veya indirin:
    ```sh
    git clone https://github.com/YOUR_GITHUB_USERNAME/weather-js-app.git
    cd weather-js-app
    ```

2. Gerekli dosyaların yüklü olduğundan emin olun:
    ```sh
    npm install
    ```

3. OpenWeatherAPI anahtarınızı alın:
    - OpenWeatherAPI'ye kayıt olun ve bir API anahtarı alın: https://openweathermap.org/api

4. `script.js` dosyasındaki `APIKey` değişkenini kendi API anahtarınızla değiştirin:
    ```javascript
    const APIKey = "YOUR_API_KEY";
    ```

5. Projeyi yerel sunucunuzda çalıştırın veya bir tarayıcıda `index.html` dosyasını açın.

## Dosya Yapısı

