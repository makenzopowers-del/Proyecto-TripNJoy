# 1. Le decimos que use una versión oficial de PHP (la 8.2 es ideal para Laravel)
FROM php:8.2-cli

# 2. Instalamos herramientas de Linux que Laravel necesita para funcionar
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# 3. Limpiamos la caché de instalaciones para que el contenedor pese menos
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# 4. Instalamos las extensiones de PHP (importantísimo pdo_mysql para conectarnos a la base de datos)
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# 5. Descargamos Composer mágicamente y lo metemos en nuestro contenedor
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 6. Le decimos que nuestra carpeta de trabajo dentro del contenedor será /app
WORKDIR /app

# 7. Copiamos todos los archivos de tu Windows (backend) al contenedor (/app)
COPY . /app

# 8. El comando final que mantiene "vivo" el contenedor y levanta el servidor de Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]