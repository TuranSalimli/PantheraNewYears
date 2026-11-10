// Şəkillər src/assets/categories/<folder>/ qovluğuna atılır, nə qədər istəsəniz.
// Qapaq şəkli: qovluqda "cover.jpg" (və ya cover.png/webp) adlı fayl varsa o seçilir,
// yoxdursa qovluqdakı ilk şəkil qapaq olur.
// Yeni kateqoriya: yeni qovluq yaradın və aşağıya bir sətir əlavə edin.

const modules = import.meta.glob(
  '/src/assets/categories/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

const basename = (p) => p.split('/').pop();

function load(folder) {
  const entries = Object.entries(modules)
    .filter(([path]) => path.includes(`/categories/${folder}/`))
    .sort(([a], [b]) => basename(a).localeCompare(basename(b), undefined, { numeric: true }));

  const coverEntry = entries.find(([p]) => /^cover\./i.test(basename(p)));
  const images = entries.filter(([p]) => p !== coverEntry?.[0]).map(([, url]) => url);
  const cover = coverEntry ? coverEntry[1] : images[0] || null;
  return { cover, images };
}

const defs = [
  { id: 'bouquets', folder: 'bouquets', title: 'Exteryer dizaynı' },
  { id: 'compositions', folder: 'compositions', title: 'Şam Ağacları' },
  { id: 'gift-boxes', folder: 'gift-boxes', title: 'Masa Dizaynları' },
  { id: 'accessories', folder: 'accessories', title: 'Bəzək və aksesuar' },
];

export const categories = defs.map((c) => ({ ...c, ...load(c.folder) }));
