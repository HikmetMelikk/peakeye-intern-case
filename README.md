# PeakEye Frontend Case
Bu repository PeakEye Frontend Case'i için oluşturulmuştur. Readme dosyasında projenin detaylarını açıklıyor olacağım. 

## Projeyi Çalıştırma

Proje Vercel üzerinden deploy edildiği için herhangi ek bir çalıştırma adımına ihtiyaç duyulmamaktadır. Açıklamadaki linke tıklayarak siteyi ziyaret edebilirsiniz.
    
## Kullanılan Teknolojiler

- Frontend => Next.js, Tailwind CSS ve Typescript ile kodlandı.

- Veritabanı => [Neon](https://neon.tech) (Serverless Postgres) kullanıldı.

- Prisma ile schemalar oluşturuldu ve Neon ile senkronize edildi.

**EKSTRA**

- Authentication => Auth.js ile projeye Google OAuth özelliği eklendi. 
*Bu özellik, siteye case'de ekstra özellik olarak eklenmesi istendiği eklenmiştir, sadece Giriş Yapma ve Çıkış fonksiyonları olarak çalışmaktadır. Giriş yapmak ya da yapmamak sitede herhangi ek bir özellik sağlamamaktadır.* 

[Kodlanan Tasarım](https://www.figma.com/community/file/1216616090937021365/free-blog-template-modern-creative-design) 


## Site Özellikleri
Sitede bulunan bazı butonlar tasarıma uyması için eklenmiştir. Herhangi bir işlevselliği bulunmamaktadır.
- Anasayfada veritabanından çekilen blogların listelenmesi
- Herhangi bir bloga tıklayarak o blogun detaylarına ulaşılması
- Blogların sitede MDX formatına uygun bir şekilde gösterilmesi 
- Tamamen responsive (duyarlı) bir tasarım
- Google hesabı ile basit ve hızlıca giriş yapılabilmesi
- Footerda bulunan Newsletter componentine girilen e-mail adresinin veritabanına kaydedilmesi
- Sitedeki blog verileri yapay zeka ile oluşturulmuş olup, doğru bilgiler içerip içermediği kontrol edilmemiştir.
- Vercel üzerinden kolayca deploy edilmiştir.

  
## Ekran Görüntüleri

<img width="1419" alt="image" src="https://github.com/user-attachments/assets/1dfd2b7a-e6a7-42cc-96ae-f41f0435079b" />

<img width="1417" alt="image" src="https://github.com/user-attachments/assets/efdc9812-f4a7-4c47-bfed-f450439373f4" />


  
