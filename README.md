# CRA + MySQL Project

Ini adalah project CRA + MySQL sederhana saya yang bernama react-mysql. Pada aplikasi ini kita bisa menyimpan data ke database mysql untuk menyimpan nama produk dan harga, serta dapat di edit dan di hapus pada data yang sudah ada.

### Hasil

![](/assets/capture.PNG)

## Tech Stack

**Server:** Nodemon, MySQL, Sequelize, express.
**Client:** CRA, axios, Tailwind

## Installation & Running Project

To run installation, run the following command

**Clone First:**

```bash
  git clone https://github.com/yogihendrawan79/react-mysql.git
  cd react-mysql/
```

**For Server:**

```bash
  cd backend/
  npm i
```

**For Client:**

```bash
  cd frontend/
  npm i
```

To import the database to mysql

```bash
  - Turn on Apache and MySQL
  - Open localhost/phpmyadmin at the browser
  - Create database name `tokoku`
  - Import the sql file at `backend/db/tokoku.sql` to mysql
```

To run the project, run the following command

**For Server:**

```bash
  cd backend/
  npm run serve
```

**For Client:**

```bash
  cd frontend/
  npm run start
```

> Note: `find a bug? it's features haha.
