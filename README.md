# Panthera Floral Studio: Yeni İl kataloqu (React + Vite)

## İşə salmaq
```bash
npm install
npm run dev      # development
npm run build    # production build (dist/)
```
Node.js 18+ lazımdır.

## Şəkilləri necə əlavə etməli
```
src/assets/categories/
  bouquets/        Buketlər
  compositions/    Kompozisiyalar
  gift-boxes/      Hədiyyə qutuları
  accessories/     Bəzək və aksesuar
```
- Şəkilləri (jpg, png, webp) uyğun qovluğa atın, saytda avtomatik görünəcək.
- Fayl adlarına görə sıralanır: `01.jpg`, `02.jpg`, ...
- **Qapaq şəkli:** qovluqda `cover.jpg` varsa ana səhifədə o göstərilir (qalereyada görünmür).
  Yoxdursa, qovluqdakı ilk şəkil qapaq olur.

## Yeni kateqoriya
`src/assets/categories/` içində yeni qovluq yaradın və
`src/data/categories.js` faylındakı siyahıya bir sətir əlavə edin.

## Dəyişməli yerlər
- `src/config.js`: WhatsApp nömrəsi və Instagram adı
- `src/data/categories.js`: kateqoriya adları
