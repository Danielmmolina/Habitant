# Habitant
Proyecto de taller de desarrollo.
###################### EN CASO DE EJECUTAR EN UBUNTU 22.04 ######################
# Actualiza la lista de paquetes en el sistema
sudo apt update

# Instala herramientas básicas necesarias: curl, git y build-essential
sudo apt install -y curl git build-essential

# Configuración de variables de entorno para Node.js y NVM (Ejecutar una por una)
export NODE_VERSION=18.18.1
export NVM_DIR=/root/.nvm
export PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Descarga e instala NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Activa NVM para que se pueda utilizar en este script (Ejecutar una por una)
. "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}

. "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}

. "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}

# Descarga y configura la clave GPG de Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor -o /usr/share/keyrings/yarn-archive-keyring.gpg

# Agrega el repositorio de Yarn a la lista de fuentes de paquetes de APT
echo "deb [signed-by=/usr/share/keyrings/yarn-archive-keyring.gpg] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Actualiza la lista de paquetes después de agregar el repositorio de Yarn
sudo apt update

# Instala Yarn
sudo apt install -y yarn

# Crea el directorio del proyecto
sudo mkdir -p /usr/proyecto

# Clona el repositorio de GitHub en el directorio del proyecto
sudo git clone https://github.com/Danielmmolina/Habitant.git /usr/proyecto/Habitant

# Cambia al directorio del proyecto
cd /usr/proyecto/Habitant

# Instala las dependencias del proyecto utilizando Yarn
yarn install

# Correr la app
yarn start 

# En caso de que se requiera cambiar el puerto utilizar el siguiente comando en donde "PUERTO" se debe cambiar por el puerto deseado:
yarn start --port PUERTO --reset-cache
