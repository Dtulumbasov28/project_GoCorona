Запуск сборки:

1. Скачать сборку на ПК или клонировать: git clone https://github.com/Dtulumbasov28/GULP-2022.git;

2. Установить пакеты и зависимости: npm install;

Режимы работы:

1. Режим разработчика. Команда запуска npm run dev/ gulp;

2. Режим продакшена. Команда запуска npm run build;

3. Режим продакшена и отправка результата на сервер по FTP. Команда запуска npm run deploy;

4. Режим продакшена и создание ZIP-архива с результатом. Команда запуска npm run zip.

Плагины GULP:

· gulp-copy: скопировать содержимое папки src/styles в папку dist;

· gulp-rm: удалить содержимое папки dist;

· gulp-sass, node-sass: скомпилировать файл src/main.scss в файл dist/main.min.css;

· gulp-concat: соединить файл main.scss + normalize.css;

· browser-sync: создание отладочного сервера для тестировки;

· gulp-sass-glob: реализация группового испорта scss-файлов (не работает);

· gulp-autoprefixer: создание браузерных префиксов webkit- (браузеры Chrome, Safari, Opera), -moz- (Mozilla Firefox) или -ms- (Internet Explorer);

· gulp-smile-px2rem: перевод единиц измерения из абсолютных (px) в относительные (rem);

· gulp-group-css-media-queries: группировка медиа-запросов в css-файлах;

· gulp-clean-css: сжатие файла dist/main.min.css;

· gulp-sourcemaps: сохранение в итоговом файле dist/main.min.css информацию об исходных файлах;

· gulp-babel: преобразование js-кода, использующего возможности ES6, в аналогичный по функциональности ES5-код, который понимают все браузеры;

· gulp-uglify: сжатие файла dist/main.min.js;

· gulp-svgo, gulp-svg-sprite: сжатие svg-изображений и группировка в один svg-спрайт;

· gulp-if: позволяет определить, в какой стадии находится проект, и в зависимости от этого подключать (или не подключать) определенные плагины.
