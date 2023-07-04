# Crud_Angular_Laravel
Crud Angular e Laravel


# Pré-requisitos
Node.js (versão 18.16)
Angular CLI (versão 16.1.3)
Laravel (versão 10.10)
PHP (versão 8.1)

# Instalação
Clone o repositório:
bash
Copy code
git clone https://github.com/luskafonseca/projeto_estagio

Navegue até o diretório do projeto:
cd projeto_estagio

Instale as dependências do backend:
composer install

Instale as dependências do frontend:
npm install

# Configuração
Abra o arquivo .env na pasta raiz do projeto Laravel e verifique se as configurações de ambiente estão corretas, como as credenciais do banco de dados e a URL da API.
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=produtos
DB_USERNAME=postgres
DB_PASSWORD=root


Executando a Aplicação
Execute o servidor backend do Laravel:
php artisan serve

Em um novo terminal, execute o servidor frontend do Angular:
ng serve

Acesse a aplicação em http://localhost:4200 no seu navegador.


Contato
Lucas Fonseca
luzkfonseca@gmail.com
