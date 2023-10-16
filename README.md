# "Merax Backend Pro" kursi uchun kirish topshirig'i

## Topshiriq:

## Node.js, Express.js va JWT orqali foydalanuvchilarni ro'yhatga olish, login qilish va foydalanuvchi haqidagi ma'lumotni oladigan app tuzilsin

### Vazifalar:

```
1. Loyiha strukturasi ko'zdan kechirilsin;
2. Strukturadan chiqmay ishlansin;
3. O'qishga oson kod yozilsin;
4. Ma'lumotlar bazasi sifatida "data" papkasidan foydalanilsin;
5. Model'da baza bilan ishlovchi funksiyalar yozilsin;
6. Loyiha Postman (yoki biror alternativada) test qilinsin
```

### Routlar:

#### #1. Ro'yhatdan o'tish

```
> "/auth/register" - Foydalanuvchi ro'yhatdan o'tadi.

> Ushbu ma'lumotlarni so'rov tanasida yuborish kerak: name, email, password;
> Parol hash qilinishi kerak;
> 201 statusda "Foydalanuvch muvofaqiyatli qo'shildi" habari qaytsin;
> 400 statusda "Email allaqachon ishlatilingan" habari qaytsin;
```

#### #2. Login qilish

```
> "/auth/login" - Foydalanuvchi login qiladi.

> Ushbu ma'lumotlarni so'rov tanasida yuborish kerak: email, password;
> Parol solishtirilishi kerak;
> 200 statusda access_token habari qaytsin;
> 400 statusda "Foydalanuvchi topilmadi" yoki "Notog'ri parol" habari qaytsin;
```

#### #3. Profilni olish

```
> "/auth/profile" - Foydalanuvchi o'z ma'lumotini oladi.

> Ushbu ma'lumotlarni so'rov Auth header'ida* yuborish kerak: access_token;
> access_token middleware orqali tekshirilishi kerak;
> 200 statusda foydalanuvchi ma'lumotlari qaytsin;
> 400 statusda "Foydalanuvchi topilmadi" yoki "Notog'ri access_token" habari qaytsin;
```
